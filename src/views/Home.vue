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
        <div class="s-first-screen__form-block quick-order-form">
          <div class="quick-order-form__title title title--primary title--small title--center">
            Для быстрого оформления заказа заполните форму</div>
          <div class="quick-order-form__input-block input-block">
            <input type="text" class="input-control" placeholder="Ваше имя">
          </div>
          <div class="quick-order-form__input-block input-block input-block--phone">
            <div class="input-block__prepend">+7</div>
            <input type="text" class="input-control" placeholder="(777) ХХХ-ХХ-ХХ">
          </div>
          <button type="button" class="btn btn--primary quick-order-form__btn">
            Быстрый заказ</button>
        </div>
        <div class="s-first-screen__form-block s-first-screen__form-block--btn">
          <button type="button" class="btn btn--primary-outline s-first-screen__calculate-btn">
            Рассчитать стоимость самостоятельно</button>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION FIRST SCREEN-->

  <!--START SECTION ABOUT COMPANY-->
  <section class="section s-about-company">
    <div class="container container--flex flex-ai-center">
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
            Наши клинеры не крадут и не ломают, но мы всё равно готовы возмещать ущерб</div>
        </div>
        <div class="advantage">
          <div class="advantage__icon-block">
            <i class="ac-icon ac-icon-tag advantage__icon"></i>
          </div>
          <div class="advantage__title">Фиксированная цена на уборку</div>
          <div class="advantage__text">
            Стоимость уборки зависит от количества комнат, а не от площади квартиры</div>
        </div>
        <div class="advantage">
          <div class="advantage__icon-block">
            <i class="ac-icon ac-icon-eco advantage__icon"></i>
          </div>
          <div class="advantage__title">Экологичная уборка гарантирована</div>
          <div class="advantage__text">
            Мы используем продукты из натурального сырья — они безопасны и гипоаллергенны</div>
        </div>
        <div class="advantage">
          <div class="advantage__icon-block">
            <i class="ac-icon ac-icon-wallet advantage__icon"></i>
          </div>
          <div class="advantage__title">Оплата наличными или картой</div>
          <div class="advantage__text">
            Вы выбираете, как вам удобнее платить – банковской картой или наличными</div>
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
        Клинер приезжает со всем необходимым и сразу же приступает к уборке.</div>
      <div class="about-cleaning__tabs tabs">
        <button type="button" class="tab">Комнаты</button>
        <button type="button" class="tab">Кухня</button>
        <button type="button" class="tab tab--active">Ванная</button>
        <button type="button" class="tab">Коридор</button>
      </div>
      <div class="about-cleaning__tabs-content tabs-content">
        <div class="tab-content">
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
            Только после этого есть возможность стать частью нашей команды</div>
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

  <!--START SECTION COUNTERS-->
  <section class="section section--p-small s-counters">
    <div class="container">
      <div class="counters">
        <div class="counter">
          <div class="counter__value">2 345</div>
          <div class="counter__title">убранных квартир</div>
        </div>
        <div class="counter">
          <div class="counter__value">873</div>
          <div class="counter__title">чистых офисов</div>
        </div>
        <div class="counter">
          <div class="counter__value">473</div>
          <div class="counter__title">клиентов</div>
        </div>
        <div class="counter">
          <div class="counter__value">122</div>
          <div class="counter__title">отзыва клиентов</div>
        </div>
        <div class="counter">
          <div class="counter__value">14</div>
          <div class="counter__title">заказов в день</div>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION COUNTERS-->

  <!--START SECTION REVIEWS-->
  <section class="section section--pb-medium section--pt-large s-reviews">
    <div class="container">
      <swiper
          loop
          :spaceBetween="30"
          :navigation="{
            prevEl: '#reviews-slider-prev-button',
            nextEl: '#reviews-slider-next-button',
          }"
          :pagination="{
            el: '#reviews-slider-pagination',
            type: 'bullets',
            bulletClass: 'dot',
            bulletActiveClass: 'dot--active',
            clickable: true,
          }"
          :modules="swiperModules"
      >
        <swiper-slide
            v-for="review in reviews" :key="review"
        >
          <div class="review">
            <div class="review__text">
              <div class="review__text-wrapper">
                {{ review.text }}
<!--                <div class="review__text-full-btn-block">-->
<!--                  <button type="button" class="btn btn&#45;&#45;link review__text-full-btn">-->
<!--                    Читать полностью</button>-->
<!--                </div>-->
              </div>
              <div class="review__text-arrow"></div>
            </div>
            <div class="review__info">
              <div class="review__photo-block">
                <div class="review__photo"
                     :style="{'background-image': `url(${review.author.avatar})`}"></div>
              </div>
              <div class="review__name">{{ review.author.name }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="reviews__slider-control navigation">
        <div
            id="reviews-slider-prev-button"
            class="reviews__navigation-arrow-prev navigation__arrow navigation__arrow--prev">
          <i class="ac-icon ac-icon-arrow-down"></i>
        </div>
        <div class="reviews__dots dots">
          <div id="reviews-slider-pagination"></div>
        </div>
        <div
            id="reviews-slider-next-button"
            class="reviews__navigation-arrow-next navigation__arrow navigation__arrow--next">
          <i class="ac-icon ac-icon-arrow-down"></i>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION REVIEWS-->

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
                    class="btn btn--white special-offer__text-btn">Заказать услугу</button>
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
            @click="showedEquipmentModal = equipment">Описание</button>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION EQUIPMENT-->

  <!--START SECTION FAQ-->
  <section class="section section--pb-medium s-faq">
    <div class="container container--flex">
      <div class="title">Часто задаваемые вопросы</div>
      <div class="s-faq__block">
        <div class="collapse">
          <div class="collapse__label">
            Нужно ли мне быть дома во время уборки?
            <i class="ac-icon ac-icon-arrow-down collapse__arrow"></i>
          </div>
          <div class="collapse__content">
            <div class="collapse__content-wrapper">
              <div class="collapse__text">
                <p>Многие клиенты остаются дома, когда впервые заказывают уборку на
                  WOW SERVICE. Но в следующий раз они предпочитают оставить
                  клинера одного, чтобы заниматься своими делами. Для этого есть
                  дополнительная услуга «Доставка ключей» — когда уборка будет
                  закончена, клинер просто привозит ключи туда, куда удобно клиенту.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse">
          <div class="collapse__label">
            У меня раздельный санузел, сколько у меня ванных комнат?
            <i class="ac-icon ac-icon-arrow-down collapse__arrow"></i>
          </div>
          <div class="collapse__content">
            <div class="collapse__content-wrapper">
              <div class="collapse__text">
                <p>В калькуляции мы учитываем только количество полных ванных комнат,
                  в которых стоит душевая кабина или ванна. Это значит, что если
                  у вас раздельный санузел, а именно: ванная комната и отдельный
                  туалет, то вы в процессе оформления заказа должны выбрать одну ванную комнату.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse">
          <div class="collapse__label">
            Из чего состоит стандартная уборка?
            <i class="ac-icon ac-icon-arrow-down collapse__arrow"></i>
          </div>
          <div class="collapse__content">
            <div class="collapse__content-wrapper">
              <div class="collapse__text">
                <p>Стандартная уборка - это уборка, поддерживающая Ваш дом в чистоте и порядке.
                  И вот из чего стандартная уборка состоит: Жилые комнаты Протираем все
                  доступные поверхности, выключатели и дверные ручки; Чистим зеркала и стеклянные
                  поверхности; Складываем одежду и расставляем вещи; Застилаем кровать;
                  Моем пол, протираем плинтусы и пылесосим ковёр; Убираем мусор. Ванная комната
                  и туалет Протираем все доступные поверхности, выключатели и дверные ручки; Моем
                  и дезинфицируем унитаз; Моем душевую кабину и ванную; Чистим зеркала и стеклянные
                  поверхности; Моем пол, протираем плинтусы и пылесосим коврики; Протираем шкафы
                  с внешней стороны; Выносим мусор. Кухня Протираем все доступные поверхности,
                  выключатели и дверные ручки; Моем снаружи бытовую технику, кухонный фартук;
                  Чистим раковину; Моем пол и протираем плинтусы; Выносим бытовой мусор. Коридор
                  Протираем все доступные поверхности; Чистим зеркала и стеклянные поверхности;
                  Моем пол, протираем плинтусы и пылесосим коврики; Протираем двери, дверные
                  косяки и ручки; Расставляем обувь.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="s-faq__block">
        <div class="collapse">
          <div class="collapse__label">
            Клинер приезжает с необходимым инвентарем и средствами?
            <i class="ac-icon ac-icon-arrow-down collapse__arrow"></i>
          </div>
          <div class="collapse__content">
            <div class="collapse__content-wrapper">
              <div class="collapse__text">
                <p>Клинер приедет со всем необходимым. Ведра, швабра, салфетки или тряпки
                  для очищения поверхностей, губки с абразивной стороной, а также мусорные
                  пакеты. Чистящие средства — для ванной, стекла, пола и
                  универсальное — мы тоже привозим с собой.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse">
          <div class="collapse__label">
            Делаете ли вы уборку после ремонта?
            <i class="ac-icon ac-icon-arrow-down collapse__arrow"></i>
          </div>
          <div class="collapse__content">
            <div class="collapse__content-wrapper">
              <div class="collapse__text">
                <p>Да, мы также специализируемся на уборке после ремонта. Вам только
                  требуется выбрать вид уборки "после ремонта" данная услуга стоит
                  дороже обычной. Дело в том, что уборка после ремонта сильно отличается
                  от простой уборки. Даже если вы уже убрали крупный мусор, остаётся
                  много пыли, разводов и пятен от краски, шпатлёвки, лака и так
                  далее. Чтобы убрать их, требуется много сил. Также Вы
                  можете проконсультироваться по телефону:
                  <a href="tel:87778310808" class="link link--gray">+7 777 831 08 08</a>.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse">
          <div class="collapse__label">
            Делаете ли вы уборку в частных домах, коттеджах, таунхаусах и на дачах?
            <i class="ac-icon ac-icon-arrow-down collapse__arrow"></i>
          </div>
          <div class="collapse__content">
            <div class="collapse__content-wrapper">
              <div class="collapse__text">
                <p>Да мы выполняем уборку в частных домах, коттеджах и в больших
                  особняках. В зависимости от обьема работы прикрепляем необходимое
                  количество клинеров для выполнения уборки в течении одного дня.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="s-faq__feedback-link feedback-link">
      Если вы не нашли свой вопрос
      <a href="mailto:#" class="link link--green link--bordered">напишите нам</a>
    </div>
  </section>
  <!--END SECTION FAQ-->

  <!--START SECTION CONTACT US-->
  <section class="section section--p-medium s-contact-us">
    <div class="container">
      <div class="contact-us">
        <a href="tel:" class="link link--violet contact-us__phone">+7 (777) 831-08-08</a>
        <router-link custom to="/order"
                     v-slot="{ navigate }">
          <button type="button"
                  @click="navigate"
                  class="btn btn--primary contact-us__order-btn">Закажите уборку сейчас</button>
        </router-link>
        <div class="contact-us__text">Мы готовы приехать к вам уже сегодня</div>
      </div>
    </div>
  </section>
  <!--END SECTION CONTACT US-->
  <Modal
      :is-active="showedEquipmentModal != null"
      @close="showedEquipmentModal = null;"
  >
    <div v-html="showedEquipmentModal?.description"/>
  </Modal>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import { Pagination, Navigation, SwiperOptions } from 'swiper';
import Modal from '@/components/Modal.vue';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/navigation/navigation.scss';
import { SwiperModule } from 'swiper/types/shared';

interface ReviewProps {
  text: string,
  author: {
    name: string,
    avatar: string,
  },
}

interface EquipmentProps {
  name: string,
  type: string,
  photo: string,
  description: string,
}

type SpecialOfferTabType = 'furniture' | 'repair' | 'cabinet' | 'mobile_app';

@Options({
  components: {
    Swiper,
    SwiperSlide,
    Modal,
  },
})
export default class Home extends Vue {
  showedEquipmentModal: EquipmentProps|null = null;
  specialOfferTabActive: SpecialOfferTabType = 'furniture';
  swiperModules: SwiperModule[] = [Pagination, Navigation];
  reviews: ReviewProps[] = [
    {
      text: 'Решил жене сделать небольшой подарок во время ее отсутствия, она придя домой не могла понять что вообще произошло))) Все сияло, блестело и остался приятный свежий запах, это было просто круто! Спасибо, Всем советую, очень удобно!',
      author: {
        name: 'Андрей Ли',
        avatar: '/images/reviews/reviewer-01.jpg',
      },
    },
    {
      text: 'Решил жене сделать, она придя домой не могла понять что вообще произошло))) Все сияло, блестело и остался приятный свежий запах, это было !',
      author: {
        name: 'Андрей Ли2',
        avatar: '/images/reviews/reviewer-01.jpg',
      },
    },
    {
      text: 'Все сияло, блестело и остался приятный свежий запах, это было ! Решил жене сделать, она придя домой не могла понять что вообще произошло)))',
      author: {
        name: 'Андрей Ли3',
        avatar: '/images/reviews/reviewer-01.jpg',
      },
    },
  ];

  reviewsSliderOptions: SwiperOptions = {
    modules: this.swiperModules,
    loop: true,
  };

  equipments: EquipmentProps[] = [
    {
      name: 'Puzzi 10/1',
      type: 'Моющий пылесос',
      photo: '/images/equipments/puzzi-10-1.png',
      description: '<p>В процессе эксплуатации мебель: диваны, кресла, стулья - изнашиваются, подвергаются различным загрязнениям. В результате мебель приобретает непривлекательный внешний вид, а это может испортить интерьер вашего помещения. Химчистка загрязнённой мебели является довольно серьёзной проблемой. Засаленные подлокотники, закапанные подушки сидений очистить самостоятельно очень трудно.</p><p>Наша компания AlmaClean готова выполнить работы по химчистке мягкой мебели как в виде отдельной услуги, так и в составе мероприятий по комплексной уборке ваших помещений.</p>',
    },
    {
      name: 'IPC Soteco Fox',
      type: 'Пылесос',
      photo: '/images/equipments/ipc-soteco-fox.png',
      description: '<p>В процессе эксплуатации мебель: диваны, кресла, стулья - изнашиваются, подвергаются различным загрязнениям. В результате мебель приобретает непривлекательный внешний вид, а это может испортить интерьер вашего помещения. Химчистка загрязнённой мебели является довольно серьёзной проблемой. Засаленные подлокотники, закапанные подушки сидений очистить самостоятельно очень трудно.</p><p>Наша компания AlmaClean готова выполнить работы по химчистке мягкой мебели как в виде отдельной услуги, так и в составе мероприятий по комплексной уборке ваших помещений.</p>',
    },
    {
      name: 'Kirby Sentria',
      type: 'Пылесос',
      photo: '/images/equipments/kirby-sentria.png',
      description: '<p>В процессе эксплуатации мебель: диваны, кресла, стулья - изнашиваются, подвергаются различным загрязнениям. В результате мебель приобретает непривлекательный внешний вид, а это может испортить интерьер вашего помещения. Химчистка загрязнённой мебели является довольно серьёзной проблемой. Засаленные подлокотники, закапанные подушки сидений очистить самостоятельно очень трудно.</p><p>Наша компания AlmaClean готова выполнить работы по химчистке мягкой мебели как в виде отдельной услуги, так и в составе мероприятий по комплексной уборке ваших помещений.</p>',
    },
    {
      name: 'SC 2 Premium',
      type: 'Пароочиститель',
      photo: '/images/equipments/sc-2-premium.png',
      description: '<p>В процессе эксплуатации мебель: диваны, кресла, стулья - изнашиваются, подвергаются различным загрязнениям. В результате мебель приобретает непривлекательный внешний вид, а это может испортить интерьер вашего помещения. Химчистка загрязнённой мебели является довольно серьёзной проблемой. Засаленные подлокотники, закапанные подушки сидений очистить самостоятельно очень трудно.</p><p>Наша компания AlmaClean готова выполнить работы по химчистке мягкой мебели как в виде отдельной услуги, так и в составе мероприятий по комплексной уборке ваших помещений.</p>',
    },
  ];
}
</script>
