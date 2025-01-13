<template>
  <div class="nav-bar van-hairline--top">
    <ul class="nav-list">
      <!--      <li>
      <router-link  class="nav-list-item active" to="home">-->
      <!--        <i class="nbicon nblvsefenkaicankaoxianban-1"></i>-->
      <!--        <span>首页</span>-->
      <!--      </router-link>
      </li>-->
      <li>
        <router-link class="nav-list-item" to="hw">
          <i class="nbicon nbfenlei"></i>
          <span>HelloWorld</span>
        </router-link>
      </li>
      <li>
        <router-link class="nav-list-item" to="mbyy">
          <!--        <i><van-icon  name="shopping-cart-o" :badge="!cart.count ? '' : cart.count" /></i>-->
          <span>模板引用</span>
        </router-link>
      </li>
      <li>
        <router-link class="nav-list-item" to="ztq">
          <i class="nbicon nblvsefenkaicankaoxianban-"></i>
          <span>侦听器</span>
        </router-link>
      </li>
      <li>
        <router-link class="nav-list-item" to="/jssx">go to jisuanshuxing</router-link>
      </li>

<!--    </ul>-->
<!--    <ul class="nav-list">-->
      <li>
        <router-link class="nav-list-item" to="/mbyf">go to 模板语法</router-link>
      </li>

      <li>
        <router-link class="nav-list-item" to="/tjxr">go to 条件渲染</router-link>
      </li>

      <li>
        <router-link class="nav-list-item" to="/BaseCom">go to BaseCom</router-link>
      </li>

      <li>
        <router-link class="nav-list-item" to="/ztq2">go to 侦听器2</router-link>
      </li>

      <li>
        <router-link class="nav-list-item" to="/blog">博客</router-link>
      </li>
<!--    </ul>-->
<!--    <ul class="nav-list">-->
      <li>
        <router-link class="nav-list-item" to="/alert">告警</router-link>
      </li>
      <li>
        <router-link class="nav-list-item" to="/dtzj">动态组件</router-link>
      </li>
      <li>
        <router-link class="nav-list-item" to="/innerComp">内置组件</router-link>
      </li>
      <li>
        <router-link class="nav-list-item" to="/zhshs">组合式函数</router-link>
      </li>
      <li>
        <router-link class="nav-list-item" to="/StuQueryTest">查询测试</router-link>
      </li>
      <li>
        <router-link class="nav-list-item" to="/lbxr">列表渲染</router-link>
      </li>
      <li>
        <router-link class="nav-list-item" to="/sqlite3">sqlite3</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="less" scoped>

@import '../common/style/mixin';

.nav-list {

    //width: 1010px;
    width: 100%;

  .nav-list-item {
    width: 20%;   /*如果显示三列 则width改为70px*/
    height: 30px;
    float: left;
    display: block;
  }
}

/*.nav-list {
  width: 100%;
  .fj();
  flex-direction: row;
  padding: 2px;
  margin: 1px;
  //border: 1px solid #000;

  .nav-list-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    color: #666;

    &.router-link-active {
      color: @primary;
    }

    i {
      text-align: center;
      font-size: 22px;
    }

    span {
      font-size: 16px;
    }

    .van-icon-shopping-cart-o {
      margin: 0 auto;
      margin-bottom: 2px;
    }
  }
}*/
</style>