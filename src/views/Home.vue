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
          <div class="title our-specialist__title">Наши специалисты {{ profile?.firstName }}</div>
          <div class="our-specialist__text">
            Компания проводит жесткий отбор сотрудников в несколько этапов. Каждый претендент на
            должность проходит собеседование, тестирование и проверку службой безопасности.
            Только после этого есть возможность стать частью нашей команды
          </div>
        </div>
      </div>
      <div class="our-specialist__items">
        <swiper
          loop
          :spaceBetween="30"
          autoHeight
          :navigation="{
              prevEl: '#our-specialist-slider-prev-button',
              nextEl: '#our-specialist-slider-next-button',
            }"
          :modules="swiperModules"
          :breakpoints="{
            1339: {
              slidesPerView: 3,
              loop: false,
            },
            1029: {
              slidesPerView: 2,
              loop: true,
            },
            699: {
              slidesPerView: 1,
              loop: true,
            },
            1: {
              slidesPerView: 1,
              loop: true,
            },
          }"
        >
          <swiper-slide
            v-for="item in ['1', '2', '3']" :key="item">
            <div class="our-specialist__item profile-card">
              <div class="profile-card__photo-block">
                <div class="profile-card__photo"
                     style="background-image: url(/images/cleaners/cleaner-01.jpg)"></div>
              </div>
              <div class="profile-card__name">Татьяна {{ item }}</div>
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
          </swiper-slide>
          <div class="our-specialist__slider-control navigation">
            <div
              id="our-specialist-slider-prev-button"
              class="our-specialist__navigation-arrow-prev
              navigation__arrow navigation__arrow--prev">
              <i class="ac-icon ac-icon-arrow-down"></i>
            </div>
            <div
              id="our-specialist-slider-next-button"
              class="our-specialist__navigation-arrow-next
              navigation__arrow navigation__arrow--next">
              <i class="ac-icon ac-icon-arrow-down"></i>
            </div>
          </div>
        </swiper>
      </div>
    </div>
  </section>
  <!--END SECTION OUR SPECIALIST-->

  <CountersSection/>

  <ReviewsSection/>

  <SpecialOfferSection/>

  <!--START SECTION EQUIPMENT-->
  <section class="section section--p-medium s-equipment">
    <div class="container">
      <div class="title">Наше оборудование</div>
      <div class="equipments">
        <swiper
          slidesPerView="4"
          :spaceBetween="40"
          autoHeight
          :navigation="{
              prevEl: '#equipment-slider-prev-button',
              nextEl: '#equipment-slider-next-button',
            }"
          :breakpoints="{
            1339: {
              slidesPerView: 4
            },
            699: {
              slidesPerView: 2
            },
            1: {
              slidesPerView: 1
            },
          }"
          :modules="swiperModules"
        >
          <swiper-slide
            v-for="equipment in equipments" :key="equipment">
            <div
              class="equipment">
              <div class="equipment__photo-block">
                <img :src="equipment.photo" :alt="equipment.name" class="equipment__photo">
              </div>
              <div class="equipment__name">{{ equipment.name }}</div>
              <div class="equipment__type">{{ equipment.type }}</div>
              <button type="button" class="btn btn--primary equipment__btn-about"
                      @click="showEquipmentModal(equipment)">Описание
              </button>
            </div>
          </swiper-slide>
        </swiper>
        <div class="equipment__slider-control navigation">
          <div
            id="equipment-slider-prev-button"
            class="equipment__navigation-arrow-prev navigation__arrow navigation__arrow--prev">
            <i class="ac-icon ac-icon-arrow-down"></i>
          </div>
          <div
            id="equipment-slider-next-button"
            class="equipment__navigation-arrow-next navigation__arrow navigation__arrow--next">
            <i class="ac-icon ac-icon-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION EQUIPMENT-->
  <FaqSection class="section--pb-medium"/>

  <WorkExamplesGallerySection/>

  <ContactUsSection/>

  <Modal
    name="equipment"
    class="equipment-modal"
  >
    <div class="vacuum-descr">
      <div class="vacuum-descr__img-wrapper">
        <img :src="showedEquipmentModal?.photo"/>
      </div>
      <div class="vacuum-descr__content">
        <div class="vacuum-descr__title" v-html="showedEquipmentModal?.name"/>
        <div class="vacuum-descr__text">
          <p>{{ showedEquipmentModal?.description }}</p>
        </div>
        <div class="vacuum-descr__mini-title" v-html="showedEquipmentModal?.subtitle"/>
        <div class="vacuum-descr__descr">
          <ul>
            <li v-for="item in showedEquipmentModal?.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Modal>

<!--  <GoTopButton/>-->
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
import GoTopButton from '@/components/GoTopButton.vue';
import { mapGetters } from 'vuex';
import { CityInformation, ProfileData } from '@/types';
import { PropType } from 'vue';
import SpecialOfferSection from '@/components/sections/SpecialOfferSection.vue';
import ReviewsSection from '../components/sections/ReviewsSection.vue';

interface EquipmentProps {
  name: string,
  type: string,
  photo: string,
  description: string,
  subtitle: string,
  items: string[];
}

type CleaningTypesTabType = 'rooms' | 'kitchen' | 'bathroom' | 'corridor';

@Options({
  components: {
    SpecialOfferSection,
    GoTopButton,
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
  computed: mapGetters({
    profile: 'myProfile',
  }),
})
export default class Home extends Vue {
  readonly profile!: ProfileData;
  readonly phoneMask = phoneMask;
  showedEquipmentModal: EquipmentProps | null = null;
  cleaningTypesTabActive: CleaningTypesTabType = 'rooms';
  swiperModules: SwiperModule[] = [Pagination, Navigation];
  // async submitFeedbackShortForm(): Promise<void> {
  //   if (await this.submitFeedbackForm(this.feedbackShortForm)) {
  //     this.feedbackSuccessModalIsActive = true;
  //   }
  // }

  equipments: EquipmentProps[] = [
    {
      name: 'Puzzi 10/1',
      type: 'Моющий пылесос',
      photo: '/images/equipments/puzzi-10-1.png',
      description: 'Это профессиональный моющий пылесос для химчистки поверхностей. Благодаря моментальному всасыванию распылённого моющего средства поверхность остаётся на 65% суше, чем при уборке техникой конкурирующих марок. И её можно сразу же использовать. При обработке ковров могут использоваться специальные средства для защиты покрытия и средство для борьбы с клещами.',
      subtitle: '',
      items: [],
    },
    {
      name: 'IPC Soteco Fox',
      type: 'Пылесос',
      photo: '/images/equipments/ipc-soteco-fox.png',
      description: '- FOX - Это новая модель пылесоса для сухой уборки в труднодоступных местах, где применение обычного пылесоса не всегда удобно. Удобный и легкий ранцевый пылесос.',
      subtitle: 'Преимущества',
      items: ['FOX работает без мешков для сбора пыли', 'Нет необходимости отвлекаться на очистку фильтра в случае снижения мощности всасывания.', 'Специальная система очистки позволяет прочистить фильтр-картридж путем нажатия на специальную кнопку, при этом вся пыль останется в баке пылесоса. 2-3 секунды и пылесос снова готов к работе.', 'Небольшой вес – 3 кг, и плечевой ремень делает пылесос FOX незаменимым помощником везде, где необходимо произвести уборку в стесненных или в специализированных условиях.'],
    },
    {
      name: 'Kirby Sentria',
      type: 'Пылесос',
      photo: '/images/equipments/kirby-sentria.png',
      description: '- Это сплав современных технологий, высококачественных материалов, опыта специалистов, соответствующего качества уборки, но в первую очередь большой заботы о людях.',
      subtitle: 'Преимущества',
      items: ['Мощный воздушный поток в сочетании с системой фильтрации HEPA', 'Механический привод TechDrive©', 'Светодиодный фонарь', 'Большой ассортимент практичных насадок'],
    },
    {
      name: 'SC 2 Premium',
      type: 'Пароочиститель',
      photo: '/images/equipments/sc-2-premium.png',
      description: '- Очень эргономичен и прост в использовании. Насадка для пола Comfort с гибким соединением обеспечивает удобство и великолепные результаты очистки твердых покрытий. В модели предусмотрены два режима интенсивности подачи пара. Прибор поставляется с удлинительным комплектом, который значительно упрощает уборку в труднодоступных местах. Горячий пар позволяет уничтожить 99,99% бактерий на твердых поверхностях без применения бытовой химии.',
      subtitle: 'Преимущества',
      items: ['Очистка твердых напольных покрытий', 'Очистка швов и смесителей', 'Уборка на кухне', 'Удобная утюжка'],
    },
  ];

  showEquipmentModal(equipment: EquipmentProps) {
    this.showedEquipmentModal = equipment;
    this.$store.dispatch('openModal', 'equipment');
  }
}
</script>
