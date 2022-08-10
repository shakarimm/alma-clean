<template>
  <!--START FOOTER-->
  <footer class="footer">
    <div class="container">

      <div class="footer__row footer__row--links">
        <div class="footer__col footer__col--services-links footer__col--6">
          <div class="footer__title">Услуги</div>
          <div class="footer__line"></div>
          <ul class="footer__list">
            <li>
              <router-link to="/cleaning-types/standard"
                           v-slot="{ navigate }"
                           @click="$helpers.scrollToTop">
                <a href="#"
                   @click="navigate"
                   class="link link--white">Стандартная уборка</a>
              </router-link>
            </li>
            <li>
              <router-link to="/cleaning-types/general"
                           v-slot="{ navigate }"
                           @click="$helpers.scrollToTop">
                <a href="#"
                   @click="navigate"
                   class="link link--white">Генеральная уборка</a>
              </router-link>
            </li>
            <li>
              <router-link to="/cleaning-types/repair"
                           v-slot="{ navigate }"
                           @click="$helpers.scrollToTop">
                <a href="#"
                   @click="navigate"
                   class="link link--white">Уборка после ремонта</a>
              </router-link>
            </li>
          </ul>
          <ul class="footer__list">
            <li><a href="#" class="link link--white">Загородный дом</a></li>
            <li><a href="#" class="link link--white">Квартира</a></li>
            <li><a href="#" class="link link--white">Химчистка</a></li>
          </ul>
        </div>
        <div class="footer__col footer__col--3">
          <div class="footer__title">О сервисе</div>
          <div class="footer__line"></div>
          <ul class="footer__list">
            <li><a href="#" class="link link--white">Контакты</a></li>
            <li><a href="#" class="link link--white">Вопросы</a></li>
            <li><a href="#" class="link link--white">Отзывы</a></li>
          </ul>
        </div>
        <div class="footer__col footer__col--3">
          <div class="footer__title">Работа</div>
          <div class="footer__line"></div>
          <ul class="footer__list">
            <li><a href="#" class="link link--white">Хочу стать клинером</a></li>
            <li><a href="#" class="link link--white">Вакансии</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__row footer__row--info">
        <div class="footer__col footer__col--info-items footer__col--9">
          <div class="footer__info-item">Мы работаем в: Алматы, Шымкент</div>
          <div class="footer__info-item">Типы квартир: Однокомнатные, двухкомнатные,
            <br>трёхкомнатная, четырёхкомнатная</div>
        </div>
        <div class="footer__col footer__col--3">
          <ul class="footer__list">
            <li><a href="#" class="link">Пользовательское соглашение</a></li>
            <li><a href="#" class="link">Карта сайта</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__line"></div>

      <div class="footer__row footer__row--contact">
        <div class="footer__col footer__col--3">
          <ul class="footer__list">
            <li>© {{ new Date().getFullYear() }}. Almaclean.kz</li>
            <li><a href="#" class="link link--white link--bordered">feedback@almaclean.kz</a></li>
          </ul>
        </div>
        <div class="footer__col footer__col--3">
          <ul class="footer__list">
            <li><a href="#" class="link link--white">+7 (777) 831-08-08</a></li>
            <li><a href="#" class="link link--white">+7 (727) 327-32-05</a></li>
          </ul>
        </div>
        <div class="footer__col footer__col--3">
          г. Алматы, Казахстан <br>ул. Джандосова 34а
        </div>
        <div class="footer__col footer__col--3 footer__col--developer">
          <a href="//arkenstone.agency/" target="_blank">
            <img src="/images/arkenstone-logo.svg" class="footer__arkenstone-logo" alt="Arkenstone">
          </a>
        </div>
      </div>

      <div class="footer__row footer__row--socials">
        <div class="footer__col footer__col--12">
          <div class="footer__title">Ответим на ваши вопросы</div>
        </div>
        <div class="footer__col footer__col--4">
          <a href="#" class="footer__social-link
            social-link social-link--facebook">
            <span class="social-link__icon-block">
              <i class="ac-icon ac-icon-social-facebook social-link__icon"></i>
            </span>
            <span class="social-link__text">Фейсбук</span>
          </a>
        </div>
        <div class="footer__col footer__col--4">
          <a href="#" class="footer__social-link social-link social-link--vkontakte">
            <span class="social-link__icon-block">
              <i class="ac-icon ac-icon-social-vkontakte social-link__icon"></i>
            </span>
            <span class="social-link__text">ВКонтакте</span>
          </a>
        </div>
        <div class="footer__col footer__col--4">
          <a href="#" class="footer__social-link social-link social-link--odnoklassniki">
            <span class="social-link__icon-block">
              <i class="ac-icon ac-icon-social-odnoklassniki social-link__icon"></i>
            </span>
            <span class="social-link__text">Одноклассники</span>
          </a>
        </div>
      </div>

    </div>
  </footer>
  <!--END FOOTER-->

  <!--GO TOP BTN-->
  <div class="gotop-btn">
    <i class="ac-icon ac-icon-arrow-down gotop-btn__icon"></i>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Footer extends Vue {
}
</script>
