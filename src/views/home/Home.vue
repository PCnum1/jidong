<template>
  <div class="wrapper">
    <StaticPart/>
    <Nearby/>
  </div>
  <Docker/>
</template>

<script>
import Docker from '@/components/Docker.vue'
import StaticPart from '@/views/home/StaticPart.vue'
import Nearby from '@/views/home/Nearby.vue'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>
<style lang="scss" scoped>
@import './../../style/viriables.scss';
@import './../../style/mixins.scss';
.wrapper{
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .3rem .18rem;

}
</style>
