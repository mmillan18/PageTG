<template>
    <div class="inicio-container">
      <h1 class="page-title">Inicio</h1>
  
      <div class="project-card-container">
        <v-card>
          <v-img
            src="https://via.placeholder.com/150"
            height="150"
          ></v-img>
          <v-card-title>Diseño</v-card-title>
          <v-card-subtitle>3 miembros</v-card-subtitle>
          <v-card-text>Autor: Luis Peña</v-card-text>
        </v-card>
      </div>
  
      <div class="news-card-container">
        <v-card>
          <v-img
            src="https://via.placeholder.com/150"
            height="150"
          ></v-img>
          <v-card-title>Lorem ipsum</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet...</v-card-text>
          <v-card-actions>
            <v-btn variant="text">Ver más</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Inicio',
  })
  </script>
  
  <style scoped src="@/styles/professor/Inicio.scss"></style>
  