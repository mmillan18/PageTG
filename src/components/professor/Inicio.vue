<template>
  <div class="inicio-container">
    <!-- Sección de Mis Trabajos de Grado -->
    <div class="section-wrapper">
      <div class="section-title">
        <v-icon start>mdi-folder</v-icon>
        <span>Mis Trabajos de Grado</span>
      </div>
      <div class="project-card-container">
        <v-card class="project-card" v-for="i in 3" :key="i">
          <v-img
            src="@/assets/estructuras.jpg"
            height="150"
          ></v-img>
          <v-card-title>Diseño</v-card-title>
          <v-card-subtitle>3 miembros</v-card-subtitle>
          <v-card-text>Autor: Luis Peña</v-card-text>
        </v-card>
      </div>
    </div>

    <!-- Sección de Noticias -->
    <div class="section-wrapper">
      <div class="section-title">
        <v-icon start>mdi-newspaper</v-icon>
        <span>Noticias</span>
      </div>
      <div class="news-card-container">
        <v-card class="news-card" v-for="i in 3" :key="i">
          <v-img
            src="@/assets/estructuras.jpg"
            height="150"
          ></v-img>
          <v-card-title>Lorem ipsum</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...</v-card-text>
          <v-card-actions>
            <v-btn variant="text">Ver más</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Inicio',
})
</script>