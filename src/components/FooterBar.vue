<template>
    <Footer class="fixed-bottom text-center bg-primary text-white">
        <div class="p-4 ">© <strong>{{copyright}}</strong> Copyright - {{msg}}</div>
    </Footer>
</template>

<script>
export default {
    props:{
        msg:{},
        copyright:{}
    }
    

}
</script>

<style scoped >
    .bg-primary{
    background-color: #304878!important;
    }
</style>
