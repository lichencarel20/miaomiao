<template>
    <div>
        <header id="header" >
         <h1>{{title}}</h1>    
        </header>
        <div class="space" />
    </div>
</template>

<script>
export default {
    name:'Header',
    props:{
        title:{
            type:String,
            default:'喵喵电影'
        }
    }
}
</script>

<style scoped>
#header{
    width: 100%;height: 50px;color: white;background: #e54847;border-bottom:2px solid #e54847;position: fixed;left: 0px;top: 0px;
}
#header h1{
    font-size: 18px;text-align: center;line-height: 50px;font-weight: normal;
}
.space{
    width: 100%;
    height: 52px;
}

</style>