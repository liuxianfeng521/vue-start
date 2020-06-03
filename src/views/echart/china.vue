<template>
  <div class="content">
    <div style="flex: 1">
      <China />
    </div>
  </div>
</template>

<script>
import China from '../../components/Charts/china'
export default {
  name: 'Chinaa',
  components: {
    China
  }
}
</script>

<style scoped lang="scss">
.content{
  min-height: calc(100vh - 84px);
  height: 100%;
  display: flex;
}
</style>
