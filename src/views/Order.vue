<template>
  <!--START SECTION PAGE FIRST SCREEN-->
  <section class="section s-page-first-screen">
    <div class="s-page-first-screen__bg">
      <img src="/images/backgrounds/s-page-first-screen-bg.jpg" alt="Уборка">
    </div>
    <div class="container s-page-first-screen__content">
      <h1 class="s-page-first-screen__title">Оформление уборки</h1>
    </div>
  </section>
  <!--END SECTION PAGE FIRST SCREEN-->

  <!--START SECTION ORDER DETAILS-->
  <section class="section s-order-details">
    <div class="container container--flex">
      <div class="content-block">
        <div class="breadcrumbs">
          <div class="breadcrumbs__item breadcrumbs__item--active">Детали заказа</div>
          <div class="breadcrumbs__item">Регистрация</div>
          <div class="breadcrumbs__item">Оплата</div>
        </div>
        <div class="shadow-block">
          <div class="block-title block-underline">Информация о квартире</div>

          <div class="shadow-block__container order-detail__container block-underline">
            <div class="order-detail__type-housing">
              <div class="order-detail__title">Вид вашего жилья</div>

              <div class="order-detail__type-housing-cards">
                <div class="icon-card icon-card--hover icon-card--active
                  order-detail__type-housing-card">
                  <div class="icon-card__icon-block">
                    <i class="icon-card__icon ac-icon ac-icon-apartment-building"></i>
                  </div>
                  <div class="icon-card__title">Квартира</div>
                </div>
                <div class="icon-card icon-card--hover order-detail__type-housing-card">
                  <div class="icon-card__icon-block">
                    <i class="icon-card__icon ac-icon ac-icon-house"></i>
                  </div>
                  <div class="icon-card__title">Дом</div>
                </div>
              </div>
            </div>

            <div class="order-detail__options-housing">
              <div class="number-controller-group">
                <div class="number-controller-group__title">Количество комнат</div>
                <div class="number-controller number-controller--secondary">
                  <button type="button"
                          class="number-controller__btn number-controller__btn--minus"></button>
                  <input type="text"
                         placeholder="1 комната" value="1 комната" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="number-controller-group">
                <div class="number-controller-group__title">Количество санузлов</div>
                <div class="number-controller number-controller--secondary">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--minus"></button>
                  <input type="text"
                         placeholder="2 санузла" value="2 санузла" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>
            </div>
          </div>

          <div class="shadow-block__container block-underline">
            <div class="order-detail__title">Тип уборки</div>
            <div class="tabs order-detail__type-cleaning-tabs">
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray tab--active">Стандарт</button>
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray">Генеральная</button>
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray">После ремонта</button>
            </div>
            <div class="order-detail__type-cleaning-text">Краткое описание преимуществ
              и качества данной уборки. Компания проводит жесткий отбор сотрудников
              в несколько этапов. Каждый претендент на должность проходит
              собеседование, тестирование и проверку службой безопасности.
              Только после этого есть возможность стать частью нашей команды.</div>
          </div>

          <div class="shadow-block__container block-underline">
            <div class="order-detail__title">Дополнительные услуги</div>
            <div class="order-detail__order-options-cards">
              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-window"></i>
                </div>
                <div class="icon-card__title">Двухсторонее мытье окон</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0"
                         min="0" max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-balcony"></i>
                </div>
                <div class="icon-card__title">Уборка на балконе</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-wall"></i>
                </div>
                <div class="icon-card__title">Мытье стен (10м²)</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-lustre"></i>
                </div>
                <div class="icon-card__title">Мытье люстр</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-man"></i>
                </div>
                <div class="icon-card__title">Дополнительный клинер</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-jalousie"></i>
                </div>
                <div class="icon-card__title">Мытье жалюзи</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-oven"></i>
                </div>
                <div class="icon-card__title">Помыть духовку (изнутри)</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-fridge"></i>
                </div>
                <div class="icon-card__title">Помыть холодильник</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-kitchen"></i>
                </div>
                <div class="icon-card__title">Помыть кухонный гарнитур</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-laundry"></i>
                </div>
                <div class="icon-card__title">Глажка (200тг/час)</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-clothes-rack"></i>
                </div>
                <div class="icon-card__title">Убраться в гардеробе</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-dishes"></i>
                </div>
                <div class="icon-card__title">Помыть посуду</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-sponge"></i>
                </div>
                <div class="icon-card__title">Помыть потолок</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>
            </div>
          </div>

          <div class="shadow-block__container block-underline">
            <label class="order-detail__title checkbox">
              <input type="checkbox" class="checkbox__input">
              <span class="checkbox__check">
                <i class="checkbox__icon ac-icon ac-icon-check"></i>
              </span>
              <span class="checkbox__text">Нужна химчистка?</span>
            </label>

            <div class="order-detail__order-options-cards">
              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-sofa"></i>
                </div>
                <div class="icon-card__title">Мягкая мебель (места)</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0 м" value="0 м" min="0" max="99"
                         class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-carpet"></i>
                </div>
                <div class="icon-card__title">Ковры (м²)</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0 м²" value="0 м²" min="0" max="99"
                         class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-bed"></i>
                </div>
                <div class="icon-card__title">Матрасы</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-chair"></i>
                </div>
                <div class="icon-card__title">Стулья</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-sofa-with-nightstand"></i>
                </div>
                <div class="icon-card__title">Кресла</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>

              <div class="icon-card order-detail__order-options-card">
                <div class="icon-card__icon-block">
                  <i class="icon-card__icon ac-icon ac-icon-kitchen-staff"></i>
                </div>
                <div class="icon-card__title">Кухонный уголок</div>

                <div class="icon-card__number-controller number-controller number-controller--zero">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--minus"></button>
                  <input type="text" placeholder="0" value="0" min="0"
                         max="99" class="number-controller__input">
                  <button type="button" class="number-controller__btn
                    number-controller__btn--active number-controller__btn--plus"></button>
                </div>
              </div>
            </div>
          </div>

          <div class="shadow-block__container order-detail__container
            block-underline block-underline--bg-secondary">
            <div class="order-detail__frequency-cleaning-heading">
              <div class="order-detail__title">Частота уборки</div>
              <a href="#" class="link link--green link--bordered
                order-detail__frequency-cleaning-about">Подробнее о регулярной уборке</a>
            </div>

            <div class="tabs order-detail__frequency-cleaning-tabs">
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray tab--active order-detail__frequency-cleaning-tab">
                Каждую неделю
                <br>
                <span class="tab__text">20% скидка</span>
              </button>
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray order-detail__frequency-cleaning-tab">
                Каждый месяц
                <br>
                <span class="tab__text">10% скидка</span>
              </button>
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray order-detail__frequency-cleaning-tab">
                Дважды в месяц
                <br>
                <span class="tab__text">15% скидка</span>
              </button>
              <button type="button" class="tab tab--text-normal
                tab--text-medium tab--gray order-detail__frequency-cleaning-tab
                order-detail__frequency-cleaning-tab--long">Разовая уборка</button>
            </div>
          </div>

          <div class="shadow-block__container order-detail__container block-underline">
            <div class="order-detail__title">Когда к Вам приехать?</div>
            <div class="input-block">
              <div class="input-block__prepend"><i class="ac-icon ac-icon-calendar"></i></div>
              <input type="text" class="input-control" placeholder="Дата">
            </div>
            <div class="input-block">
              <div class="input-block__prepend"><i class="ac-icon ac-icon-time"></i></div>
              <input type="text" class="input-control" placeholder="Время">
            </div>
          </div>

          <div class="shadow-block__container order-detail__container block-underline">
            <div class="order-detail__title">Адрес уборки</div>

            <div class="address-form">
              <div class="address-form__input-block input-block">
                <input type="text" class="input-control" placeholder="Город">
              </div>
              <div class="address-form__input-block address-form__input-block--double input-block">
                <input type="text" class="input-control" placeholder="Улица">
              </div>
              <div class="address-form__input-block input-block">
                <input type="text" class="input-control" placeholder="Дом">
              </div>
              <div class="address-form__input-block input-block">
                <input type="text" class="input-control" placeholder="Этаж">
              </div>
              <div class="address-form__input-block input-block">
                <input type="text" class="input-control" placeholder="Квартира">
              </div>
              <div class="address-form__input-block address-form__input-block--full input-block">
                <input type="text" class="input-control" placeholder="Комментарий или пожелания">
              </div>
            </div>
          </div>
          <div class="shadow-block__container order-detail__container block-underline">
            <button type="submit" class="order-detail__submit-btn
              btn btn--primary">Заказать уборку</button>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="order-check shadow-block">
          <div class="order-check__head">Ваш заказ</div>
          <div class="order-check__body">
            <div class="order-check__section">
              <div class="order-check__title">Состав заказа:</div>
              <div class="order-check__item">
                <div class="order-check__item-title">Генеральная уборка</div>
                <div class="order-check__item-value">
                  два раза в месяц, четверг и суббота с 14:00 – 20:00</div>
              </div>
              <div class="order-check__item">
                <div class="order-check__item-title">Услуги:</div>
                <div class="order-check__item-value">
                  Мойка окон (2), Мойка люстр (3), Мойка посуды,
                  Чистка кухонного гарнитура, Доставка ключей</div>
                <a href="#" class="order-check__item-link
                  link link--green link--bordered">Весь список</a>
              </div>
            </div>
            <div class="order-check__section">
              <div class="order-check-table">
                <div class="order-check-table__row">
                  <div class="order-check-table__col">
                    <span class="order-check__regular-accent-text tooltip">
                      Абонемент <span class="tooltip__icon">
                      <span class="tooltip__icon-text">?</span></span>
                    </span>
                  </div>
                  <div class="order-check-table__col">2 уборки</div>
                </div>
                <div class="order-check-table__row">
                  <div class="order-check-table__col">
                    Стоимость одной уборки
                    <div class="order-check__old-price">175 000 тенге</div>
                    <div class="order-check__medium-text">101 000 тенге</div>
                  </div>
                  <div class="order-check-table__col">
                    Скидка
                    <br>
                    <span class="order-check__accent-text">15</span>
                    <span class="order-check__medium-text">%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-check__section">
              <div class="order-check__title order-check__title--mb-0">Итого:</div>
              <div class="order-check__total order-check__accent-text">123 954 тг</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--END SECTION ORDER DETAILS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Order extends Vue {}
</script>
