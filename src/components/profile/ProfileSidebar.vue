<template>
  <div class="sidebar sidebar--profile">
    <div class="shadow-block stock-box">
      <div class="stock-box__body">
        <div class="stock-box__title">Скидка на уборку</div>
        <div class="stock-box__subtitle">
          Поделитесь ссылкой на&nbsp;наш сервис и&nbsp;получите скидку 25&nbsp;000&nbsp;тг.
        </div>
        <AInput
            model-value="https://almaclean.kz/43ns7"
            :readonly="true"
            class="stock-box__input"
        />
        <div class="stock-box__share-container">
          <ShareNetwork
              class="stock-box__share-item"
              network="facebook"
              url="https://google.com"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          >
            <img src="/images/icons/facebook.svg"/>
          </ShareNetwork>
          <ShareNetwork
              class="stock-box__share-item"
              network="vk"
              url="https://google.com"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          >
            <img src="/images/icons/vk.svg"/>
          </ShareNetwork>
          <ShareNetwork
              class="stock-box__share-item"
              network="odnoklassniki"
              url="https://google.com"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          >
            <img src="/images/icons/odnoklassniki.svg"/>
          </ShareNetwork>
          <ShareNetwork
              class="stock-box__share-item"
              network="twitter"
              url="https://google.com"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          >
            <img src="/images/icons/twitter.svg"/>
          </ShareNetwork>
        </div>
      </div>
      <div class="stock-box__footer">
        <div class="stock-box__footer-title">
          При заказе 10 уборок одна стандартная уборка
          <br>
          <span class="stock-box__footer-title-bold">бесплатно</span>.
        </div>
        <div class="stock-box__counter">
          <div class="stock-box__counter-value">2/10</div>
          <div class="stock-box__counter-text">Ваш счет уборок</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AInput from '@/components/AInput.vue';

@Options({
  components: {
    AInput,
  },
})
export default class ProfileSidebar extends Vue {
}
</script>
