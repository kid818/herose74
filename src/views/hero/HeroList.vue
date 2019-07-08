<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender}}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//英雄列表
//1发送axios请求获取数据
import axios from "axios";
//2渲染列表
export default {
  data() {
    return {
      //存储获取到的列表数据
      list: []
    };
  },
  mounted() {
    //组件加载完毕后发送请求
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .get("http://localhost:3000/heroes")
        .then(res => {
          // console.log(res)
          const { data, status } = res;
          if (status === 200) {
            //获取成功
            this.list = data;
            // console.log(this.list)
          } else {
            //获取失败
            alert("获取失败");
          }
        })
        .catch(err => {
          alert("服务器异常" + err);
        });
    }
  }
};
</script>

<style>
</style>
