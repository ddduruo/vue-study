<template>
    <div class="detail">
        <h1>{{id}}</h1>
        <router-link to="/list">返回列表</router-link>
    </div>
</template>

<script>
export default {
    computed: {
        id() {
            return this.$route.params.id
        }
    }
}
</script>

<style scoped>
.detail {
    width: 100%;
    overflow: hidden;
}
</style>
