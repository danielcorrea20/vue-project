<script setup>

import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
// const inicio = ref(<RouterLink to="/">Inicio</RouterLink>)
// const configuracion =ref(<RouterLink to="/Configuracion">Configuracion</RouterLink>)
// const perfil = ref( <RouterLink to="/Perfil">Perfil</RouterLink>)

const lista = ref([
  "Inicio", "Configuracion"

])
const lista2 = ref([
  "/", "/configuracion"

])

</script>

<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card height="200px">
        <v-card-title class="bg-blue">
          <span class="text-h5">Menu</span>

          <v-spacer></v-spacer>

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>

            <v-list>
              <v-list-item  v-for="(item, i) in lista2" :key="i">
                <v-list-item-title ><RouterLink class="item" :to="item">{{ lista[i] }}</RouterLink></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>

        <v-card-text>Menu Principal</v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <!----<nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/Configuracion">Configuracion</RouterLink>
    <RouterLink to="/Perfil">Perfil</RouterLink>
  </nav>
  -->

  <RouterView />
</template>
<style>
.item{
  text-decoration: none;
}
</style>


