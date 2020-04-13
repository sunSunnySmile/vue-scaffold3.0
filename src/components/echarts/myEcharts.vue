<template>
	<div class="echart-table-wrap" cid="echartTable">
		<div :id="tableId" style="height:100%; width:100%"></div>
	</div>
</template>

<script>
	import 'echarts/lib/chart/bar';
	export default {
		name: 'MyEchart',
		props: {
			tableId: {
				type: String,
				required: true,
			},
			tableType: { //表格类型，目前只支持bar,pie两种类型
				type: String,
				validator: function(value) {
					// 这个值必须匹配下列字符串中的一个
					return ['pie', 'bar', 'guage'].indexOf(value) !== -1
				}
			},
			dataOptions: {
				type: Object,
				default: function() {
					return {
						xAxisData: [], //横坐标数据
						yAxisData: [], //纵坐标数据
					}
				}
			}
		},
		data() {
			return {
				// 颜色
				color: ['#167CDE'], //颜色
				// 标题
				title: {
					text: this.dataOptions.titleText ? this.dataOptions.titleText : null,
					x: '10',
					textStyle: {
						color: '#fff',
						fontSize: 14,
						lineHeight: 40,
					},
				},
				// 提示框
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '6%',
					containLabel: true
				},
				// x轴
				xAxis: {
					bar: {
						type: 'category',
						data: this.dataOptions.xAxisData,
						axisTick: {
							alignWithLabel: true
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(255,255,255,.6)',
							}
						},
						axisLabel: {
							color: '#fff'
						},
					},
					pie: {
						show: false
					},
				},
				// y轴
				yAxis: {
					type: 'value',
					axisLine: {
						show: false
					},
					axisLabel: {
						color: '#fff'
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.3)',
							type: 'dashed',
						}
					}
				},
				// 坐标轴数据
				series: {
					bar: {
						type: 'bar',
						barWidth: '60%',
						data: this.dataOptions.yAxisData
					},
					pie: {
						type: 'pie',
						data: this.dataOptions.yAxisData,
						radius: '65%',
						center: ['50%', '50%'],
						label: {
							show: true,
							formatter: '{b}\n {d}%',
							align: 'center',
							textStyle: {
								color: '#fff'
							}
						},
						labelLine: {
							length: 15,
							length2: 5,
						},
					},
				},
				othersData: ['xAxisData', 'yAxisData', 'titleText'], //需要过滤掉的props参数

			}
		},

		mounted() {
			let type = this.tableType;
			this.drawEcharts(type);
		},

		methods: {
			drawEcharts(type) {
				let _this = this;
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById(_this.tableId));

				// 获取父组件传入的值和默认值
				let newGrid = this.dataOptions.grid ? Object.assign(this.grid, this.dataOptions.grid) : this.grid;
				let newTooltip = this.dataOptions.tooltip ? Object.assign(this.tooltip, this.dataOptions.tooltip) : this.tooltip;
				let newxAxis = this.dataOptions.xAxis ? Object.assign(this.xAxis[type], this.dataOptions.xAxis) : this.xAxis[type];
				let newyAxis = this.dataOptions.yAxis ? Object.assign(this.yAxis, this.dataOptions.yAxis) : this.yAxis;

				// 去除options传入的数据项---  xAxisData:[],//横坐标数据    yAxisData:[],//纵坐标数据
				let dataOptions = { ...this.dataOptions
				};
				for (let key in dataOptions) {
					if (this.othersData.includes(key)) {
						delete dataOptions[key]
					}
				}

				let newSeries = null;
				// 饼状图系列数据的加载与获取默认数据
				if (type == 'pie') {
					newSeries = { ...this.series[type]
					};
					if (this.dataOptions.series) {
						if (Array.isArray(this.dataOptions.series) && this.dataOptions.series.length) { //如果传入的series为数组
							newSeries = this.dataOptions.series.map(item => {
								return Object.assign(_this.series[type], item)
							})
						} else { //如果传入的series为对象
							newSeries = Object.assign(_this.series[type], _this.dataOptions.series);
						}
					}
				}

				// 设置图表的数据
				let options = {
					...dataOptions,
					color: this.dataOptions.color ? this.dataOptions.color : null,
					title: this.dataOptions.title ? this.dataOptions.title : this.title,
					legend: this.dataOptions.legend ? this.dataOptions.legend : {
						show: false
					},
					grid: newGrid,
					tooltip: newTooltip,
					xAxis: newxAxis,
					yAxis: newyAxis,
					// series: this.dataOptions.series ? this.dataOptions.series : this.series[type],
					series: newSeries ? newSeries : (this.dataOptions.series ? this.dataOptions.series : this.series[type]),
				};

				// 删除options中属性值为null的项
				for (let prop in options) {
					if (options[prop] == null) {
						delete options[prop]
					}
				}

				if (options.title.text == null) {
					delete options.title
				}

				// 绘制图表
				myChart.setOption({ ...options});

			},
		},
	}
</script>

<style lang="scss" scoped>
	.echart-table-wrap {
		height: 100%;
		width: 100%;
	}
</style>
