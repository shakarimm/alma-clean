<template>
  <div class="list-item cleaner-card"
    :class="{
      'list-item--loading': isLoading,
    }">
    <div class="cleaner-card__col cleaner-card__col--one">
      <div class="cleaner-card__cleaner human-short-card">
        <div class="human-short-card__avatar"
             style="background-image: url(/images/cleaners/cleaner-01.jpg)"></div>
        <div class="human-short-card__name">{{ cleanerName }}</div>
      </div>
    </div>
    <div class="cleaner-card__col cleaner-card__col--two">
      <div class="cleaner-card__cleanings-count">{{ cleaningsCount }}</div>
    </div>
    <div class="cleaner-card__col cleaner-card__col--three">
      <AButtonLink text="В избранное" color="primary"
                   :font-weight="modelValue.status === 'favorite' ? 'medium' : 'regular'"
                   @click="modelValue.status === 'favorite' ? addToDefault() : addToFavorite()"
                   class="cleaner-card__btn cleaner-card__btn--wishlist"/>
      <AButtonLink text="В черный список" color="danger"
                   :font-weight="modelValue.status === 'blocked' ? 'medium' : 'regular'"
                   @click="modelValue.status === 'blocked' ? addToDefault() : addToBlocked()"
                   class="cleaner-card__btn cleaner-card__btn--block"/>
    </div>
    <div class="list-item__loader">
      <Loader color="primary"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import { CleanerApiModel, CleanerModel, CleanerStatus } from '@/types';
import AButton from '@/components/AButton.vue';
import AButtonLink from '@/components/AButtonLink.vue';
import Helpers from '@/helpers';
import cleaners from '@/repositories/api/cleaners';
import Loader from '@/components/Loader.vue';

@Options({
  components: { Loader, AButtonLink, AButton },
  props: {
    modelValue: {
      type: Object as PropType<CleanerModel>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
})
export default class CleanerCard extends Vue {
  readonly modelValue!: CleanerModel;
  isLoading = false;

  get cleanerName(): string {
    return `${this.modelValue.firstName} ${this.modelValue.lastName.substr(0, 1)}.`;
  }

  get cleaningsCount(): string {
    return Helpers.pluralize(this.modelValue.cleaningsCount, [' уборка', ' уборки', ' уборок']);
  }

  emitNewModelData(modelData: CleanerApiModel): void {
    this.$emit('update:modelValue', {
      id: modelData.id,
      firstName: modelData.first_name,
      lastName: modelData.last_name,
      cleaningsCount: modelData.cleanings_count,
      status: modelData.status,
    } as CleanerModel);
  }

  async changeCleanerStatus(status: CleanerStatus): Promise<void> {
    this.isLoading = true;
    try {
      const response = await cleaners.update(this.modelValue.id, {
        status,
      });
      this.emitNewModelData(response.data.data);
    } catch (e) {
      this.$store.dispatch('showAlertError', 'При обновлении данных произошла ошибка');
    } finally {
      this.isLoading = false;
    }
  }

  addToDefault(): void {
    this.changeCleanerStatus('default');
  }

  addToFavorite(): void {
    this.changeCleanerStatus('favorite');
  }

  addToBlocked(): void {
    this.changeCleanerStatus('blocked');
  }
}
</script>
