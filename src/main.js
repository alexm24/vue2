import Vue from 'vue'
import Keycloak from 'keycloak-js'
import App from './App.vue'
import { router } from '@/plugins'
import { store } from '@/store'
import { MUTATION_APP, ACTION_AXIOS_APP } from '@/store/const/type'
import './scss/main.scss'
import './scss/style.scss'
import './scss/watch.scss'
import './scss/media.scss'
import { checkUser, hash256 } from '@/func'
/** Показывать предупреждение о запуске вью в дев режиме */
Vue.config.productionTip = false

/** Возможность использовать вкладку perfomance во вью дев тулзах */
Vue.config.performance = !__PRODUCTION_STAND_TYPE__

/** Возможность использования девтулзов в продакшн сборке */
Vue.config.devtools = !__PRODUCTION_STAND_TYPE__

const initOptions = {
  realm: 'mts',
  url: 'https://isso.mts.ru/auth/',
  clientId: 'tube'
}

const keycloak = Keycloak(initOptions)

keycloak
  .init({ onLoad: 'login-required' })
  .then((auth) => {
    if (!auth) {
      window.location.reload()
    } else {
      const app = new Vue({
        router,
        store,
        render: (h) => h(App, { props: { keycloak } })
      })
      const { username, email, fullname } = keycloak.idTokenParsed
      checkUser({ username, email, fullname })
      store.commit(MUTATION_APP.USER, { username, email, fullname })
      hash256(email).then((avatar) =>
        store.commit(MUTATION_APP.USER, { username, email, fullname, avatar })
      )
      store.dispatch(ACTION_AXIOS_APP.ADMIN_POST, username).then(() => {})

      router.onReady(() => app.$mount('#app'))
    }
  })
  .catch(() => {
    console.log('Authenticated Failed')
  })
