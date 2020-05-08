<template>
    <div class="hello-world-wrap">
        <!-- <h1>{{ msg }}</h1> -->
        <FramePage />

    </div>
</template>

<script>
import FramePage from '@/components/common/framePage'
export default {
    name: "HelloWorld",
    components: {
        FramePage,
    },
    data() {
        return {
            msg: 'HelloWorld ----首页'
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello-world-wrap{
    height: 100%;
    width: 100%;
    background-color: pink;
    h1 {
        font-size: 40px;
        color: #333;
    }

}
   
</style>
