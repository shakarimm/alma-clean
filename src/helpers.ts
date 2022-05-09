import Inputmask from 'inputmask';
import { currencyMaskOptions } from '@/app.config';

function pluralize(count: number, words: string[]): string {
  const cases = [2, 0, 1, 1, 1, 2];
  const word = words[(count % 100 > 4 && count % 100 < 20)
    ? 2 : cases[Math.min(count % 10, 5)]];
  return `${count}${word}`;
}

const formatCurrency = (value: number): string => Inputmask
  .format(value.toString(), currencyMaskOptions);

function validEmail(val: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(val.toLowerCase());
}

function validPhone(val: string): boolean {
  return !/_/.test(val);
}

export default {
  pluralize,
  formatCurrency,
  validEmail,
  validPhone,
};
