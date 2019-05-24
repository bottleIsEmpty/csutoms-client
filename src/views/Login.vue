<template>
  <div>
    <h2 class="row justify-content-center">Вход</h2>
    <b-form @submit="submitForm"
      class="col-lg-4 col-md-6 col-10 offset-lg-4 offset-md-3 offset-1">
      <b-form-group
        label="Логин:"
        label-for="login">
        <b-form-input
          id="login"
          type="text"
          required
          v-model="form.login"
          placeholder="Введите логин">
        </b-form-input>
      </b-form-group>
      <b-form-group
        label="Пароль:"
        label-for="password">
        <b-form-input
          id="password"
          type="password"
          required
          v-model="form.password"
          placeholder="Введите пароль">
        </b-form-input>
      </b-form-group>
      <div class="row justify-content-center mt-4">
        <b-btn variant="primary" type="sumbit">Войти</b-btn>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {},
  },
};
</script>
