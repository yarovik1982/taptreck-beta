import { createRouter , createWebHistory} from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ProfilePage from "../views/ProfilePage.vue";
 import BeerPage from '../views/BeerPage.vue';
import BreweryPage from '../views/BreweryPage.vue';
import PlacePage from '../views/PlacePage.vue'
import TestPage from '../views/TestPage.vue'
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue'

const routes = [
   {
      path:'/',
      name: 'home',
      component: HomePage
   },
   {
      path:'/login',
      name:'login',
      component:LoginPage,
   },
   {
      path:'/register',
      name:'register',
      component:RegisterPage,
   },
   {
      path:'/profile',
      name:'profile',
      component:ProfilePage,
      children:[
         {
            path:'/profile-favorites',
            name:'profile-favorites',
            component:() => import('../views/profile/ProfileFavoritesPage.vue')
         },
         {
            path:'/profile-reviews',
            name:'profile-reviews',
            component:() => import('../views/profile/ProfileReviewsPage.vue')
         },
         {
            path:'/profile-places',
            name:'profile-places',
            component:() => import('../views/profile/ProfilePlacesPage.vue')
         },
         {
            path:'/profile-breweries',
            name:'profile-breweries',
            component:() => import('../views/profile/ProfileBreweriesPage.vue')
         }
      ]
   },
   {
      path:'/beer',
      name:'beer',
      component: BeerPage
   },
   {
      path:'/place',
      name:'place',
      component:PlacePage
   },
   {
      path:'/brewery',
      name:'brewery',
      component:BreweryPage
   },
   {
      path:'/test',
      name:'test',
      component:TestPage
   },
]


const router = createRouter({
   history:createWebHistory(),
   routes
})

router.beforeEach((to, from, next) => {
   if (to.path.startsWith('/profile')) {
     if (JSON.parse(localStorage.getItem('token'))) {
       next();
     } else {
       next('/');
     }
   } else {
     next();
   }
 })
export default router