<template>
  <div id="Five5">
  <div class="content">
      <div class="title">
        以下哪个渠道办理信用卡最方便又可靠？
      </div>
      <div class="wrap"><div :class="{wrap2:hide2,wrap22:!hide2}" v-on:click="bos2"></div><span>来路不明的办卡小广告</span></div>
      <div class="wrap"><div :class="{wrap3:hide3,wrap33:!hide3}" v-on:click="bos3"></div><span>极速办卡的银行合作方-随手记APP</span></div>
      <div class="wrap"><div :class="{wrap4:hide4,wrap44:!hide4}" v-on:click="bos4"></div><span>收取手续费的街边摊位</span></div>
  </div>
  <div class="achievement" v-on:click="achievement">查看成绩</div>
  
  </div>
</template>

<script>
export default {
  data(){
    return {
      hide2:true,
      hide4:true,
      hide3:true,
      sum:0
    }
  },
	methods:{
		achievement(){
     
      if(this.hide3==false){
        this.sum++
		  	this.$router.push({path:"/Six6",query:{
          sum:this.sum
        }})
       }else{
        this.$router.push({path:"/Six6",query:{
          sum:this.sum
        }})
       }
		  },
      bos2(){
        this.hide2=false
      },
      bos3(){
        this.hide3=false
      },
      bos4(){
        this.hide4=false
      }


	},
  mounted(){
    this.sum=this.$route.query.sum
  }
  
}
</script>
    
<style>
  #Five5{   
    background:url(../../img/3.png) no-repeat;
  	background-size:100% 100%;
  }
  .achievement{
  	position: absolute;
    transform: translate3d(-50%,-50%,0);
  	left:50%;
  	bottom:35px;
  	color:#fff;
  }
  .wrap2,.wrap3,.wrap4{
    width: 35px;
    height: 35px;
    background:url("../../img/radio_03.png") no-repeat;
    background-size:100% 100%;
  }
  .wrap22,.wrap44{
    width: 35px;
    height: 35px;
    background:url("../../img/radio_06.png") no-repeat;
    background-size:100% 100%;
  }
  .wrap33{
    width: 35px;
    height: 35px;
    background:url("../../img/radio_08.png") no-repeat;
    background-size:100% 100%;
  }
</style>