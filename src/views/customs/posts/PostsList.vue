<template>
  <div>
    <div class="row justify-content-between">
      <h2>Список таможенных постов:</h2>
      <button class="btn btn-light" @click="addCustomsPostClick">
        <font-awesome-icon icon="plus"></font-awesome-icon> Добавить таможенный пост
      </button>
    </div>
    <br>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Название</th>
            <th scope="col">Местоположение</th>
            <th scope="col">Страна 1</th>
            <th scope="col">Страна 2</th>
            <th scope="col">Функции</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in customsPosts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.name }}</td>
            <td>{{ post.location }}</td>
            <td>{{ post.country1.name }}</td>
            <td>{{ post.country2.name }}</td>
            <td class="_functions">
              <router-link :to="{ name: 'edit-customs-post', params: { id: post.id }}" alt>
                <font-awesome-icon icon="edit"></font-awesome-icon>
              </router-link>
              <a href="#" @click="deleteCustomsPostClick(country.id)">
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
import customsPosts from '@/data/mock-customsPosts';

export default {
  name: 'customs-posts-list',
  data() {
    return {
      customsPosts,
    };
  },
  methods: {
    addCustomsPostClick() {
      this.$router.push({ name: 'add-customs-post' });
    },
    deleteCustomsPostClick(id) {
      this.customsPosts = this.customsPosts.splice(id - 1, 1);
    },
  },
};
</script>
