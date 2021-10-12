<template>
    <div class="list">
        <h1>this is an list</h1>
        <div v-for="item in list" :key="item" class="item">
            <router-link :to="item">{{item}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        list() {
            return new Array(100).fill('').map((item, index) => `/detail/${index}`)
        }
    }
}
</script>

<style scoped>
.list {
    width: 100%;
    overflow: hidden;
    background-color: gray;


}
.item {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 18px;
        font-weight: bold;
    }
</style>
