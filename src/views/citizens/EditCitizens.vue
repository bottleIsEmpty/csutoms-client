<template>
<div>
    <h2 class="row justify-content-center" v-if="mode == 'add'">Добавить гражданина</h2>
    <h2 class="row justify-content-center" v-else>Редактировать данные о гражданине</h2>
    <b-form
      class="col-lg-6 col-md-8 col-12 offset-lg-3 offset-md-2 justify-content-center"
      @submit="submitForm">

      <b-form-group
        label="Фамилия:"
        label-for="surname">
        <b-form-input
          id="surname"
          type="text"
          required
          v-model="form.surname"
          placeholder="Иванов"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Имя:"
        label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          required
          placeholder="Сергей"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Отчество:"
        label-for="pathronymic">
        <b-form-input
          id="pathronymic"
          type="text"
          required
          v-model="form.pathronymic"
          placeholder="Петрович"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Дата рождения:"
        label-for="birth-date">
        <Datepicker
          v-model="form.birthDate"
          :language="ru"
          input-class="form-control"
        ></Datepicker>
      </b-form-group>

      <b-form-group
        label="Национальность:"
        label-for="nationality">
        <b-form-input
          id="nationality"
          type="text"
          required
          v-model="form.nationality"
          placeholder="Украинец"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Страна:"
        label-for="country">
        <b-form-select
          id="country"
          required
          :options="countries"
          v-model="form.country"
        >
          <option slot="first" :value="null">Выберите старну из списка...</option>
        </b-form-select>
      </b-form-group>

      <div class="row justify-content-center mt-4">
        <b-button type="submit" variant="primary">Сохранить</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { ru } from 'vuejs-datepicker/dist/locale';

export default {
  name: 'app-edit-citizens',
  data() {
    return {
      form: {
        name: '',
        surname: '',
        pathronymic: '',
        birthDate: new Date(),
        nationality: '',
        country: null,
      },
      ru,
      countries: { 1: 'Украина', 2: 'Россия', 3: 'Беларусь' },
    };
  },
  computed: {
    mode() {
      return (this.$route.params.id) ? 'edit' : 'add';
    },
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log(this.form);
    },
  },
  components: {
    Datepicker,
  },
};
</script>

<style lang="scss" scoped>

</style>
