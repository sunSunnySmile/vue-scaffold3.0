/* 
 * @Author: zouting   
 * @Date: 2020-05-08 16:13:16   
 * @Last Modified by: zouting
 * @Last Modified time: 2020-05-08 16:19:45
 * @Description:页面结构组件
 */
<template>
    <div class="frame-page-wrap">
        页面结构组件
    </div>
</template>

<script>
    export default {
        name:'FramePage',
        data() {
            return {
                key: 'value'
            }
        },
        methods: {
            name() {
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.frame-page-wrap{
    height: 100%;
    width: 100%;
    background-color: pink;
    color: #fff;
    font-size: 18px;
    font-weight:800;
}

</style>