1
<template>
  <div id="One1">

  <img :src="images" class="img2">

  <div class="content">
      <div class="title">
        {{subject}}
      </div>
      <div class="wrap"  v-for="(x,index) in list">
        <div class="ll" v-on:click="asyc({con:x})" v-bind:class="{bg1:ck!=correct&&x==ck,bg:ck!=correct||x!=correct,bg2:ck==correct&&ck==x}"></div>
      <span>{{x}}</span></div>
    
  </div>
   <div class="footer">
       <p>求助</p>
       <p v-on:click="one">下一题1</p>
   </div>			
   
  </div>
</template>

<script>

export default {
  data(){
  	return {
  		images:"",
      subject:"",
      list:[],
      count:0,
      ind:-1,
      flag1:false,
      flag2:false,
      ck:"",
      correct:"",
      flag3:true,
      inds:0,
      sum:0
  	}
  },
  mounted(){
    this.correct=this.$store.state.data[count].correct
  },
 methods:{
   
   one(){
    if(this.correct==this.ck){
       this.sum++
    }
    // console.log(this.sum)
   

    if(this.ck==""){

      alert("您还没有选择任何选项！")
      return 
    }else if(this.ck!=""){
       this.count++
      this.ck=""
    }
    if(this.inds==4){
     
       this.$router.push({path:"/Five5",query:{sum:this.sum}})
    }else{
       this.upData(this.count)
    }
    
    
  },

   upData(count){
    this.correct=this.$store.state.data[count].correct
    this.images=this.$store.state.data[count].img
    this.subject=this.$store.state.data[count].subject
    this.list=this.$store.state.data[count].list
    this.inds=this.$store.state.data[count].id
   },
   asyc(e){
    if(e!=null){

      this.ck = e.con
    }else{
      this.ck = ""
      
    }
    }
 },
   mounted(){
    
    this.upData(this.count)
    setTimeout(()=>{
      // console.log(this.$store.state.data)
    },1000)
  }
}
</script>
    
<style scoped>
  #One1 .img2{
    width: 100%;
    height: 100%;
  }
  .footer{
    width: 100%;
    height: 80px;
    line-height: 80px;
    position: fixed;
    bottom:0;
    display:flex;
    justify-content:space-around;
    color:#fff;
  }
  .bg{
    width:35px;
    height:35px;
    background:url("../../img/radio_03.png") no-repeat;
    background-size: 100% 100%;
  }
  .bg1{
    width:35px;
    height:35px;
    background:url("../../img/radio_06.png") no-repeat;
    background-size: 100% 100%;
  }
  .bg2{
    width:35px;
    height:35px;
    background:url("../../img/radio_08.png") no-repeat;
    background-size: 100% 100%;
  }
  .achievement{
    position: absolute;
    transform: translate3d(-50%,-50%,0);
    left:50%;
    bottom:35px;
    color:#fff;
  }
</style>