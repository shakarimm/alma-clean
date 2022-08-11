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
                Минимальная стоимость уборки всего от 6500 тенге</div>
            </div>
            <div class="card-advantage">
              <div class="card-advantage__icon-block">
                <i class="ac-icon ac-icon-truck card-advantage__icon"></i>
              </div>
              <div class="card-advantage__title">Быстрый выезд</div>
              <div class="card-advantage__text">
                Прибытие к Вам на объект от 40 минут после отправления заявки</div>
            </div>
          </div>
        </div>
        <div class="usp__bg"></div>
      </div>

      <div class="s-first-screen__form">
        <form
            @submit.prevent="submitFeedbackShortForm"
            class="s-first-screen__form-block quick-order-form">
          <div class="quick-order-form__title title title--primary title--small title--center">
            Для быстрого оформления заказа заполните форму</div>
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
  nameErrors: null|string[],
  phoneErrors: null|string[],
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
  showedEquipmentModal: EquipmentProps|null = null;
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
