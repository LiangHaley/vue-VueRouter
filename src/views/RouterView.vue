<template>
  <div
    :visible="visible"
    v-bind="$attrs"
    :before-close="handleClose"
  >
  <span class="childurl">{{childurl}}</span>
    <router-view />
  </div>
</template>
<script>
// import  {routes}  from "../router/index";
import VueRouter from "vue-router";

export default {
  name: "router-drawer",
  props: {
    path: {
      type: Object,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data(){
    return {
      childurl:''
    }
  },
   // 此处实例化一个新的router来配合当前页面的router-view
  router: new VueRouter({
    mode: "abstract",
    base: "/",
    // routes
    routes:[{ 
    path: '/child', 
    name:'child', 
    // @ts-ignore
    component: () => import('../views/ChidRender.vue')
    },{
    path: '/children', 
    name:'children', 
    // @ts-ignore
    component: () => import('../views/ChildrenHome.vue')
  }],
  }),
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
  mounted() {
    console.log("drawer router", this.$router);
    this.childurl =  location.href;
    this.$router.push(this.path);
  },
};
</script>
<style scoped>
.childurl{
  display: block;
  width: 200px;
  height:25px;
  background: #ccc;
  border-radius: 5px;
}
</style>