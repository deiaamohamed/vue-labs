import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import AddForm from './pages/AddForm.vue'
import TableView from './pages/TableView.vue'
import EditForm from './pages/EditForm.vue'

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
  },
  {
    path: '/edit/:id',
    name: 'EditForm',
    component: EditForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
