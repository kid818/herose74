<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">添加</a> -->
    <router-link class="btn btn-success"  :to="{name:'heroadd'}">添加</router-link>
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
              <a href="edit.html">编辑</a>
              &nbsp;&nbsp;
              <a href="javascript:" @click="del(item.id)">删除</a>
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
    //渲染列表
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
    },
    //删除
    del(id) {
      //1.弹出确认对话框
      if (!confirm("确认删除该英雄吗？")) {
        return false
      }
      //2.发送请求
      axios
        .delete(`http://localhost:3000/heroes/${id}`)
        .then((res) => {
          const status = res.status
          if (status === 200) {
            //删除成功，重新加载列表
            this.loadData();
          } else {
            //删除失败
            alert("删除失败");
          }
        })
        .catch(err => {
          alert("服务器异常" + err);
        });
      //3.删除成功，重新加载列表
    }
  }
};
</script>

<style>
</style>
