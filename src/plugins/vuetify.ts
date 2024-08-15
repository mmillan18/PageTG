// vuetify.ts
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

// Aquí puedes definir los colores del tema
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        colors: {
          primary: '#0033a0',
          secondary: '#f05323',
          accent: '#ffd700',
        },
      },
    },
  },
  // Define la fuente en el CSS global
})
