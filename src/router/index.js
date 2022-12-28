import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import BooksView from '../views/BooksView.vue'
import AuthorView from '../views/AuthorView.vue'
import LogInView from '../views/AuthView/LogInView.vue'
import ForgetPassowrdView from '../views/AuthView/ForgetPassowrdView.vue'
import BookPageView from '../views/BookPageView.vue'
import ProfileView from '../views/ProfileView.vue'
import SignUpView from '../views/AuthView/SignUpView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { navBarColor: 'text-red' }
    },
    {
        path: '/category',
        name: 'category',
        component: CategoryView,
        meta: { navBarColor: 'text-red' }
    },
    {
        path: '/AuthView/LogIn',
        name: 'logIn',
        component: LogInView,
        meta: { navBarColor: 'text-red' }
    },
    {
        path: '/ForgetPassowrdView',
        name: 'ForgetPassowrd',
        component: ForgetPassowrdView,
        meta: { navBarColor: 'text-red' }
    },
    {
        path: '/SignUpView',
        name: 'SignUp',
        component: SignUpView,
        meta: { navBarColor: 'text-red' }
    },

    {
        path: '/books/:categoryId',
        name: 'books',
        component: BooksView,
        meta: { navBarColor: 'text-red' }
    },

    {
        path: '/AuthorView',
        name: 'Author',
        component: AuthorView,
        meta: { navBarColor: 'text-red' }
    },

    {
        path: '/BookPageView/:bookId',
        name: 'BookPage',
        component: BookPageView,
        meta: { navBarColor: 'text-red' }
    },

    {
        path: '/ProfileView',
        name: 'Profile',
        component: ProfileView,
        meta: { navBarColor: 'text-red' }
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router