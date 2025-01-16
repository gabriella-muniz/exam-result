import { createRouter, createWebHistory } from 'vue-router';
import Institutions from '@/views/Institutions.vue';
import Schools from '@/views/Schools.vue';


const routes = [
 
  { path: '/institutions', component: Institutions },
  { path: '/schools', component: Schools },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
