<template>
	<el-menu default-active="2" :collapse="collapse">
		<button @click="switchMenu">switch</button>
		<el-sub-menu index="1">
			<template #title>
				<span>Navigator One</span>
			</template>
			<el-menu-item-group>
				<template #title><span>Group One</span></template>
				<el-menu-item index="1-1">item one</el-menu-item>
				<el-menu-item index="1-2">item two</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="Group Two">
				<el-menu-item index="1-3">item three</el-menu-item>
			</el-menu-item-group>
		</el-sub-menu>
	</el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const collapse = ref(false)
const switchMenu = () => {
	collapse.value = !collapse.value
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
}
</style>
