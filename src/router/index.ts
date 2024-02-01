import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../module/home_page/views/HomeView.vue';
import PostsViewVue from '@/views/post_page/views/PostsView.vue';
import PostViewVue from '@/views/post_page/views/PostView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsViewVue,
    },
    
    {
      path: '/post/:id',
      name: 'post',
      component: PostViewVue,
    }
  ]
})

export default router
