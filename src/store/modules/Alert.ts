import {
  Action,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

export type AlertType = 'success' | 'error';

export interface AlertMessage {
  id: number;
  type: AlertType;
  text: string;
}

interface AlertMessages {
  [key: number]: AlertMessage
}

@Module
export default class Alert extends VuexModule {
  messages: AlertMessages = {};
  lastId = 0

  get alertMessages(): AlertMessages {
    return this.messages;
  }

  @Mutation
  ADD_MESSAGE(message: AlertMessage): void {
    this.lastId++;
    this.messages[message.id] = message;
  }

  @Mutation
  REMOVE_MESSAGE(id: number): void {
    delete this.messages[id];
  }

  @Action({ commit: 'ADD_MESSAGE' })
  showAlertError(text: string): AlertMessage {
    return {
      id: this.lastId + 1,
      type: 'error',
      text,
    };
  }

  @Action({ commit: 'ADD_MESSAGE' })
  showAlertSuccess(text: string): AlertMessage {
    return {
      id: this.lastId + 1,
      type: 'success',
      text,
    };
  }

  @Action({ commit: 'REMOVE_MESSAGE' })
  removeAlertMessage(id: number): number {
    return id;
  }
}
