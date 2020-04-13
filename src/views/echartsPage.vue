<template>
	<div class="use-echarts-wrap">
		<MyEcharts tableId="myTestPie" tableType='pie' :dataOptions="myData"></MyEcharts>
	</div>
</template>

<script>
	import MyEcharts from "@/components/echarts/myEcharts"
	export default {
		name:'UseEcharts',
		components: {
			MyEcharts,
		},
		props: {
			propName: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				myData: { 
					color: ['#30b863', '#167cde', '#11a6aa'],
					yAxisData: [{
							value: 15751433.48,
							name: '农用地'
						},
						{
							value: 3354010.81,
							name: '建设用地'
						},
						{
							value: 1106225.82,
							name: '未利用地'
						},
					],
				},
			}
		},
		methods: {
			name() {
				
			}
		},
		
	}
</script>

<style scoped>

</style>