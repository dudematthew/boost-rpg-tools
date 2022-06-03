import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rulebook',
    name: 'rulebook',
    component: () => import(/* webpackChunkName: "about" */ '../views/RulebookView.vue')
  },
  {
    path: '/generator',
    name: 'generator',
    component: () => import(/* webpackChunkName: "about" */ '../views/CharacterGeneratorView.vue')
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
