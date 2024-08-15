<template>
  <v-app>
    <v-main class="main-content">
      <v-container fluid class="pa-0 fill-height">
        <v-img src="@/assets/background.PNG" class="background-img" cover lazy
        ></v-img>
        <v-card class="pa-10 login-card">
          <v-card-title class="justify-center">INGRESAR</v-card-title>
          <v-btn class="google-btn mb-4"  aria-label="Iniciar sesión con Google">
          <img src="@/assets/iconogoogle.png" alt="Google" class="google-icon"/>
          <span class="google-text">Google</span>
          </v-btn>
          <v-divider class="my-4">Aliado Externo</v-divider>
          <v-text-field class="login-input" label="Correo" prepend-inner-icon="mdi-email-outline"></v-text-field>
          <v-text-field class="login-input" label="Contraseña" type="password" prepend-inner-icon="mdi-lock-outline"></v-text-field>
          <div class="button-group">
           <v-btn variant="text" class="forgot-password-btn">¿Olvidaste tu contraseña?</v-btn>
           <v-btn class="primary-btn sesion-btn" color="primary">Iniciar sesión</v-btn>
           <v-btn variant="text" class="access-btn">Solicitar acceso aquí</v-btn>
           <v-btn variant="text" class="advise-btn">
           <v-icon left>mdi-information-outline</v-icon>
            Aviso de cookies
          </v-btn>
        </div>
        </v-card>
        <v-img
          src="@/assets/logou-min.png"
          class="logo" lazy
        ></v-img>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
})
</script>

<style scoped src="@/styles/LoginPage.scss"></style>
