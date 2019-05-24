<template>
  <div>
    <h2 class="row justify-content-center" v-if="mode == 'add'">Добавить страну</h2>
    <h2 class="row justify-content-center" v-else>Редактировать данные о стране</h2>
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
          placeholder="Введите название страны"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Краткое название:"
        label-for="short-name">
        <b-form-input
          id="short-name"
          type="text"
          required
          v-model="form.shortName"
          placeholder="Введите краткое название"
        ></b-form-input>
      </b-form-group>
      <div class="row justify-content-center mt-4">
        <b-button type="submit" variant="primary">Сохранить</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'app-countries-list',
  data() {
    return {
      form: {
        name: '',
        shortName: '',
      },
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
};
</script>
