<template>
	<div class="javascript-wrap">
		<ul>
			<li class="list-item-li" v-for="(item, index) in jsDatas" :key="item.name" @click="handleGo(item)">
				<span>{{index + 1}}.</span> <span>{{item.name}}</span>
			</li>
		</ul>
	</div>	
</template>

<script>
	import { jsDatas } from '../../../public/datas/jsDataList.js'
	export default {
		name:'Js_page',
		data() {
			return {
				jsDatas,
			}
		},
		methods: {
			handleGo(item){
				debugger
				console.log(item);
				if(item.path.includes('https:')){
					window.open(item.path)
				}else{
					this.$router.push(item.path)
				}
				
			}
		},
	}
</script>

<style scoped lang="scss">
	.list-item-li{
		font-size: 20px;
		text-align: left;
		line-height: 40px;
		padding: 0px 20px;
	}
</style>
