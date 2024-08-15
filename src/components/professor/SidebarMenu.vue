<template>
    <v-navigation-drawer app permanent class="sidebar-menu" width="250">
      <v-container class="logo-container">
        <v-img src="@/assets/logounegro-min.png" alt="Logo Universidad de Ibagué" class="menu-logo" />
      </v-container>
      <v-list dense class="menu-list">
        <v-list-item-group active-class="selected-item">
          <v-list-item class="menu-item selected-item" disabled>
            <v-list-item-icon>
              <v-icon start>mdi-home</v-icon>
            </v-list-item-icon>
            Inicio
          </v-list-item>
  
          <v-list-item @click="navigateTo('projects')" class="menu-item">
            <v-list-item-icon>
              <v-icon start>mdi-folder</v-icon>
            </v-list-item-icon>
            Mis Trabajos de Grado
          </v-list-item>
  
          <v-list-item @click="navigateTo('upload-ptg')" class="menu-item">
            <v-list-item-icon>
              <v-icon start>mdi-upload</v-icon>
            </v-list-item-icon>
            Subir PTG
          </v-list-item>
  
          <v-list-item @click="navigateTo('offers')" class="menu-item">
            <v-list-item-icon>
              <v-icon start>mdi-briefcase</v-icon>
            </v-list-item-icon>
            Ofertas Trabajo de Grado
          </v-list-item>
  
          <v-list-item @click="navigateTo('tasks')" class="menu-item">
            <v-list-item-icon>
              <v-icon start>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            Tareas
          </v-list-item>
  
          <v-list-item @click="navigateTo('calendar')" class="menu-item">
            <v-list-item-icon>
              <v-icon start>mdi-calendar</v-icon>
            </v-list-item-icon>
            Calendario
          </v-list-item>
  
          <v-list-item @click="navigateTo('history')" class="menu-item">
            <v-list-item-icon>
              <v-icon start>mdi-history</v-icon>
            </v-list-item-icon>
            Historial
          </v-list-item>
        </v-list-item-group>
  
        <!-- Botón de Cerrar sesión -->
        <v-btn @click="navigateTo('logout')" class="logout-button" outlined>
          <v-icon left>mdi-logout</v-icon>
          Cerrar sesión
        </v-btn>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default defineComponent({
    name: 'SidebarMenu',
    setup() {
      const router = useRouter()
  
      const navigateTo = (routeName: string) => {
        router.push({ name: routeName })
      }
  
      return { navigateTo }
    },
  })
  </script>
  
  
  <style scoped src="@/styles/professor/SidebarMenu.scss"></style>
  