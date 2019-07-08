<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control" v-model="formData.name" id="txtName" placeholder="姓名" />
        <div class="form-group">
          <label for="exampleInputPassword1">性别</label>
          <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->
          <select id="gender" class="form-control" v-model="formData.gender">
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
      </div>
      <button @click.prevent="update" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
//1.组件中获取动态路由中的id ===$route.params.id
//2.路由规则设置props:true,路由自动把id传递给组件
//3.组件中接受props：[‘id ’]
import axios from 'axios'
export default {
  props:['id'],
  data(){
    return {
      //封装表单数据
      formData: {
        name:'',
        gender:'男'
      }
    }
  },
  mounted(){
    this.getDataById()
  },
  methods:{
   //根据id获取数据
   getDataById(){
     axios
      .get(`http://localhost:3000/heroes/${this.id}`)
      .then((res) => {
        const {data,status} = res
        if(status === 200){
          //获取成功
          this.formData = data        
          }else {
          alert('获取失败')
        }
      })
   },
   //实现更新功能
   update(){
     axios
      .put(`http://localhost:3000/heroes/${this.id}`,this.formData)
      .then((res) => {
        const status = res.status
        if(status === 200){
          //修改成功
          //跳转回列表页
          this.$router.push('/hero')
        }else{
          //修改成功
          alert('修改失败')
        }
      })
   }
  }

};
</script>

<style>
</style>
