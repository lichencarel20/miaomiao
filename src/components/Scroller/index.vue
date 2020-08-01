<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BS from 'better-scroll'
export default {
    name :'scroller',
    props:{
        A:{
            type:Function,
            default:function(){
            }
        },
        B:{
            type:Function,
            default:function(){

            }
        }

    },
    mounted(){
        var BSE= new BS (this.$refs.wrapper,{
                    scrollbar:true,
                    tap:true,
                    probeType: 1 
                })

        BSE.on('scroll',(pos)=>{
            this.A(pos)
        })

        BSE.on('touchEnd',(pos)=>{
            this.B(pos)
        })

       /*  BSE.on('scroll',(pos)=>{
                    if(pos.y>5){
                        console.log(555)
                        this.isShow=true
                        setTimeout(()=>{
                            this.isShow=false
                        },2000)
                    }
                }) */
         /* BSE.on("touchEnd",(pos)=>{
                    if(pos.y>5){
                        console.log("touchEnd")
                    }
                    
                }) */

    }

}
</script>

<style scoped>
    .wrapper{
        height: 100%;
    }
</style>