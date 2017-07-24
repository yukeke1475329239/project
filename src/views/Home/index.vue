<template>
  <div id="Home">
    <img src="../../img/1.png" alt="" class="img">
   
  <!--  <button v-on:click="add">home</button> -->
     <router-link to=/One1 class="btn">我要答</router-link>
   
  </div>
</template>

<script>
export default {
  data(){
  	return {

  	}
  },
  methods:{
    // add(){
    //   this.$router.push("/One1")
    // }
    
  }
}
</script>
    
<style>
*{
  margin:0;
  padding:0;
  list-style:none;
  text-decoration: none;
}
   html,body{
   	width: 100%;
   	height: 100%;
   }
   #Home{
     width: 100%;
     height: 100%;
   }
   #Home .img{
    display:block;
    width: 100%;
    height: 100%;
   }
   .btn{
    position: absolute;
    left:50%;
    top: 49%;
    transform: translate3d(-50%,-50%,0);
    font-size:20px;
    color:#000;
   }
   
</style>