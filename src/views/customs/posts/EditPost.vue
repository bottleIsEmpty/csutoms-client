<template>
  <div>
    <h2 class="row justify-content-center" v-if="mode == 'add'">Добавить таможенный пост</h2>
    <h2 class="row justify-content-center" v-else>Редактировать данные о таможенном посте</h2>
    <b-form
      class="col-lg-6 col-md-8 col-12 offset-lg-3 offset-md-2 justify-content-center"
      @submit="submitForm">
      <b-form-group
        label="Название:"
        label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          required
          placeholder="Введите название таможенного поста"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Расположение:"
        label-for="location">
        <b-form-input
          id="location"
          v-model="form.location"
          type="text"
          required
          placeholder="Введите расположение поста"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Страна, в которой располагается таможенный пункт"
        label-for="country1">
        <b-form-select
          id="country1"
          required
          v-model="form.country1"
          :options="countriesList"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        label="Страна, в которую ведет таможенный пункт"
        label-for="country2">
        <b-form-select
          id="country2"
          required
          v-model="form.country2"
          :options="countriesList"
        ></b-form-select>
      </b-form-group>

      <div class="row justify-content-center mt-4">
        <b-button type="submit" variant="primary">Сохранить</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import countries from '@/data/mock-countries';

export default {
  name: 'app-customs-post',
  data() {
    return {
      form: {
        name: '',
        location: '',
        country1: 1,
        country2: 2,
      },
    };
  },
  computed: {
    mode() {
      return (this.$route.params.id) ? 'edit' : 'add';
    },
    countriesList() {
      return countries.map(country => ({ value: country.id, text: country.name }));
    },
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log(this.form);
    },
  },
};
</script>
