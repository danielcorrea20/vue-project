import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue';
import Perfil from '../views/Perfil.vue';
import Configuracion from '../views/Configuracion.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      //:index,
      path: '/:id/:nombre/:apellido',
      name: 'Perfil',
      component: Perfil,
      props: true
    },
    {
      path: '/Configuracion',
      name: 'Configuracion',
      component: Configuracion
    },

  ]
})

export default router
