import 'clipboard' // For the copy to clipboard plugin
import Prism from 'prismjs'

// Include a theme:
// import 'prismjs/themes/prism-tomorrow.css'

// Include language support: (optional)
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-markup'

// Include the line numbers plugin: (optional)
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'


export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Prism);
})