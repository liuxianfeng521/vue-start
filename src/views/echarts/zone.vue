<template>
  <div class="content">
    <div style="flex: 1">
      <zoneMap />
    </div>
  </div>
</template>

<script>
import zoneMap from '../../components/Charts/zone-map'
export default {
  name: 'Zone',
  components: {
    zoneMap
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
