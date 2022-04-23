<template>
  <div class="collapse" :class="{ 'collapse--active': isActive }">
    <div class="collapse__label" @click="onClick">
      Нужно ли мне быть дома во время уборки?
      <i class="ac-icon ac-icon-arrow-down collapse__arrow"></i>
    </div>
    <div class="collapse__content">
      <div class="collapse__content-wrapper">
        <div class="collapse__text">
          <p>Многие клиенты остаются дома, когда впервые заказывают уборку
            на WOW SERVICE. Но в следующий раз они предпочитают оставить
            клинера одного, чтобы заниматься своими делами. Для этого есть
            дополнительная услуга «Доставка ключей» — когда уборка будет
            закончена, клинер просто привозит ключи туда, куда удобно клиенту.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  emits: ['test'],
})
export default class Collapse extends Vue {
  isActive = false;

  onClick(): void {
    this.$emit('test');
    this.isActive = !this.isActive;
  }
}
</script>
