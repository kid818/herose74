<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
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
      <button @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
//1.绑定文本框
//2.点击按钮发送请求
//3.添加成功，跳转会列表
export default {
  data(){
    return {
      //封装表单数据
      formData: {
        name:'',
        gender:'男'
      }
    }
  },
  methods:{
    add(){
      //点击按钮发送请求，添加
      this.axios
        .post('heroes',this.formData)
        .then((res) => {
          const status = res.status
          if(status === 201){
            //添加成功
            //添加成功，跳转回列表
            this.$router.push('/hero')
          }else {
            alert('添加失败')
          }
        })
    }
  }
};
</script>

<style>
</style>
