import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/login/LoginPage'
import IndexPage from '../views/main/IndexPage'
import CalenderDetail from '../views/myCalendar/CalenderDetail'
import DDay from '../views/dday/DDay'
import DdayCreate from '../views/dday/DdayCreate'
import TeamCalendar from '../views/teamCalendar/TeamCalendar'
import ProFile from '../views/profile/ProFile'
import DefaultLayout from "@/views/layout/DefaultLayout";

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/defaultLayout',
    name: 'defaultLayout',
    component: DefaultLayout,
    children: [
      {
        path: '/index',
        name:'IndexPage',
        component: IndexPage
      },
      {
        path: '/calender',
        name: 'CalenderDetail',
        component: CalenderDetail
      },
      {
        path: '/dday',
        name: 'DDay',
        component: DDay
      },
      {
        path: '/ddaycreate',
        name: 'DdayCreate',
        component:DdayCreate
      },
      {
        path: '/team',
        name: 'TeamCalendar',
        component:TeamCalendar
      },
      {
        path: '/profile',
        name: 'ProFile',
        component:ProFile
      }
      ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
