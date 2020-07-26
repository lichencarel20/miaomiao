<template>
    <div>
        <Header title="我的喵喵" ></Header>
            <Login></Login>
        <tabBar></tabBar>
    </div>
</template>

<script>
import Header from '@/components/Header'
import tabBar from '@/components/tabBar'
import Login  from '@/components/Login'
export default {
    components:{
        Header,
        tabBar,
        Login
    }
}
</script>

<style  scoped>

</style>