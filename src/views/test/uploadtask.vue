<template>
  <div class="box">
    <div class="top"><!-- 这里用了步骤条组件 steps -->
      <el-steps :active="active" finish-status="success" style="width:600px" align-center>
        <el-step title="上传图片" />
        <el-step title="预览图片" />
      </el-steps>
    </div>
    <div class="middle">
      <img v-show="active === 2" :preview-src-list="imageUrl" :src="imageUrl" class="avatar">

      <el-upload
        v-show="active === 0|| active === 1"
        class="upload-demo"
        drag
        :plain="true"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :on-success="handleAvatarSuccess"
      > <!-- 这里引用了文件上传成功时的钩子函数 on-success -->
        <i
          class="el-icon-upload"
        /><!-- 上传图标 -->
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb,上传成功后可点击预览按钮预览图片
          </div>
        </div>
      </el-upload>
    </div>
    <div class="footer">
      <el-button
        v-show="active === 0|| active === 1"
        type="success"
        :disabled="disabled"
        @click="preview"
      >预览</el-button><!-- 添加点击按钮执行预览图片业务 -->
      <el-button v-show="active == 2 " @click="reUpload">重新上传</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
      active: 0,
      disabled: true
    }
  },
  methods: {
    // 文件上传成功时的钩子函数执行的操作
    handleAvatarSuccess(res, file) {
      this.disabled = false
      // Message 消息提示
      this.$message({
        message: '上传成功，点击预览按钮预览图片',
        type: 'success'
      })
      this.imageUrl = URL.createObjectURL(file.raw)
      if (this.active++ > 0) this.active = 1
    },
    preview() {
      if (this.active++ > 0) this.active = 2 // 点击按钮预览图片
    },
    reUpload() {
      this.disabled = true
      this.active = 0 // 点击按钮回到初始状态
    }
  }
}
</script>
<style lang="scss" scoped>
  .box{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 88vh;
    .top{
      height: 150px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .middle{
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .footer{
      height: 50px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 16px;
    }
  }

</style>
