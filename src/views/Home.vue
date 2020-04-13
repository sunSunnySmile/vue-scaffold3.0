<template>
  <div class="home">
	<div class="nav-box-div" v-for="item in tabList" :key="item.key">
		<div class="title-text">{{item.name}}</div>
		<div class="list-box-div">
			<keep-alive>
			  <component v-bind:is="item.componentName"></component>
			</keep-alive>
		</div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import JavaScript from '@/components/javascript/JavaScript'
export default {
  name: "Home",
  components: {
	  JavaScript,
  },
  data() {
  	return {
  		tabList: [
			{ name:'JavaScript', key:'js',componentName:'JavaScript'},
			{ name:'JS框架相关', key:'framework',componentName:''},
			{ name:'UI框架', key:'UI',componentName:''},
			{ name:'CSS', key:'css',componentName:''},
		],
  	}
  },
};
</script>
<style lang="scss" scoped>
	.home{
		height: 100%;
		width: 100%;
		background: url(../../public/images/bg.jpg) no-repeat center top;
		background-size: 100% 100%;
        padding: 40px;
		display:flex;
        justify-content: space-around;
		.nav-box-div{
			height: 100%;
            width: 22%;
            box-shadow:1px 1px 15px 0px rgba(0, 0, 0, 0.15);
            border-radius:6px;
			background-color: #fff;
            .title-text{
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                font-weight: bold;
                border-bottom: 1px solid #ccc;
            }
            .list-box-div{
                height: calc(100% - 40px);
                overflow: auto;
            }
		}
	}
</style>
