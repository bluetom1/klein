<template>
	<div class="layout-wrapper">
		<!--left side-->
		<side class="sidebar-container"></side>
		<!--right container-->
		<div class="main-container">
			<tagnav></tagnav>
			<main></main>
		</div>
	</div>
</template>

<script setup lang="ts">
import side from './side.vue'
import tagnav from './tagnav.vue'
import main from './main.vue'
</script>

<style lang="scss" scoped>
.main-container {
	min-height: 100%;
	transition: margin-left 0.28s;
	margin-left: 220px;
	position: relative;
}
.sidebar-container {
	transition: width 0.28s;
	width: 220px !important;
	background-color: whitesmoke;
	height: 100%;
	position: fixed;
	font-size: 0;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1001;
	overflow: hidden;
}
.closeSidebar {
	.sidebar-container {
		width: 54px !important;
	}
	.main-container {
		margin-left: 54px !important;
	}
}
.hideSidebar {
	.sidebar-container {
		width: 0 !important;
	}
	.main-container {
		margin-left: 0;
	}
}
</style>
