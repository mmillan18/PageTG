<template>
  <v-navigation-drawer
    app
    :permanent="isDesktop"
    v-model="drawer"
    class="sidebar-menu bg-grey-lighten-2"
    color="surface"
    position-fixed
  >
    <v-container class="logo-container">
      <v-img src="@/assets/logounegro-min.png" alt="Logo Universidad de Ibagué" class="menu-logo" />
    </v-container>
    <v-list nav>
      <v-list-item-group active-class="selected-item">
        <v-list-item
          class="menu-item"
          :class="{ 'selected-item': currentRoute === 'Inicio' }"
          @click="navigateTo('Inicio')"
          prepend-icon="ri-home-3-line"
          title="Inicio"
        >
        </v-list-item>

        <!-- Resto de los ítems del menú -->

        <v-list-item
          @click="navigateTo('projects')"
          class="menu-item"
          prepend-icon="ri-folder-line"
          title="Mis Trabajos de Grado"
        >
        </v-list-item>

        <v-list-item
          @click="navigateTo('upload-ptg')"
          class="menu-item"
          prepend-icon="ri-upload-line"
          title="Subir PTG"
        >
        </v-list-item>

        <v-list-item
          @click="navigateTo('offers')"
          class="menu-item"
          prepend-icon="ri-briefcase-line"
          title="Ofertas Trabajo de Grado"
        >
        </v-list-item>


        <v-list-item
          @click="navigateTo('tasks')"
          class="menu-item"
          prepend-icon="ri-list-check-line"
          title="Tareas"
        >
        </v-list-item>

        <v-list-item
          @click="navigateTo('calendar')"
          class="menu-item"
          prepend-icon="ri-calendar-line"
          title="Calendario"
        >
        </v-list-item>

        <v-list-item
          @click="navigateTo('history')"
          class="menu-item"
          prepend-icon="ri-time-line"
          title="Historial"
        >
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <!-- Botón de Cerrar sesión -->
    <template v-slot:append>
      <v-btn
        @click="navigateTo('logout')"
        class="logout-button"
        block
        color="black"
        prepend-icon="ri-logout-box-line"
      >
        Cerrar sesión
      </v-btn>
    </template>
  </v-navigation-drawer>

  <!-- Botón para mostrar/ocultar menú en dispositivos móviles -->
  <v-btn
    icon
    large
    class="toggle-menu-button"
    @click="drawer = !drawer"
    v-if="!isDesktop"
  >
    <v-icon>mdi-menu</v-icon> <!-- Cambiado a icono de "hamburguesa" -->
  </v-btn>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SidebarMenu',
  setup() {
    const router = useRouter()
    const drawer = ref(true)
    const isDesktop = ref(window.innerWidth >= 1024)
    const currentRoute = ref('Inicio') // Inicializamos en Inicio por defecto

    const navigateTo = (routeName: string) => {
      currentRoute.value = routeName // Actualiza la ruta actual
      router.push({ name: routeName })
    }

    const handleResize = () => {
      isDesktop.value = window.innerWidth >= 1024
      drawer.value = isDesktop.value
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
      handleResize()
    })

    return { drawer, isDesktop, navigateTo, currentRoute }
  },
})
</script>

<style scoped src="@/styles/professor/SidebarMenu.scss"></style>
