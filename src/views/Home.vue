<template>
  <!--START SECTION FIRST SCREEN-->
  <section class="s-first-screen">
    <div class="container container--flex">
      <div class="usp">
        <div class="usp__content">
          <h1 class="usp__title">Уборка квартир <br>и домов в Алматы</h1>
          <div class="usp__advantages card-advantages">
            <div class="card-advantage">
              <div class="card-advantage__icon-block">
                <i class="ac-icon ac-icon-cleaning card-advantage__icon"></i>
              </div>
              <div class="card-advantage__title">Десятая уборка бесплатно</div>
              <div class="card-advantage__text">Закажите 9 уборок и получите 10-ю бесплатно</div>
            </div>
            <div class="card-advantage">
              <div class="card-advantage__icon-block">
                <i class="ac-icon ac-icon-medal card-advantage__icon"></i>
              </div>
              <div class="card-advantage__title">Качественная уборка</div>
              <div class="card-advantage__text">Гарантируем чистоту и порядок в каждой комнате</div>
            </div>
            <div class="card-advantage">
              <div class="card-advantage__icon-block">
                <i class="ac-icon ac-icon-hand-with-money card-advantage__icon"></i>
              </div>
              <div class="card-advantage__title">Доступные цены</div>
              <div class="card-advantage__text">
                Минимальная стоимость уборки всего от 6500 тенге
              </div>
            </div>
            <div class="card-advantage">
              <div class="card-advantage__icon-block">
                <i class="ac-icon ac-icon-truck card-advantage__icon"></i>
              </div>
              <div class="card-advantage__title">Быстрый выезд</div>
              <div class="card-advantage__text">
                Прибытие к Вам на объект от 40 минут после отправления заявки
              </div>
            </div>
          </div>
        </div>
        <div class="usp__bg"></div>
      </div>

      <div class="s-first-screen__form">
        <form
          @submit.prevent="submitFeedbackShortForm"
          class="s-first-screen__form-block quick-order-form">
          <div
            class="quick-order-form__title title title--primary title--small title--center">
            Для быстрого оформления заказа заполните форму
          </div>
          <div
            class="quick-order-form__title--mini title title--primary title--small title--center">
            Быстрый заказ
          </div>
          <AInput
            class="quick-order-form__input-block"
            placeholder="Ваше имя"
            @input="feedbackShortForm.nameErrors = null"
            v-model="feedbackShortForm.name"
            :invalid="feedbackShortForm.nameErrors"/>
          <AInput
            class="quick-order-form__input-block"
            margin-top="sm"
            :mask="phoneMask"
            :auto-unmask="false"
            @input="feedbackShortForm.phoneErrors = null"
            v-model="feedbackShortForm.phone"
            :invalid="feedbackShortForm.phoneErrors"
            placeholder="(___) ___ __ __">
            <template #prepend>+7</template>
          </AInput>
          <AButton
            type="submit"
            text="Быстрый заказ"
            font-weight="bold"
            :loading="feedbackShortForm.loading"
            class="quick-order-form__btn"/>
        </form>
        <div class="s-first-screen__form-block s-first-screen__form-block--btn">
          <router-link custom to="/order"
                       v-slot="{ navigate }">
            <AButton
              @click="navigate"
              class="s-first-screen__calculate-btn"
              font-weight="bold"
              text="Рассчитать стоимость самостоятельно"
              :outline="true"
            />
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION FIRST SCREEN-->

  <!--START SECTION ABOUT COMPANY-->
  <section class="section s-about-company">
    <div class="container container--flex flex-ai-center">
      <div class="about-company__title title">Наш сервис</div>
      <div class="about-company__text-block">
        <div class="about-company__text text-gray">
          AlmaClean создает все условия, чтобы профессиональную уборку смог позволить себе каждый!
          Мы тщательно осуществляем подбор сотрудников, которые относятся к своей работе
          ответственно и с любовью. Первоклассные клинеры нашей компании работают во благо
          создания идеальной чистоты в вашем доме, предлагая свои услуги по приемлемой цене.
        </div>
        <a href="#" class="btn btn--circle btn--small btn--text-regular btn--primary-outline
          about-company__btn">Подробнее о компании</a>
      </div>
      <div class="about-company__slider-block">
        <div class="slider-gallery">
          <img src="/images/about-company-slider/slide-01.jpg" alt="клининг">
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION ABOUT COMPANY-->

  <!--START SECTION ADVANTAGES-->
  <section class="section section--p-large s-advantages">
    <div class="container">
      <div class="advantages">
        <div class="advantage">
          <div class="advantage__icon-block">
            <i class="ac-icon ac-icon-document advantage__icon"></i>
          </div>
          <div class="advantage__title">Cтрахование ответственности</div>
          <div class="advantage__text">
            Наши клинеры не крадут и не ломают, но мы всё равно готовы возмещать ущерб
          </div>
        </div>
        <div class="advantage">
          <div class="advantage__icon-block">
            <i class="ac-icon ac-icon-tag advantage__icon"></i>
          </div>
          <div class="advantage__title">Фиксированная цена на уборку</div>
          <div class="advantage__text">
            Стоимость уборки зависит от количества комнат, а не от площади квартиры
          </div>
        </div>
        <div class="advantage">
          <div class="advantage__icon-block">
            <i class="ac-icon ac-icon-eco advantage__icon"></i>
          </div>
          <div class="advantage__title">Экологичная уборка гарантирована</div>
          <div class="advantage__text">
            Мы используем продукты из натурального сырья — они безопасны и гипоаллергенны
          </div>
        </div>
        <div class="advantage">
          <div class="advantage__icon-block">
            <i class="ac-icon ac-icon-wallet advantage__icon"></i>
          </div>
          <div class="advantage__title">Оплата наличными или картой</div>
          <div class="advantage__text">
            Вы выбираете, как вам удобнее платить – банковской картой или наличными
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION ADVANTAGES-->

  <!--START SECTION ABOUT CLEANING-->
  <section class="section section--pb-small s-about-cleaning">
    <div class="container">
      <div class="title title--primary">Где и как мы убираемся</div>
      <div class="about-cleaning__text">
        Клинер приезжает со всем необходимым и сразу же приступает к уборке.
      </div>
      <div class="about-cleaning__tabs tabs">
        <button type="button" class="tab"
                @click="cleaningTypesTabActive = 'rooms'"
                :class="{ 'tab--active': cleaningTypesTabActive === 'rooms' }"
        >Комнаты
        </button>
        <button type="button" class="tab"
                @click="cleaningTypesTabActive = 'kitchen'"
                :class="{ 'tab--active': cleaningTypesTabActive === 'kitchen' }"
        >Кухня
        </button>
        <button type="button" class="tab"
                @click="cleaningTypesTabActive = 'bathroom'"
                :class="{ 'tab--active': cleaningTypesTabActive === 'bathroom' }"
        >Ванная
        </button>
        <button type="button" class="tab"
                @click="cleaningTypesTabActive = 'corridor'"
                :class="{ 'tab--active': cleaningTypesTabActive === 'corridor' }"
        >Коридор
        </button>
      </div>
      <div class="about-cleaning__tabs-content tabs-content">
        <div class="tab-content" v-if="cleaningTypesTabActive === 'rooms'">
          <div class="cleaning-interactive cleaning-interactive--rooms">
            <div class="cleaning-interactive__point cleaning-interactive__point--01">
              <div class="cleaning-interactive__point-text">
                Уберём пыль со всех <br>доступных повернхностей
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--02">
              <div class="cleaning-interactive__point-text">
                Помоем пол
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--03">
              <div class="cleaning-interactive__point-text">
                Очистим зеркала <br>и стеклянные поверхности
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--04">
              <div class="cleaning-interactive__point-text">
                Протрём дверные ручки, <br>радиаторы, выключатели
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--05">
              <div class="cleaning-interactive__point-text">
                Вынесем мусор
              </div>
            </div>
            <img src="/images/cleaning-interactive/rooms-bg.jpg"
                 alt="Комнаты" class="cleaning-interactive__img">
          </div>
        </div>
        <div class="tab-content" v-if="cleaningTypesTabActive === 'kitchen'">
          <div class="cleaning-interactive cleaning-interactive--kitchen">
            <div class="cleaning-interactive__point cleaning-interactive__point--01">
              <div class="cleaning-interactive__point-text">
                Протрём технику <br>снаружи
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--02">
              <div class="cleaning-interactive__point-text">
                Вынесем мусор
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--03">
              <div class="cleaning-interactive__point-text">
                Удалим пыль <br>с вентиляционных <br>решеток и <br>кондиционеров
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--04">
              <div class="cleaning-interactive__point-text">
                Помоему плиту
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--05">
              <div class="cleaning-interactive__point-text">
                Моем раковину
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--06">
              <div class="cleaning-interactive__point-text">
                Помоем плинтуса и пол
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--07">
              <div class="cleaning-interactive__point-text">
                Моем верхние <br>и нижние фасады кухни
              </div>
            </div>
            <img src="/images/cleaning-interactive/kitchen-bg.jpg"
                 alt="Кухня" class="cleaning-interactive__img">
          </div>
        </div>
        <div class="tab-content" v-if="cleaningTypesTabActive === 'bathroom'">
          <div class="cleaning-interactive cleaning-interactive--bathroom">
            <div class="cleaning-interactive__point cleaning-interactive__point--01">
              <div class="cleaning-interactive__point-text">
                Чистим зеркала и стеклянне <br>поверхности
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--02">
              <div class="cleaning-interactive__point-text">
                Протираем шкафы <br>с внешней стороны
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--03">
              <div class="cleaning-interactive__point-text cleaning-interactive__point-text--white">
                Моем и <br>дезинфицируем <br>унитаз
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--04">
              <div class="cleaning-interactive__point-text
                cleaning-interactive__point-text--x-center
                cleaning-interactive__point-text--y-bottom">
                Моем пол, протираем плинтусы и <br>пылесосим коврики
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--05">
              <div class="cleaning-interactive__point-text
                cleaning-interactive__point-text--x-center
                cleaning-interactive__point-text--y-top">
                Моем душевую и ванную
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--06">
              <div class="cleaning-interactive__point-text
                cleaning-interactive__point-text--x-center
                cleaning-interactive__point-text--y-bottom">
                Протираем все доступные <br>поверхности, выключатели <br>и дверные ручки
              </div>
            </div>
            <img src="/images/cleaning-interactive/bathroom-bg.jpg"
                 alt="Ванная" class="cleaning-interactive__img">
          </div>
        </div>
        <div class="tab-content" v-if="cleaningTypesTabActive === 'corridor'">
          <div class="cleaning-interactive cleaning-interactive--corridor">
            <div class="cleaning-interactive__point cleaning-interactive__point--01">
              <div class="cleaning-interactive__point-text">
                Помоем пол
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--02">
              <div class="cleaning-interactive__point-text">
                Очистим зеркала <br>и стеклянные поверхности
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--03">
              <div class="cleaning-interactive__point-text">
                Протрём дверные ручки, <br>радиаторы, выключатели
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--04">
              <div class="cleaning-interactive__point-text">
                Уберём пыль со всех <br>доступных повернхностей
              </div>
            </div>
            <div class="cleaning-interactive__point cleaning-interactive__point--05">
              <div class="cleaning-interactive__point-text">
                Вынесем мусор
              </div>
            </div>
            <img src="/images/cleaning-interactive/corridor-bg.jpg"
                 alt="Коридор" class="cleaning-interactive__img">
          </div>
        </div>
      </div>
      <div class="about-cleaning__all-btn-block">
        <button type="button" class="btn btn--primary about-cleaning__all-btn">Весь список</button>
      </div>
    </div>
  </section>
  <!--END SECTION ABOUT CLEANING-->

  <!--START SECTION OUR SPECIALIST-->
  <section class="section section--pb-medium s-our-specialist">
    <div class="container">
      <div class="our-specialist__about">
        <div class="our-specialist__icon-block">
          <i class="ac-icon ac-icon-circle-man our-specialist__icon"></i>
        </div>
        <div class="our-specialist__content">
          <div class="title our-specialist__title">Наши специалисты</div>
          <div class="our-specialist__text">
            Компания проводит жесткий отбор сотрудников в несколько этапов. Каждый претендент на
            должность проходит собеседование, тестирование и проверку службой безопасности.
            Только после этого есть возможность стать частью нашей команды
          </div>
        </div>
      </div>
      <div class="our-specialist__items">

        <div class="our-specialist__item profile-card"
             v-for="item in [1, 2, 3,]" :key="item">
          <div class="profile-card__photo-block">
            <div class="profile-card__photo"
                 style="background-image: url(/images/cleaners/cleaner-01.jpg)"></div>
          </div>
          <div class="profile-card__name">Татьяна</div>
          <div class="profile-card__rating rating">

            <div class="rating__star-block">
              <i class="ac-icon ac-icon-star rating__star"></i>
              <div class="rating__star-fill" style="width: 100%;">
                <i class="ac-icon ac-icon-star rating__star rating__star--active"></i>
              </div>
            </div>
            <div class="rating__star-block">
              <i class="ac-icon ac-icon-star rating__star"></i>
              <div class="rating__star-fill" style="width: 100%;">
                <i class="ac-icon ac-icon-star rating__star rating__star--active"></i>
              </div>
            </div>
            <div class="rating__star-block">
              <i class="ac-icon ac-icon-star rating__star"></i>
              <div class="rating__star-fill" style="width: 100%;">
                <i class="ac-icon ac-icon-star rating__star rating__star--active"></i>
              </div>
            </div>
            <div class="rating__star-block">
              <i class="ac-icon ac-icon-star rating__star"></i>
              <div class="rating__star-fill" style="width: 100%;">
                <i class="ac-icon ac-icon-star rating__star rating__star--active"></i>
              </div>
            </div>
            <div class="rating__star-block">
              <i class="ac-icon ac-icon-star rating__star"></i>
              <div class="rating__star-fill" style="width: 50%;">
                <i class="ac-icon ac-icon-star rating__star rating__star--active"></i>
              </div>
            </div>

          </div>

          <div class="profile-card__rating-info">
            <div class="profile-card__rating-value">Рейтинг: 5.0</div>
            <div class="profile-card__rating-value">Оценок: 354</div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!--END SECTION OUR SPECIALIST-->

  <CountersSection/>

  <ReviewsSection/>

  <!--START SECTION SPECIAL OFFER-->
  <section class="section s-special-offer">
    <div class="container special-offer">
      <div class="special-offer__block special-offer__block--left">
        <div class="special-offer__title title">Специальные</div>
        <div class="special-offer__subtitle">услуги и предложения</div>

        <div class="special-offer__tabs vertical-tabs">
          <div class="vertical-tab"
               :class="{ 'vertical-tab--active': specialOfferTabActive === 'furniture' }"
               @click="specialOfferTabActive = 'furniture'">
            Химчистка мягкой мебели <br>и ковровых покрытий
            <i class="ac-icon ac-icon-arrow-down vertical-tab__arrow"></i>
          </div>
          <div class="vertical-tab"
               :class="{ 'vertical-tab--active': specialOfferTabActive === 'cabinet' }"
               @click="specialOfferTabActive = 'cabinet'">
            Личный кабинет для <br>клиентов
            <i class="ac-icon ac-icon-arrow-down vertical-tab__arrow"></i>
          </div>
          <div class="vertical-tab"
               :class="{ 'vertical-tab--active': specialOfferTabActive === 'repair' }"
               @click="specialOfferTabActive = 'repair'">
            Уборка после ремонта
            <i class="ac-icon ac-icon-arrow-down vertical-tab__arrow"></i>
          </div>
          <div class="vertical-tab"
               :class="{ 'vertical-tab--active': specialOfferTabActive === 'mobile_app' }"
               @click="specialOfferTabActive = 'mobile_app'">
            Удобное мобильное <br>приложение
            <i class="ac-icon ac-icon-arrow-down vertical-tab__arrow"></i>
          </div>
        </div>
      </div>

      <div class="special-offer__block special-offer__block--right">
        <div class="special-offer__text">
          <template v-if="specialOfferTabActive === 'furniture'">
            <p>В процессе эксплуатации мебель: диваны, кресла, стулья - изнашиваются, подвергаются
              различным загрязнениям. В результате мебель приобретает непривлекательный внешний вид,
              а это может испортить интерьер вашего помещения. Химчистка загрязнённой мебели
              является довольно серьёзной проблемой. Засаленные подлокотники, закапанные подушки
              сидений очистить самостоятельно очень трудно.</p>
            <p>Наша компания AlmaClean готова выполнить работы по химчистке мягкой мебели как
              в виде отдельной услуги, так и в составе мероприятий по комплексной уборке
              ваших помещений.</p>
          </template>
          <template v-if="specialOfferTabActive === 'cabinet'">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum delectus
              doloremque eos, eveniet excepturi iure maxime neque nesciunt obcaecati, officiis
              quaerat quasi sed sint, sit sunt veniam. Doloribus, temporibus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate
              necessitatibus nemo quibusdam ratione. Accusamus consequatur error facere iure magni
              nihil optio repudiandae, veritatis? Animi beatae est facere illo numquam!</p>
          </template>
          <template v-if="specialOfferTabActive === 'repair'">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum delectus
              doloremque eos, eveniet excepturi iure maxime neque nesciunt obcaecati, officiis
              quaerat quasi sed sint, sit sunt veniam. Doloribus, temporibus!</p>
          </template>
          <template v-if="specialOfferTabActive === 'mobile_app'">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate
              necessitatibus nemo quibusdam ratione.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum delectus
              doloremque eos, eveniet excepturi iure maxime neque nesciunt obcaecati, officiis
              quaerat quasi sed sint, sit sunt veniam. Doloribus, temporibus!</p>
          </template>
          <div class="special-offer__text-btn-block">
            <button type="button"
                    class="btn btn--white special-offer__text-btn">Заказать услугу
            </button>
          </div>
        </div>
      </div>
    </div>
    <img src="/images/backgrounds/special-offer-bg.png" alt="гостинная" class="s-special-offer__bg">
  </section>
  <!--END SECTION SPECIAL OFFER-->

  <!--START SECTION EQUIPMENT-->
  <section class="section section--p-medium s-equipment">
    <div class="container">
      <div class="title">Наше оборудование</div>
      <div class="equipments">
        <div
          v-for="equipment in equipments" :key="equipment"
          class="equipment">
          <div class="equipment__photo-block">
            <img :src="equipment.photo" :alt="equipment.name" class="equipment__photo">
          </div>
          <div class="equipment__name">{{ equipment.name }}</div>
          <div class="equipment__type">{{ equipment.type }}</div>
          <button type="button" class="btn btn--primary equipment__btn-about"
                  @click="showedEquipmentModal = equipment">Описание
          </button>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION EQUIPMENT-->
  <FaqSection class="section--pb-medium"
              @contactUsClick="feedbackModalIsActive = true"/>
  <WorkExamplesGallerySection/>
  <ContactUsSection/>
  <Modal
    :is-active="showedEquipmentModal != null"
    @close="showedEquipmentModal = null;"
    size="vd"
  >
    <div class="vacuum-descr">
      <div class="vacuum-descr__img-wrapper">
        <img :src="showedEquipmentModal?.photo"/>
      </div>
      <div class="vacuum-descr__content">
        <div class="vacuum-descr__title" v-html="showedEquipmentModal?.name"/>
        <div class="vacuum-descr__text" v-html="showedEquipmentModal?.description"/>
        <div class="vacuum-descr__mini-title" v-html="showedEquipmentModal?.miniTitle"/>
        <div class="vacuum-descr__descr" v-html="showedEquipmentModal?.list"/>
      </div>
    </div>
  </Modal>
  <Modal
    size="sm"
    :is-active="feedbackModalIsActive"
    title="Написать нам"
    class="feedback-modal"
    @close="feedbackModalIsActive = false"
  >
    <form v-if="!feedbackModalShowResult"
          @submit.prevent="submitFeedbackFullForm">
      <AInput
        v-model="feedbackFullForm.name"
        :errors-texts="feedbackFullForm.nameErrors"
        :invalid="feedbackFullForm.nameErrors"
        @input="feedbackFullForm.nameErrors = null"
        placeholder="Ваше имя"/>
      <AInput
        margin-top="md"
        v-model="feedbackFullForm.phone"
        :errors-texts="feedbackFullForm.phoneErrors"
        :invalid="feedbackFullForm.phoneErrors"
        @input="feedbackFullForm.phoneErrors = null"
        :mask="phoneMask"
        :auto-unmask="false"
        placeholder="(___) ___ __ __">
        <template #prepend>+7</template>
      </AInput>
      <AInput
        margin-top="md"
        v-model="feedbackFullForm.email"
        placeholder="E-Mail"/>
      <AInput
        :is-textarea="true"
        margin-top="md"
        v-model="feedbackFullForm.comment"
        placeholder="Сообщение"/>
      <AButton
        type="submit"
        class="feedback-modal__submit-btn"
        :full-width="true"
        :loading="feedbackFullForm.loading"
        font-weight="bold"
        text="Быстрый заказ"/>
    </form>
    <FeedbackSuccessBox
      v-else
      @btnClick="feedbackModalIsActive = false"/>
  </Modal>
  <Modal
    size="sm"
    :is-active="feedbackSuccessModalIsActive"
    title="Написать нам"
    @close="feedbackSuccessModalIsActive = false"
  >
    <FeedbackSuccessBox
      @btnClick="feedbackSuccessModalIsActive = false"/>
  </Modal>
  <GoTopButton/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import { Pagination, Navigation } from 'swiper';
import Modal from '@/components/Modal.vue';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/navigation/navigation.scss';
import { SwiperModule } from 'swiper/types/shared';
import FaqSection from '@/components/sections/FaqSection.vue';
import ContactUsSection from '@/components/sections/ContactUsSection.vue';
import CountersSection from '@/components/sections/CountersSection.vue';
import WorkExamplesGallerySection from '@/components/sections/WorkExamplesGallerySection.vue';
import AInput from '@/components/AInput.vue';
import AButton from '@/components/AButton.vue';
import { phoneMask } from '@/app.config';
import feedback from '@/repositories/api/feedback';
import FeedbackSuccessBox from '@/components/FeedbackSuccessBox.vue';
import GoTopButton from '@/components/GoTopButton.vue';
import ReviewsSection from '../components/sections/ReviewsSection.vue';

interface EquipmentProps {
  name: string,
  type: string,
  photo: string,
  description: string,
  miniTitle: string,
  list: string,
}

interface FeedbackForm {
  name: string,
  phone: string,
  nameErrors: null | string[],
  phoneErrors: null | string[],
  email: null,
  comment: null,
  loading: boolean,
}

type SpecialOfferTabType = 'furniture' | 'repair' | 'cabinet' | 'mobile_app';
type CleaningTypesTabType = 'rooms' | 'kitchen' | 'bathroom' | 'corridor';

@Options({
  components: {
    GoTopButton,
    FeedbackSuccessBox,
    AButton,
    Swiper,
    SwiperSlide,
    Modal,
    FaqSection,
    ContactUsSection,
    CountersSection,
    WorkExamplesGallerySection,
    AInput,
    ReviewsSection,
  },
})
export default class Home extends Vue {
  readonly phoneMask = phoneMask;
  showedEquipmentModal: EquipmentProps | null = null;
  specialOfferTabActive: SpecialOfferTabType = 'furniture';
  cleaningTypesTabActive: CleaningTypesTabType = 'rooms';
  swiperModules: SwiperModule[] = [Pagination, Navigation];
  feedbackModalIsActive = false;
  feedbackSuccessModalIsActive = false;
  feedbackModalShowResult = false;

  equipments: EquipmentProps[] = [
    {
      name: 'Puzzi 10/1',
      type: 'Моющий пылесос',
      photo: '/images/equipments/puzzi-10-1.png',
      description: '<p> Это профессиональный моющий пылесос для химчистки поверхностей. Благодаря моментальному всасыванию распылённого моющего средства поверхность остаётся на 65% суше, чем при уборке техникой конкурирующих марок. И её можно сразу же использовать. При обработке ковров могут использоваться специальные средства для защиты покрытия и средство для борьбы с клещами.</p>',
      miniTitle: '',
      list: '',
    },
    {
      name: 'IPC Soteco Fox',
      type: 'Пылесос',
      photo: '/images/equipments/ipc-soteco-fox.png',
      description: '<p>- FOX - Это новая модель пылесоса для сухой уборки в труднодоступных местах, где применение обычного пылесоса не всегда удобно. Удобный и легкий ранцевый пылесос.</p>',
      miniTitle: 'Преимущества',
      list: '<ul><li>FOX работает без мешков для сбора пыли</li><li>Нет необходимости отвлекаться на очистку фильтра в случае снижения мощности всасывания.</li><li>Специальная система очистки позволяет прочистить фильтр-картридж путем нажатия на специальную кнопку, при этом вся пыль останется в баке пылесоса. 2-3 секунды и пылесос снова готов к работе.</li><li>Небольшой вес – 3 кг, и плечевой ремень делает пылесос FOX незаменимым помощником везде, где необходимо произвести уборку в стесненных или в специализированных условиях.</li></ul>',
    },
    {
      name: 'Kirby Sentria',
      type: 'Пылесос',
      photo: '/images/equipments/kirby-sentria.png',
      description: '<p>- Это сплав современных технологий, высококачественных материалов, опыта специалистов, соответствующего качества уборки, но в первую очередь большой заботы о людях.</p>',
      miniTitle: 'Преимущества',
      list: '<ul><li>Мощный воздушный поток в сочетании с системой фильтрации HEPA</li><li>Механический привод TechDrive©</li><li>Светодиодный фонарь</li><li>Большой ассортимент практичных насадок</li></ul>',
    },
    {
      name: 'SC 2 Premium',
      type: 'Пароочиститель',
      photo: '/images/equipments/sc-2-premium.png',
      description: '<p>- Очень эргономичен и прост в использовании. Насадка для пола Comfort с гибким соединением обеспечивает удобство и великолепные результаты очистки твердых покрытий. В модели предусмотрены два режима интенсивности подачи пара. Прибор поставляется с удлинительным комплектом, который значительно упрощает уборку в труднодоступных местах. Горячий пар позволяет уничтожить 99,99% бактерий на твердых поверхностях без применения бытовой химии.</p>',
      miniTitle: 'Преимущества',
      list: '<ul><li>Очистка твердых напольных покрытий</li><li>Очистка швов и смесителей</li><li>Уборка на кухне\n</li><li>Удобная утюжка</li></ul>',
    },
  ];
  feedbackShortForm: FeedbackForm = {
    name: '',
    phone: '',
    nameErrors: null,
    phoneErrors: null,
    email: null,
    comment: null,
    loading: false,
  };
  feedbackFullForm: FeedbackForm = {
    name: '',
    phone: '',
    nameErrors: null,
    phoneErrors: null,
    email: null,
    comment: null,
    loading: false,
  };

  validateFeedbackForm(form: FeedbackForm): boolean {
    let valid = true;

    if (form.name.trim().length < 1) {
      form.nameErrors = ['Укажите имя'];
      valid = false;
    }
    if (!this.$helpers.validPhone(form.phone)) {
      form.phoneErrors = ['Укажите номер телефона'];
      valid = false;
    }

    return valid;
  }

  async submitFeedbackForm(form: FeedbackForm): Promise<boolean> {
    if (!this.validateFeedbackForm(form)) return false;
    try {
      form.loading = true;
      const response = await feedback.send({
        name: form.name,
        phone: form.phone,
        email: form.email,
        comment: form.comment,
      });
      if (response.data?.successful) {
        form.name = '';
        form.phone = '';
        form.email = null;
        form.comment = null;
        return true;
      }
      this.$store.dispatch('showAlertError', 'При отправке произошла ошибка');
    } catch (e) {
      this.$store.dispatch('showAlertError', 'При отправке произошла ошибка');
    } finally {
      form.loading = false;
    }
    return false;
  }

  async submitFeedbackFullForm(): Promise<void> {
    if (await this.submitFeedbackForm(this.feedbackFullForm)) {
      this.feedbackModalShowResult = true;
    }
  }

  async submitFeedbackShortForm(): Promise<void> {
    if (await this.submitFeedbackForm(this.feedbackShortForm)) {
      this.feedbackSuccessModalIsActive = true;
    }
  }
}
</script>
