<template>
  <div class="box">
    <div class="top">
      <el-steps :active="active" finish-status="success" style="width:600px" align-center>
        <el-step title="上传图片" />
        <el-step title="预览图片" />
      </el-steps>
    </div>
    <div class="middle">
      <img v-if="!isShow1" :src="imageUrl" class="avatar">
      <el-upload
        v-if="isShow1"
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :on-success="handleAvatarSuccess"
      >
        <i
          class="el-icon-upload"
        />
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb,上传成功后可点击预览按钮预览图片
          </div>
        </div>
      </el-upload>
    </div>
    <div class="footer">
      <el-button
        type="success"
        :disabled="previewDsable"
        @click="preview"
      >预览</el-button>
      <el-button @click="reUpload">重新上传</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow1: true,
      isShow2: false,
      previewDsable: true,
      imageUrl: '',
      active: 0
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.previewDsable = false
      if (this.active++ > 0) this.active = 1
    },
    preview() {
      this.isShow2 = true
      this.isShow1 = false
      if (this.active++ > 0) this.active = 2
    },
    reUpload() {
      this.isShow2 = false
      this.isShow1 = true
      this.previewDsable = true
      this.active = 0
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
