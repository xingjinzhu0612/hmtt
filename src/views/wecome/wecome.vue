<template>
  <div class="w-container">
    <img src="../../assets/images/welcome.jpg" alt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.w-container {
  // width: 100%;
  // height: 100%;
  position: relative;
  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
}
</style>
