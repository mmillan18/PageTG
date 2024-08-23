/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import 'remixicon/fonts/remixicon.css';


// Components
import App from './App.vue'
import '@/styles/professor/ProfessorDashboard.scss' // Importa el SCSS global

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
