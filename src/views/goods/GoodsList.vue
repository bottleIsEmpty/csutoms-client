<template>
  <div>
    <div class="row justify-content-between">
      <h2>Список товаров:</h2>
      <button class="btn btn-light" @click="addGoodClick">
        <font-awesome-icon icon="plus"></font-awesome-icon> Добавить товар
      </button>
    </div>
    <br>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Название</th>
            <th scope="col">Размер пошлины</th>
            <th scope="col">Функции</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="good in goods" :key="good.id">
            <td>{{ good.id }}</td>
            <td>{{ good.name }}</td>
            <td>{{ good.dutySize }}</td>
            <td class="_functions">
              <router-link :to="{ name: 'edit-good', params: { id: good.id }}" alt>
                <font-awesome-icon icon="edit"></font-awesome-icon>
              </router-link>
              <a href="#" @click="deleteGoodClick(good.id)">
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
import goods from '@/data/mock-goods';

export default {
  name: 'goods-list',
  data() {
    return {
      goods,
    };
  },
  methods: {
    addGoodClick() {
      this.$router.push({ name: 'add-good' });
    },
    deleteGoodClick(id) {
      this.goods = this.goods.splice(id - 1, 1);
    },
  },
};
</script>
