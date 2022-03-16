<template>
	<el-button @click="addTab">add tab</el-button>
	<el-tabs v-model="tab.tabCheck" type="card" closable @tab-click="clickTab" @tab-remove="removeTab">
		<el-tab-pane v-for="item in tab.tabs" :label="item.title" :name="item.name" :key="item.name">
			{{ item.content }}
		</el-tab-pane>
	</el-tabs>
</template>

<script setup lang="ts">
import { useStore } from '../store/index'
import { Tab } from '../interfaces/Tab'

let num = 0

const tab = useStore()
const clickTab = (val: any) => {
	tab.switchTab(val.paneName)
}
const addTab = () => {
	++num
	const newTab: Tab = {
		title: num.toString(),
		name: num.toString(),
		content: num.toString(),
	}
	tab.addTab(newTab)
}
const removeTab = (targetName: string) => {
	tab.removeTab(targetName)
}
</script>

<style></style>
