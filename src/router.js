import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import AddForm from './pages/AddForm.vue'
import TableView from './pages/TableView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddForm',
    component: AddForm
  },
  {
    path: '/table',
    name: 'TableView',
    component: TableView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
