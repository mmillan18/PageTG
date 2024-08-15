<template>
  <v-app-bar app flat height="80px" class="header-bar">
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon large>mdi-bell</v-icon>
      <span class="icon-bell"></span>
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <div class="avatar-container" v-bind="props">
          <v-avatar size="40">
            <img src="@/assets/foto.PNG" alt="User Avatar" class="avatar-img">
          </v-avatar>
          <span class="avatar-text"></span>
          <v-icon small>mdi-chevron-down</v-icon>
        </div>
      </template>
      <v-list>
        <v-list-item>
          <v-icon
            icon="mdi-pencil"
            start
            ></v-icon>
            Editar Perfil
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Headers',
})
</script>
<style scoped src="@/styles/professor/Headers.scss"></style>
