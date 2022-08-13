import {
  Action,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

export type ModalName = 'feedback';

@Module
export default class Modal extends VuexModule {
  modal: ModalName|null = null

  get modalName(): ModalName | null {
    return this.modal;
  }

  @Mutation
  SET_MODAL_NAME(modal: ModalName | null) {
    this.modal = modal;
  }

  @Action({ commit: 'SET_MODAL_NAME' })
  closeModal(): null {
    return null;
  }

  @Action({ commit: 'SET_MODAL_NAME' })
  openModal(modal: ModalName): ModalName {
    return modal;
  }
}
