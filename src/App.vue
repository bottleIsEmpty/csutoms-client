<template>
  <div id="app">
    <div id="nav">
      <app-navbar />
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/Navbar.vue';

export default {
  components: {
    AppNavbar,
  },
};
</script>

<style lang="scss">
.container {
    margin-top: 20px;
}

._functions a {
  padding: 10px;
}

.form-control[readonly] {
  background-color: #fff !important;
}
</style>
