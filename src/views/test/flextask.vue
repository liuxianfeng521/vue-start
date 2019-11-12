<template>
  <div class="box">
    <dix class="top">上面
    </dix>
    <div class="body">
      <div class="center">中间</div>
      <div class="left">左面</div>
      <div class="right">右面</div>
    </div>

    <div class="footer">下面</div>

  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  .box{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-content: center;
    text-align: center;
    .top{
      height: 100px;
      line-height:100px
    }
    .body {
      display: flex;
      flex: 1;
      line-height: 500px;
      .left {
        order: -1;
        flex: 0 0 20em;
      }

      .center {
        flex: 1;
        background: #24da70;
      }

      .right {
        flex: 0 0 20em;
      }
    }
    .footer{
      height: 100px;
      line-height:100px
    }

  }

</style>
