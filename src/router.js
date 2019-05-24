import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

import Countries from './views/countries/Countries.vue';
import CountriesList from './views/countries/CountriesList.vue';
import EditCountry from './views/countries/EditCountry.vue';

import Goods from './views/goods/Goods.vue';
import GoodsList from './views/goods/GoodsList.vue';
import EditGood from './views/goods/EditGood.vue';

import Citizens from './views/citizens/Citizens.vue';
import CitizensList from './views/citizens/CitizensList.vue';
import EditCitizens from './views/citizens/EditCitizens.vue';

import Customs from './views/customs/Customs.vue';
import Posts from './views/customs/posts/Posts.vue';
import PostsList from './views/customs/posts/PostsList.vue';
import EditPost from './views/customs/posts/EditPost.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/countries',
      component: Countries,
      children: [
        {
          path: '',
          name: 'countries-list',
          component: CountriesList,
        },
        {
          path: 'edit',
          name: 'add-country',
          component: EditCountry,
        },
        {
          path: 'edit/:id',
          name: 'edit-country',
          component: EditCountry,
        },
      ],
    },
    {
      path: '/goods',
      component: Goods,
      children: [
        {
          path: '',
          name: 'goods-list',
          component: GoodsList,
        },
        {
          path: 'edit',
          name: 'add-good',
          component: EditGood,
        },
        {
          path: 'edit/:id',
          name: 'edit-good',
          component: EditGood,
        },
      ],
    },
    {
      path: '/citizens',
      component: Citizens,
      children: [
        {
          path: '',
          name: 'citizens-list',
          component: CitizensList,
        },
        {
          path: 'edit',
          name: 'add-citizen',
          component: EditCitizens,
        },
        {
          path: 'edit/:id',
          name: 'edit-citizen',
          component: EditCitizens,
        },
      ],
    },
    {
      path: '/customs',
      component: Customs,
      children: [
        {
          path: 'posts',
          component: Posts,
          children: [
            {
              path: '',
              name: 'customs-posts-list',
              component: PostsList,
            },
            {
              path: 'edit',
              name: 'add-customs-post',
              component: EditPost,
            },
            {
              path: 'edit/:id',
              name: 'edit-customs-post',
              component: EditPost,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
