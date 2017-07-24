<template>
  <div id="Seven7">
    
    <div class="sevent"><img src="../../img/card.png" alt=""></div>
    <div class="box">
       <p>广大“福”卡</p>
       <div class="kk">
         <div class="orange">10元看大片</div>
         <div class="txt">
           使用中国光大银行信用卡在指定影院仅刷10元即可购得当天电影票一张
         </div>
       </div>
       <div class="kk">
         <div class="orange">其他优惠</div>
         <div class="txt">
           开卡首年送3万积分
         </div>
         <div class="txt">
          首创自选免息分期功能
         </div>
       </div>
       <div class="kk">
         <div class="orange">年费信息</div>
         <div class="txt">
           首年免运费,当年消费3笔或累计金额2000元,免次年年费
         </div>
         
       </div>
    </div>
    <div id="div">
      <input type="button" value="立即申请" id="btn">
   </div>
  </div>
</template>

<script>
export default {
  name: 'Seven'
}
</script>
    
<style scoped>
 .sevent{
    width: 100%;
    height: 150px;
    display:flex;
    align-items: center;
    justify-content: center;
  /*	background:url(../../img/card.png)no-repeat;
  	background-size:left center;*/
  }
  .sevent img{
  	width: 60%;
  	height:auto;
  	display:inline-block;
  }
  .box{
    width: 80%;
    height:auto;
    margin-left:10%;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  } 
  .box p{
    height: 35px;
    line-height: 35px; 
    text-align:center;
    border-bottom:1px solid #eee; 
    font-weight: bold; 
  }
  .kk{
    padding-top:20px;
  }
  .orange{
    color:orange;
  }
  .txt{
    font-size: 14px;
    color:#999;
  }
  #div{
    position: absolute;
    bottom: 0;
    display:flex;
    height: 60px;
    line-height: 60px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #btn{
    color:#fff; 
    background:orange;
    width: 86%;
    height:45px;
    border:none;
    box-shadow: 3px 4px 4px #ccc;
    border-radius:5px;
  }
</style>