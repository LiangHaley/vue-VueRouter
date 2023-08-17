<template>
    <div>login
         <RouterDrawer
      :visible="visible"
      :path="{ name: 'child' }"
      size="50%"
      title="drawer comps"
    ></RouterDrawer>
      <button @click="show()">open drawer</button>
    </div>
   
    
</template>
<script>
import RouterDrawer from './RouterView.vue'
export default{
    name:'LoginView',
    data(){
        return{
            visible:false
        }
    },
    components:{
        RouterDrawer
    },
    methods:{
        show(){
             this.$router.push('/home');
            this.visible = !this.visible
        }
    }
}
</script>
