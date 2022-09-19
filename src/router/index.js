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
    component: () => import('../views/RulebookView.vue')
  },
  {
    path: '/generator',
    name: 'generator',
    component: () => import('../views/CharacterGeneratorView.vue')
  },
  {
    path: '/character-sheet',
    name: 'character sheet',
    component: () => import('../views/CharacterSheetView.vue')
  },
  {
    path: '/game-master-panel',
    name: 'game master panel',
    component: () => import('../views/GameMasterPanelView.vue')
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'auto' });
  }
});

export default router;
