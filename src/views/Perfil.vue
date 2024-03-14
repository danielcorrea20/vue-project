<script setup>
import { ref } from 'vue';

//"index",
    defineProps(["id" , "nombre", "apellido"])
    const textoEdad = ref(false)
    const nacimiento = ref('');
    const date = new Date();
    const esteAño = ref(date.getFullYear());
    const edad = ref('');
 
    
    function mostrar(){
        textoEdad.value = !textoEdad.value;
        edad.value = esteAño.value - nacimiento.value
    }

</script>

<template>
<h1>ESTOY EN PERFIL</h1>

<h2>El index del usuario es {{ id }}</h2>
<h2>Su nombre es: {{ nombre }}</h2>
<h2>Su apellido es: {{ apellido }}</h2>
<label for="">¿En que año naciste?</label>
<input type="number" v-model="nacimiento">
 = {{esteAño}} - {{nacimiento}}
<v-btn @click="mostrar">EDAD</v-btn>
<p v-if="textoEdad">La edad del usuario es de {{ edad }} años </p>



</template>