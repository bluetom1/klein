import { defineStore } from 'pinia'
import { Tab } from '../interfaces/Tab'

export const useStore = defineStore({
	id: 'tab',
	state: () => ({
		tabCheck: getLSStr('tabCheck') || '1',
		tabs: getLSObj('tabs', '[]') as Tab[],
	}),
	actions: {
		switchTab(name: string) {
			const index = this.tabs.findIndex((item) => item.name === name)
			if (index === -1) {
				return
			}
			this.tabCheck = this.tabs[index]?.name
			setLSStr('tabCheck', this.tabCheck)
		},
		addTab(newTab: Tab) {
			const index = this.tabs.findIndex((item) => item.name === newTab.name)
			if (index === -1) {
				this.tabs.push(newTab)
				setLSObj('tabs', this.tabs)
			}
			this.tabCheck = newTab.name
			setLSStr('tabCheck', this.tabCheck)
		},
		removeTab(name: string) {
			const index = this.tabs.findIndex((item) => item.name === name)
			if (index === -1) {
				return
			}
			this.tabs.splice(index, 1)
			setLSObj('tabs', this.tabs)
			this.tabCheck = this.tabs[index - 1]?.name
		},
	},
})

const getLSStr = (key: string) => localStorage.getItem(key)
const getLSObj = (key: string, defaultValue: string) => JSON.parse(localStorage.getItem(key) || defaultValue)
const setLSStr = (key: string, str: string) => localStorage.setItem(key, str)
const setLSObj = (key: string, obj: object) => localStorage.setItem(key, JSON.stringify(obj))
