import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: () => import('@/pages/home/index.vue')
		},
		{
			path: '/who-we-are',
			component: () => import('@/pages/who-we-are/index.vue')
		},
		{
			path: '/what-we-do',
			component: () => import('@/pages/what-we-do/index.vue')
		},
		{
			path: '/sustainability',
			component: () => import('@/pages/sustainability/index.vue')
		},
		{
			path: '/people',
			component: () => import('@/pages/people/index.vue')
		}
	]
})

export default router
