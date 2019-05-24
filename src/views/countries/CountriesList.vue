<template>
  <div>
    <div class="row justify-content-between">
      <h2>Список стран:</h2>
      <button class="btn btn-light" @click="addCountryClick">
        <font-awesome-icon icon="plus"></font-awesome-icon> Добавить страну
      </button>
    </div>
    <br>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Название</th>
            <th scope="col">Сокращение</th>
            <th scope="col">Функции</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="country in countries" :key="country.id">
            <td>{{ country.id }}</td>
            <td>{{ country.name }}</td>
            <td>{{ country.shortName }}</td>
            <td class="_functions">
              <router-link :to="{ name: 'edit-country', params: { id: country.id }}" alt>
                <font-awesome-icon icon="edit"></font-awesome-icon>
              </router-link>
              <a href="#" @click="deleteCountryClick(country.id)">
                <font-awesome-icon icon="ban"></font-awesome-icon>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import countries from '@/data/mock-countries';

export default {
  name: 'countries-list',
  data() {
    return {
      countries,
    };
  },
  methods: {
    addCountryClick() {
      this.$router.push({ name: 'add-country' });
    },
    deleteCountryClick(id) {
      this.countries = this.countries.splice(id - 1, 1);
    },
  },
};
</script>
