<template>
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <!-- <li class="active"><a href="#">英雄管理 <span class="sr-only">(current)</span></a></li>
          <li><a href="#">武器管理</a></li>
          <li><a href="#">装备管理</a></li> -->
          <router-link to="/hero" tag="li" >
            <a>英雄管理</a>
          </router-link>
          <router-link to="/weapon" tag="li">
            <a>武器管理</a>
          </router-link>
          <router-link to="/equip" tag="li">
            <a>装备管理</a>
          </router-link>
        </ul>
      </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
