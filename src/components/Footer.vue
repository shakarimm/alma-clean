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
              <a href="#" class="link link--white"
                 @click.prevent="onCleaningTypeClick"
              >Стандартная уборка</a>
            </li>
            <li>
              <a href="#" class="link link--white"
                 @click.prevent="onCleaningTypeClick">Генеральная уборка</a>
            </li>
            <li>
              <a href="#" class="link link--white"
                 @click.prevent="onCleaningTypeClick">Уборка после ремонта</a>
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
            <li><a href="#faq" class="link link--white">Вопросы</a></li>
            <li><a href="#reviews" class="link link--white">Отзывы</a></li>
          </ul>
        </div>
        <div class="footer__col footer__col--3">
          <div class="footer__title">Работа</div>
          <div class="footer__line"></div>
          <ul class="footer__list">
            <li><a href="#offer" class="link link--white">Хочу стать клинером</a></li>
            <li><a href="#" class="link link--white">Вакансии</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__row footer__row--info">
        <div class="footer__col footer__col--info-items footer__col--9">
          <div class="footer__info-item">Мы работаем в: Алматы, Шымкент</div>
          <div class="footer__info-item">Типы квартир: Однокомнатные, двухкомнатные,
            <br>трёхкомнатная, четырёхкомнатная
          </div>
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

  <Modal
    class="cleaning-type-modal"
    name="cleaning"
  >
    <div class="cleaning-type">
      <div class="container container--sm">
        <div class="cleaning-type__inner">
          <div class="cleaning-type__title cleaning-type__title--big">что входит в стандартную
            уборку?
          </div>
          <div class="cleaning-type__text">
            <p>Это наш регламент — то, что мы делаем на каждом заказе. Чтобы настроить уборку под
              себя, добавьте дополнительные услуги</p>
          </div>
          <div class="cleaning-type-rooms">
            <div class="cleaning-type-room">
              <div class="cleaning-type__title">НА КУХНЕ</div>
              <ul class="cleaning-type-room__list">
                <li class="cleaning-type-room__item">
                  Моются верхние и нижние фасады кухни
                </li>
                <li class="cleaning-type-room__item">
                  Помоет раковину смеситель и столешницу
                </li>
                <li class="cleaning-type-room__item">
                  Удалим пыль с вентиляционных решёток и кондиционеров
                </li>
                <li class="cleaning-type-room__item">
                  Помоет плиту и кухонный рукав
                </li>
                <li class="cleaning-type-room__item">
                  Протрет Битовую технику с наружи
                </li>
                <li class="cleaning-type-room__item">
                  Помоет полы, плинтуса и пропылесосим
                </li>
                <li class="cleaning-type-room__item">
                  Протрем двери дверные ручки, радиаторы, кондиционеры, подоконники, выключатели и
                  розетки
                </li>
                <li class="cleaning-type-room__item">
                  Вынесем мусор
                </li>
              </ul>
            </div>
            <div class="cleaning-type-room">
              <div class="cleaning-type__title">В ВАННОЙ КОМНАТЕ И ТУАЛЕТЕ</div>
              <ul class="cleaning-type-room__list">
                <li class="cleaning-type-room__item">
                  Вымоем душевую кабину, ванную и раковину
                </li>
                <li class="cleaning-type-room__item">
                  Очистим зеркала и стеклянные поверхности
                </li>
                <li class="cleaning-type-room__item">
                  Протрем Кафель с потолка до пола
                </li>
                <li class="cleaning-type-room__item">
                  Протрем полки и шкафы с внешней стороны
                </li>
                <li class="cleaning-type-room__item">
                  Протрем двери, дверные ручки, выключатели и розетки
                </li>
                <li class="cleaning-type-room__item">
                  Дезинфицируем санузел
                </li>
                <li class="cleaning-type-room__item">
                  Помоем полы, плинтуса и пропылесосим
                </li>
                <li class="cleaning-type-room__item">
                  Вынесем мусор.
                </li>
              </ul>
            </div>
            <div class="cleaning-type-room">
              <div class="cleaning-type__title">В КОМНАТАХ И В КОРИДОРЕ</div>
              <ul class="cleaning-type-room__list">
                <li class="cleaning-type-room__item">
                  Сложит разбросанные вещи и игрушки
                </li>
                <li class="cleaning-type-room__item">
                  Удалим пыль со всех доступных поверхностей и
                  элементов интерьера
                </li>
                <li class="cleaning-type-room__item">
                  Протрет двери, дверные ручки, радиаторы,
                  кондиционеры, подоконники, выключатели и розетки
                </li>
                <li class="cleaning-type-room__item">
                  Очистим зеркала и стеклянные поверхности
                </li>
                <li class="cleaning-type-room__item">
                  Помоет полы, плинтуса и пропылесосит
                </li>
                <li class="cleaning-type-room__item">
                  Вынесем мусор
                </li>
              </ul>
            </div>
          </div>
          <div class="cleaning-type-services">
            <div class="cleaning-type-services__inner">
              <div class="cleaning-type__title">Дополнительные услуги</div>
              <div class="cleaning-type-services__content">
                <div class="cleaning-type-services__left">
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/1.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем окна</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/3.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Заберём ключи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/4.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоему холодильник</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/5.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Погладим вещи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге/час</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/6.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Приберём кухонные шкафы</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/7.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем посуду</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                </div>
                <div class="cleaning-type-services__right">
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/1.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем окна</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/3.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Заберём ключи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/4.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоему холодильник</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/5.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Погладим вещи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге/час</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/6.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Приберём кухонные шкафы</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/7.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем посуду</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cleaning-type-not">
            <div class="cleaning-type-not__inner">
              <div class="cleaning-type__title">Что мы не делаем в стандартной уборке</div>
              <div class="cleaning-type-not__content">
                <div class="cleaning-type-not__left">
                  <div class="cleaning-type-not__item">Не поднимаем и не двигаем тяжёлые предметы и
                    мебель
                  </div>
                  <div class="cleaning-type-not__item">Не делаем химическую чистку ковров</div>
                  <div class="cleaning-type-not__item">Не чистим жалюзи и шторы</div>
                  <div class="cleaning-type-not__item">Не прибираем в кладовке</div>
                  <div class="cleaning-type-not__item">Не моем стены</div>
                </div>
                <div class="cleaning-type-not__right">
                  <div class="cleaning-type-not__item">Не поднимаем и не двигаем тяжёлые предметы и
                    мебель
                  </div>
                  <div class="cleaning-type-not__item">Не делаем химическую чистку ковров</div>
                  <div class="cleaning-type-not__item">Не чистим жалюзи и шторы</div>
                  <div class="cleaning-type-not__item">Не прибираем в кладовке</div>
                  <div class="cleaning-type-not__item">Не моем стены</div>
                </div>
              </div>
              <div class="cleaning-type-try">
                <div class="cleaning-type-try__inner">
                  <div class="cleaning-type-try__text">Если вам нужно, попробуйте нашу
                    генеральную уборку
                  </div>
                  <div class="btn btn--circle btn--primary cleaning-type__btn">Генеральная уборка
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
  <Modal
    class="cleaning-type-modal"
  >
    <div class="cleaning">
      <div class="container container--sm">
        <div class="cleaning-type__inner">
          <div class="cleaning-type__title cleaning-type__title--big">что входит в генеральную
            уборку?
          </div>
          <div class="cleaning-type__text">
            <p>Это наш регламент — то, что мы делаем на каждом заказе. Чтобы настроить уборку под
              себя, добавьте дополнительные услуги</p>
          </div>
          <div class="cleaning-type-rooms">
            <div class="cleaning-type-room">
              <div class="cleaning-type__title">НА КУХНЕ</div>
              <ul class="cleaning-type-room__list">
                <li class="cleaning-type-room__item">
                  Моются верхние и нижние фасады кухни
                </li>
                <li class="cleaning-type-room__item">
                  Помоет раковину смеситель и столешницу
                </li>
                <li class="cleaning-type-room__item">
                  Удалим пыль с вентиляционных решёток и кондиционеров
                </li>
                <li class="cleaning-type-room__item">
                  Помоет плиту и кухонный рукав
                </li>
                <li class="cleaning-type-room__item">
                  Протрет Битовую технику с наружи
                </li>
                <li class="cleaning-type-room__item">
                  Помоет полы, плинтуса и пропылесосим
                </li>
                <li class="cleaning-type-room__item">
                  Протрем двери дверные ручки, радиаторы, кондиционеры, подоконники, выключатели и
                  розетки
                </li>
                <li class="cleaning-type-room__item">
                  Вынесем мусор
                </li>
              </ul>
            </div>
            <div class="cleaning-type-room">
              <div class="cleaning-type__title">В ВАННОЙ КОМНАТЕ И ТУАЛЕТЕ</div>
              <ul class="cleaning-type-room__list">
                <li class="cleaning-type-room__item">
                  Вымоем душевую кабину, ванную и раковину
                </li>
                <li class="cleaning-type-room__item">
                  Очистим зеркала и стеклянные поверхности
                </li>
                <li class="cleaning-type-room__item">
                  Протрем Кафель с потолка до пола
                </li>
                <li class="cleaning-type-room__item">
                  Протрем полки и шкафы с внешней стороны
                </li>
                <li class="cleaning-type-room__item">
                  Протрем двери, дверные ручки, выключатели и розетки
                </li>
                <li class="cleaning-type-room__item">
                  Дезинфицируем санузел
                </li>
                <li class="cleaning-type-room__item">
                  Помоем полы, плинтуса и пропылесосим
                </li>
                <li class="cleaning-type-room__item">
                  Вынесем мусор.
                </li>
              </ul>
            </div>
            <div class="cleaning-type-room">
              <div class="cleaning-type__title">В КОМНАТАХ И В КОРИДОРЕ</div>
              <ul class="cleaning-type-room__list">
                <li class="cleaning-type-room__item">
                  Сложит разбросанные вещи и игрушки
                </li>
                <li class="cleaning-type-room__item">
                  Удалим пыль со всех доступных поверхностей и
                  элементов интерьера
                </li>
                <li class="cleaning-type-room__item">
                  Протрет двери, дверные ручки, радиаторы,
                  кондиционеры, подоконники, выключатели и розетки
                </li>
                <li class="cleaning-type-room__item">
                  Очистим зеркала и стеклянные поверхности
                </li>
                <li class="cleaning-type-room__item">
                  Помоет полы, плинтуса и пропылесосит
                </li>
                <li class="cleaning-type-room__item">
                  Вынесем мусор
                </li>
              </ul>
            </div>
          </div>
          <div class="cleaning-type-services">
            <div class="cleaning-type-services__inner">
              <div class="cleaning-type__title">Дополнительные услуги</div>
              <div class="cleaning-type-services__content">
                <div class="cleaning-type-services__left">
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/1.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем окна</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/3.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Заберём ключи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/4.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоему холодильник</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/5.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Погладим вещи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге/час</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/6.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Приберём кухонные шкафы</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/7.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем посуду</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                </div>
                <div class="cleaning-type-services__right">
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/1.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем окна</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/3.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Заберём ключи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/4.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоему холодильник</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/5.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Погладим вещи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге/час</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/6.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Приберём кухонные шкафы</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/7.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем посуду</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cleaning-type-not">
            <div class="cleaning-type-not__inner">
              <div class="cleaning-type__title">Что мы не делаем в стандартной уборке</div>
              <div class="cleaning-type-not__content">
                <div class="cleaning-type-not__left">
                  <div class="cleaning-type-not__item">Не поднимаем и не двигаем тяжёлые предметы и
                    мебель
                  </div>
                  <div class="cleaning-type-not__item">Не делаем химическую чистку ковров</div>
                  <div class="cleaning-type-not__item">Не чистим жалюзи и шторы</div>
                  <div class="cleaning-type-not__item">Не прибираем в кладовке</div>
                  <div class="cleaning-type-not__item">Не моем стены</div>
                </div>
                <div class="cleaning-type-not__right">
                  <div class="cleaning-type-not__item">Не поднимаем и не двигаем тяжёлые предметы и
                    мебель
                  </div>
                  <div class="cleaning-type-not__item">Не делаем химическую чистку ковров</div>
                  <div class="cleaning-type-not__item">Не чистим жалюзи и шторы</div>
                  <div class="cleaning-type-not__item">Не прибираем в кладовке</div>
                  <div class="cleaning-type-not__item">Не моем стены</div>
                </div>
              </div>
              <div class="cleaning-type-try">
                <div class="cleaning-type-try__inner">
                  <div class="cleaning-type-try__text">Если вам нужно, попробуйте нашу
                    генеральную уборку
                  </div>
                  <div class="btn btn--circle btn--primary cleaning-type__btn">Генеральная уборка
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
  <Modal
    class="cleaning-type-modal"
  >
    <div class="cleaning">
      <div class="container container--sm">
        <div class="cleaning-type__inner">
          <div class="cleaning-type__title cleaning-type__title--big">что входит в уборку после
            ремонта?
          </div>
          <div class="cleaning-type__text">
            <p>Это наш регламент — то, что мы делаем на каждом заказе. Чтобы настроить уборку под
              себя, добавьте дополнительные услуги</p>
          </div>
          <div class="cleaning-type-rooms">
            <div class="cleaning-type-room">
              <div class="cleaning-type__title">НА КУХНЕ</div>
              <ul class="cleaning-type-room__list">
                <li class="cleaning-type-room__item">
                  Моются верхние и нижние фасады кухни
                </li>
                <li class="cleaning-type-room__item">
                  Помоет раковину смеситель и столешницу
                </li>
                <li class="cleaning-type-room__item">
                  Удалим пыль с вентиляционных решёток и кондиционеров
                </li>
                <li class="cleaning-type-room__item">
                  Помоет плиту и кухонный рукав
                </li>
                <li class="cleaning-type-room__item">
                  Протрет Битовую технику с наружи
                </li>
                <li class="cleaning-type-room__item">
                  Помоет полы, плинтуса и пропылесосим
                </li>
                <li class="cleaning-type-room__item">
                  Протрем двери дверные ручки, радиаторы, кондиционеры, подоконники, выключатели и
                  розетки
                </li>
                <li class="cleaning-type-room__item">
                  Вынесем мусор
                </li>
              </ul>
            </div>
            <div class="cleaning-type-room">
              <div class="cleaning-type__title">В ВАННОЙ КОМНАТЕ И ТУАЛЕТЕ</div>
              <ul class="cleaning-type-room__list">
                <li class="cleaning-type-room__item">
                  Вымоем душевую кабину, ванную и раковину
                </li>
                <li class="cleaning-type-room__item">
                  Очистим зеркала и стеклянные поверхности
                </li>
                <li class="cleaning-type-room__item">
                  Протрем Кафель с потолка до пола
                </li>
                <li class="cleaning-type-room__item">
                  Протрем полки и шкафы с внешней стороны
                </li>
                <li class="cleaning-type-room__item">
                  Протрем двери, дверные ручки, выключатели и розетки
                </li>
                <li class="cleaning-type-room__item">
                  Дезинфицируем санузел
                </li>
                <li class="cleaning-type-room__item">
                  Помоем полы, плинтуса и пропылесосим
                </li>
                <li class="cleaning-type-room__item">
                  Вынесем мусор.
                </li>
              </ul>
            </div>
            <div class="cleaning-type-room">
              <div class="cleaning-type__title">В КОМНАТАХ И В КОРИДОРЕ</div>
              <ul class="cleaning-type-room__list">
                <li class="cleaning-type-room__item">
                  Сложит разбросанные вещи и игрушки
                </li>
                <li class="cleaning-type-room__item">
                  Удалим пыль со всех доступных поверхностей и
                  элементов интерьера
                </li>
                <li class="cleaning-type-room__item">
                  Протрет двери, дверные ручки, радиаторы,
                  кондиционеры, подоконники, выключатели и розетки
                </li>
                <li class="cleaning-type-room__item">
                  Очистим зеркала и стеклянные поверхности
                </li>
                <li class="cleaning-type-room__item">
                  Помоет полы, плинтуса и пропылесосит
                </li>
                <li class="cleaning-type-room__item">
                  Вынесем мусор
                </li>
              </ul>
            </div>
          </div>
          <div class="cleaning-type-services">
            <div class="cleaning-type-services__inner">
              <div class="cleaning-type__title">Дополнительные услуги</div>
              <div class="cleaning-type-services__content">
                <div class="cleaning-type-services__left">
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/1.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем окна</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/3.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Заберём ключи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/4.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоему холодильник</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/5.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Погладим вещи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге/час</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/6.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Приберём кухонные шкафы</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/7.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем посуду</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                </div>
                <div class="cleaning-type-services__right">
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/1.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем окна</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге за окно</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/2.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Уберём балкон</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/3.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Заберём ключи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/4.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоему холодильник</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">50 000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/5.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Погладим вещи</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге/час</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/6.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Приберём кухонные шкафы</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                  <div class="cleaning-type-card">
                    <div class="cleaning-type-card__img-wrapper">
                      <img src="/images/cleaning-icons/7.svg"/>
                    </div>
                    <div class="cleaning-type-card__content">
                      <div class="cleaning-type-card-item__inner">
                        <div class="cleaning-type-card-item__title">Помоем посуду</div>
                        <div class="cleaning-type-card-item__img-wrapper">
                          <img src="/images/cleaning-icons/elem.svg">
                        </div>
                      </div>
                      <div class="cleaning-type-card-item__price">5000 тенге</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cleaning-type-not">
            <div class="cleaning-type-not__inner">
              <div class="cleaning-type__title">Что мы не делаем в стандартной уборке</div>
              <div class="cleaning-type-not__content">
                <div class="cleaning-type-not__left">
                  <div class="cleaning-type-not__item">Не поднимаем и не двигаем тяжёлые предметы и
                    мебель
                  </div>
                  <div class="cleaning-type-not__item">Не делаем химическую чистку ковров</div>
                  <div class="cleaning-type-not__item">Не чистим жалюзи и шторы</div>
                  <div class="cleaning-type-not__item">Не прибираем в кладовке</div>
                  <div class="cleaning-type-not__item">Не моем стены</div>
                </div>
                <div class="cleaning-type-not__right">
                  <div class="cleaning-type-not__item">Не поднимаем и не двигаем тяжёлые предметы и
                    мебель
                  </div>
                  <div class="cleaning-type-not__item">Не делаем химическую чистку ковров</div>
                  <div class="cleaning-type-not__item">Не чистим жалюзи и шторы</div>
                  <div class="cleaning-type-not__item">Не прибираем в кладовке</div>
                  <div class="cleaning-type-not__item">Не моем стены</div>
                </div>
              </div>
              <div class="cleaning-type-try">
                <div class="cleaning-type-try__inner">
                  <div class="cleaning-type-try__text">Если вам нужно, попробуйте нашу
                    генеральную уборку
                  </div>
                  <div class="btn btn--circle btn--primary cleaning-type__btn">Генеральная уборка
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Modal from '@/components/Modal.vue';

@Options({
  components: {
    Modal,
  },
})
export default class Footer extends Vue {
  onCleaningTypeClick(): void {
    this.$store.dispatch('openModal', 'cleaning');
  }
}
</script>
