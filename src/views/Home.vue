<template>
  <div class="home">
    <!-- 左侧导航 -->
    <div class="left-bar-wrap">
      <el-menu default-active="activeMenu" >
        <el-menu-item :index="item.path"
                      v-for="item in menuList">
          <span slot="title">{{item.name}}</span>
        </el-menu-item>

      </el-menu>
    </div>
    <!-- 右侧内容 -->
    <div class="content-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
  },
  data () {
    return {
        activeMenu:'/element',
      menuList: [
        { name: '表格', path: '/element', key: 'table' },
      ],
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  .left-bar-wrap {
    width: 400px;
    height: 100%;
    background-color: pink;
  }
  .content-wrap {
    width: calc(100% - 400px);
    height: 100%;
  }
}
</style>
