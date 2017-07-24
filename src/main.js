import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Home  from './views/Home/index.vue'
import One1  from './views/One1/index.vue'
import Five5  from './views/five5/index.vue'
import Six6  from './views/Six6/index.vue'
import Seven7  from './views/Seven7/index.vue'
import reset from './css/reset.css'
import axios from 'axios'
       
Vue.use(VueRouter);
Vue.use(Vuex)
Vue.prototype.$http=axios;

const routes=[
	  {
        path:"/",
        redirect:{
        	name:"Home"
        }
	  },
      {
      	name:"Home",
      	path:"/Home",
      	component:Home
      },
      {
      	name:"One1",
      	path:"/One1",
      	component:One1
      },
      {
        name:"Five5",
        path:"/Five5",
        component:Five5
      },
      {
        name:"Six6",
        path:"/Six6",
        component:Six6
      },

      {
        name:"Seven7",
        path:"/Seven7",
        component:Seven7
      }
]

let router=new VueRouter({
	routes,
})

const store=new Vuex.Store({
    state:{
      data:[],
      items:[]
    }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  data:{
     
  },
  created:function(){
     	this.$http.get("../server/data.json").then((data)=>{
        		store.state.data=data.data.list
           store.state.items=data.data.list2
    })
  }
})



