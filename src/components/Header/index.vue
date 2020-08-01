<template>
    <div>
        <header id="header" >
        <div class="slot">
            <slot/>
        </div>
         <h1> {{title}}</h1>    
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
    font-size: 18px;text-align: center;line-height: 50px;font-weight: normal;width: 100%;
}
.space{
    width: 100%;
    height: 52px;
}
#header .slot{
    width:50px;
    position: absolute;
    top: 14.5px;
}
</style>