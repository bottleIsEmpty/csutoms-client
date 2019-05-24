<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand to="/">Таможня</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/countries" active-class="active">Страны</b-nav-item>
          <b-nav-item to="/citizens" active-class="active">Граждане</b-nav-item>
          <b-nav-item to="/goods" active-class="active">Товары</b-nav-item>
          <b-nav-item to="/customs/posts" active-class="active">Таможенные посты</b-nav-item>
          <b-nav-item to="/about" active-class="active">О приложении</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item right to="/login" active-class="active">Вход</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'app-navbar',
};
</script>
