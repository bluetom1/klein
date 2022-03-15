import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout/layout.vue'

export const constantRoutes = [
	{
		path: '/401',
		component: () => import('../views/error-page/401.vue'),
		hidden: true,
	},
	{
		path: '/404',
		component: () => import('../views/error-page/404.vue'),
		hidden: true,
	},
	{
		path: '/',
		component: layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				component: () => import('../views/dashboard/index.vue'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	scrollBehavior: () => ({ top: 0 }),
	routes: constantRoutes,
})

export default router
