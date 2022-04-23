<template>
  <!--START SECTION ORDERS-->
  <section class="section s-profile-orders">
    <div class="container container--flex">
      <div class="content-block content-block--profile">
        <div class="separated-block">
          <div class="separated-block__title">Личные данные</div>
          <div class="separated-block__form separated-block__form--mt-0">
            <div class="separated-block__input-block input-block">
              <label class="input-block__label">Имя</label>
              <input type="text" class="input-control input-control--short" value="Алексей">
            </div>

            <div class="separated-block__input-block input-block">
              <label class="input-block__label">Фамилия</label>
              <input type="text" class="input-control input-control--short" value="Сушков">
            </div>

            <div class="separated-block__input-block input-block">
              <label class="input-block__label">Телефон</label>
              <input type="text" class="input-control input-control--short" value="+79622645077">
            </div>
          </div>
        </div>
        <div class="separated-block">
          <div class="separated-block__title">Адрес</div>
          <div class="separated-block__subtitle">Заполните эти данные чтобы не
            указывать их в заявке каждый раз.</div>
          <div class="separated-block__form">
            <div class="separated-block__input-block
              separated-block__input-block--double input-block">
              <label class="input-block__label">Название</label>
              <input type="text" class="input-control input-control--short" value="Алексей">
            </div>

            <div class="separated-block__form-separate-line"></div>

            <div class="separated-block__input-block input-block">
              <input type="text" class="input-control input-control--short"
                     value="Алматы" placeholder="Город">
            </div>

            <div class="separated-block__input-block input-block">
              <input type="text" class="input-control input-control--short"
                     value="Улица" placeholder="Улица">
            </div>

            <div class="separated-block__input-block input-block">
              <input type="text" class="input-control input-control--short"
                     value="Дом" placeholder="Дом">
            </div>

            <div class="separated-block__form-separate-line"></div>

            <div class="separated-block__input-block input-block">
              <input type="text" class="input-control input-control--short"
                     value="Квартира" placeholder="Квартира">
            </div>

            <div class="separated-block__input-block input-block">
              <input type="text" class="input-control input-control--short"
                     value="Этаж" placeholder="Этаж">
            </div>

            <div class="separated-block__form-separate-line"></div>

            <button type="button" class="separated-block__btn-secondary
              btn btn--small btn--secondary btn--circle">Добавить еще один адрес</button>
          </div>
        </div>
        <div class="separated-block">
          <div class="separated-block__title">Почтовые рассылки и уведомления</div>
          <div class="separated-block__subtitle">Будьте в курсе событий
            и акций, получайте квитанции</div>
          <div class="separated-block__form separated-block__form--mt-0 subscribe-form">
            <div class="subscribe-form__email-block">
              <div class="input-block">
                <label class="input-block__label">Ваш Email</label>
                <input type="text" class="input-control input-control--short" value="test@mail.ru">
              </div>
            </div>
            <div class="subscribe-form__checkbox-block">
              <label class="checkbox">
                <input type="checkbox" class="checkbox__input">
                <span class="checkbox__check">
                  <i class="checkbox__icon ac-icon ac-icon-check"></i></span>
                <span class="checkbox__text">Получать новости и спецпредложения</span>
              </label>
            </div>
          </div>
        </div>
        <div class="separated-block">
          <button type="button" class="btn btn--primary">Сохранить изменения</button>
        </div>
      </div>
      <div class="sidebar sidebar--profile"></div>
    </div>
  </section>
  <!--END SECTION ORDERS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class ProfileSettings extends Vue {}
</script>
