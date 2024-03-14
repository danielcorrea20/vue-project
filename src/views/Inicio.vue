<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const nombre2 = ref('')
const router = useRouter()


const lista = ref([])
async function leerApi() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    lista.value = response.data;
    console.log(lista.value);

}
onBeforeMount(leerApi)

function enviarId(index, nombre, apellido){
  
  router.push("/" + index +"/"+ nombre +"/"+ apellido)
  
}
</script>

<template>
  <v-text-field  type="text" v-model="nombre2"></v-text-field>
  <v-btn @click="enviarId">Enviar</v-btn>
  <h1>ESTOY EN INICIO</h1>
  
  <v-card class="mx-auto" max-width="300">
    <ul v-for="item in lista">
      <li>Nombre: {{ item.name }}</li>
      <li>Edad: {{ item.username }}</li>
      <!---->
      <v-btn @click="enviarId(item.id, item.name, item.username)">Usario {{ item.id }}</v-btn>
    </ul>
  </v-card>
</template>