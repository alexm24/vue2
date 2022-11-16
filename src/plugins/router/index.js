import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes'
import { noop } from './noop-guard'

export const router = new Router({ mode: 'history', routes })

router.beforeEach(noop)

Vue.use(Router)
