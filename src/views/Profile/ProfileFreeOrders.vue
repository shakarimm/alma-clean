<template>
  <!--START SECTION ORDERS-->
  <section class="section s-profile-orders">
    <div class="container container--flex">
      <div class="content-block content-block--profile">
        <div class="separated-block">
          <div class="separated-block__title">У вас пока нет бесплатных уборок</div>
          <div class="separated-block__text separated-block__text--full">
            Но Вы можете получить бесплатную уборку. Для этого Вам необходимо
            пользоваться нашими услугами — при заказе 10 уборок, одна
            <b>стандартная уборка бесплатно</b>
          </div>
        </div>
      </div>
      <ProfileSidebar/>
    </div>
  </section>
  <!--END SECTION ORDERS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProfileSidebar from '@/components/profile/ProfileSidebar.vue';

@Options({
  components: {
    ProfileSidebar,
  },
})
export default class ProfileFreeOrders extends Vue {}
</script>
