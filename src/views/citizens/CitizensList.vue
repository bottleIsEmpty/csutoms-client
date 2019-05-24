<template>
  <div>
    <div class="row justify-content-between">
      <h2>Список граждан:</h2>
      <button class="btn btn-light" @click="addCitizenClick">
        <font-awesome-icon icon="plus"></font-awesome-icon> Добавить гражданина
      </button>
    </div>
    <br>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Имя</th>
            <th scope="col">Отчество</th>
            <th scope="col">Дата рождения</th>
            <th scope="col">Страна</th>
            <th scope="col">Функции</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="citizen in citizens" :key="citizen.id">
            <td>{{ citizen.id }}</td>
            <td>{{ citizen.surname }}</td>
            <td>{{ citizen.name }}</td>
            <td>{{ citizen.pathronymic }}</td>
            <td>{{ citizen.birthDate }}</td>
            <td>{{ citizen.country }}</td>
            <td class="_functions">
              <router-link :to="{ name: 'edit-citizen', params: { id: citizen.id }}" alt>
                <font-awesome-icon icon="edit"></font-awesome-icon>
              </router-link>
              <a href="#" @click="deleteCitizenClick(citizen.id)">
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
export default {
  name: 'app-citizens-list',
  data() {
    return {
      citizens: [
        {
          id: 1,
          name: 'Иван',
          surname: 'Сухарев',
          pathronymic: 'Петрович',
          birthDate: '01.07.1998',
          nationality: 'Украинец',
          country: 'Республика "ЛуганДон"',
        },
      ],
    };
  },
  methods: {
    addCitizenClick() {
      this.$router.push({ name: 'add-citizen' });
    },
    deleteCitizenClick() {

    },
  },
};
</script>
