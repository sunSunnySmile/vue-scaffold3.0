<template>
    <div class="home">
        <HelloWorld></HelloWorld>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
export default {
    name: "Home",
    components: {
        HelloWorld,
    },
    data() {
        return {
        }
    },
};
</script>
<style lang="scss" scoped>
	.home{
		height: 100%;
        width: 100%;
        overflow: hidden;
        background-color: lightblue;
	}
</style>
