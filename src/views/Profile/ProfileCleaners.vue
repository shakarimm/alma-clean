<template>
  <!--START SECTION ORDERS-->
  <section class="section s-profile-orders">
    <div class="container container--flex">
      <div class="content-block content-block--profile">
        <div v-if="cleanersLoading" class="loader-container">
          <Loader color="primary"/>
        </div>
        <template v-else>
          <HorTabs :tabs="horTabs"
                   class="profile-hor-tabs"
                   @change="horTabsChanged"/>

          <div class="tab-contents-js">
            <div class="tab-content-js"
                 :class="{ 'tab-content-js--active': activeTabTag === 'all' }">
              <div class="separated-block">
                <div class="separated-block__text separated-block__text--full">
                  Здесь собраны все клинеры, которые когда-либо делали у вас уборку.
                  Добавьте в избранное тех, кто вам нравится, чтобы они чаще получали от вас заказы.
                  Нелюбимых клинеров смело отправляйте в “черный список“
                  – больше вы их не увидите.</div>
              </div>
              <div v-if="cleaners.length > 0" class="orders-list">
                <CleanerCard
                    v-for="(cleaner, index) in cleaners" :key="cleaner"
                    v-model="cleaners[index]"
                />
              </div>
              <template v-else>
                <div class="separated-block">
                  <div class="separated-block__title">Ваш список клинеров пуст</div>
                </div>
              </template>
            </div>
            <div class="tab-content-js"
                 :class="{ 'tab-content-js--active': activeTabTag === 'favorite' }">
              <div v-if="favoriteCleaners.length > 0" class="orders-list">
                <CleanerCard
                    v-for="(cleaner, index) in favoriteCleaners" :key="cleaner"
                    v-model="favoriteCleaners[index]"
                    @update:modelValue="updateCleaner($event)"
                />
              </div>
              <template v-else>
                <div class="separated-block">
                  <div class="separated-block__title">Ваш список избранных клинеров пуст</div>
                </div>
              </template>
            </div>
            <div class="tab-content-js"
                 :class="{ 'tab-content-js--active': activeTabTag === 'blocked' }">
              <div v-if="blockedCleaners.length > 0" class="orders-list">
                <CleanerCard
                    v-for="(cleaner, index) in blockedCleaners" :key="cleaner"
                    v-model="blockedCleaners[index]"
                    @update:modelValue="updateCleaner($event)"
                />
              </div>
              <template v-else>
                <div class="separated-block">
                  <div class="separated-block__title">Ваш черный список клинеров пуст</div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
      <ProfileSidebar/>
    </div>
  </section>
  <!--END SECTION ORDERS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HorTabs, { HorTabProps } from '@/components/HorTabs.vue';
import { CleanerModel } from '@/types';
import OrderCard from '@/components/profile/OrderCard.vue';
import Loader from '@/components/Loader.vue';
import cleaners from '@/repositories/api/cleaners';
import CleanerCard from '@/components/profile/CleanerCard.vue';
import ProfileSidebar from '@/components/profile/ProfileSidebar.vue';

@Options({
  components: {
    ProfileSidebar,
    CleanerCard,
    Loader,
    OrderCard,
    HorTabs,
  },
})
export default class ProfileCleaners extends Vue {
  cleaners: null|CleanerModel[] = null;
  horTabs: HorTabProps[] = [
    {
      label: 'Все клинеры',
      tag: 'all',
      isInitialActive: true,
    },
    {
      label: 'Избранные',
      tag: 'favorite',
      isInitialActive: false,
    },
    {
      label: 'Черный список',
      tag: 'blocked',
      isInitialActive: false,
    },
  ];
  activeTabTag = 'all';
  cleanersLoading = false;

  created(): void {
    this.loadCleaners();
  }

  async loadCleaners(): Promise<void> {
    this.cleanersLoading = true;
    try {
      const response = await cleaners.getList();
      this.cleaners = response.data.data.map((cleaner) => ({
        id: cleaner.id,
        firstName: cleaner.first_name,
        lastName: cleaner.last_name,
        cleaningsCount: cleaner.cleanings_count,
        status: cleaner.status,
      }));
    } catch (e) {
      this.$store.dispatch('showAlertError', 'При загрузке данных произошла ошибка');
    } finally {
      this.cleanersLoading = false;
    }
  }

  horTabsChanged(tag: string): void {
    this.activeTabTag = tag;
  }

  get favoriteCleaners(): CleanerModel[] {
    if (this.cleaners === null) return [];
    return this.cleaners.filter((cleaner) => cleaner.status === 'favorite');
  }

  get blockedCleaners(): CleanerModel[] {
    if (this.cleaners === null) return [];
    return this.cleaners.filter((cleaner) => cleaner.status === 'blocked');
  }

  updateCleaner(newCleaner: CleanerModel): void {
    console.log(newCleaner);
    if (this.cleaners === null) return;
    const index = this.cleaners.findIndex((cleaner) => newCleaner.id === cleaner.id);
    this.cleaners[index] = newCleaner;
  }
}
</script>
