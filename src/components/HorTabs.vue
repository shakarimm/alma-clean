<template>
  <div class="hor-tabs">
    <a
        :href="`#${tab.tag}`"
        v-for="tab in tabs" :key="tab"
        class="hor-tab tab-js"
        :class="{'hor-tab--active': tab.tag === activeTab?.tag}"
        @click="() => changeActiveTab(tab)"
    >
      <span>{{ tab.label }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';

export interface HorTabProps {
  label: string,
  tag: string,
  isInitialActive: boolean,
}

@Options({
  props: {
    tabs: {
      type: Array as PropType<HorTabProps[]>,
      required: true,
    },
    emits: ['change'],
  },
})
export default class HorTabs extends Vue {
  readonly tabs!: HorTabProps[];
  activeTab: HorTabProps|null = null;

  created(): void {
    this.activeTab = this.tabs.find((tab) => tab.isInitialActive) ?? null;
  }

  changeActiveTab(tab: HorTabProps): void {
    this.activeTab = tab;
    this.$emit('change', this.activeTab.tag);
  }
}
</script>
