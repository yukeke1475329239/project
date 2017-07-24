<template>
  <div id="Six6">
    <div id="bos">
      <p>恭喜你</p>
      <p>你在模拟考试中答对了<span>{{sum}}</span>道题</p>
    </div>
    <div id="bos2">
      {{el}}
    </div>
     <div class="reward" v-on:click="reward">
     	拿走奖励
     </div>
     <div class="reward2">
       嘚瑟一下
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      el:"",
      sum:0
    }
 
  },
  methods:{
    reward(){
    	this.$router.push("/Seven7")
    }
  },
  mounted(){
    this.sum=this.$route.query.sum
    this.el=this.$store.state.items[this.sum-1]
    if(this.sum==0){
      this.el="谢谢参与!"
      
    }
  }
}
</script>
    
<style>
#Six6{
	background:url(../../img/5.png) no-repeat;
	background-size:100% 100%;
}
.reward{
	position: absolute;
	color:#fff;
	left:50%;
	bottom:31.5%;
	transform: translate3d(-50%,-50%,0);
}
.reward2{
  position: absolute;
  color:#fff;
  left:50%;
  bottom:19%;
  transform: translate3d(-50%,-50%,0);
}
#bos2{
  position: absolute;
  color:#fff;
  top:39%;
  left:50%;
  font-size:20px;
  transform: translate3d(-50%,-50%,0);
}
#bos{
  text-align:center;
  width: 80%;
  position: absolute;
  left:50%;
  top:25%;
  transform: translate3d(-50%,-50%,0);
}
#bos span{
  color:red;
}
</style>