<template>
  <div class="m-5 drag">
    <div ref="draggable" class="indrag"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "/plain/plain-draggable.min.js"
        }
      ]
    };
  },
  mounted() {
    if (process.client) {
      setTimeout(() => {
        const draggable = new PlainDraggable(this.$refs.draggable);
      }, 100);
      // draggable.snap = { step: 5 };
    }
  }
};
</script>

<style lang="scss" scoped>
.drag {
  background-color: cadetblue;
  height: 20vh;
  width: 80vw;
  .indrag {
    height: 100%;
    width: 20%;
    background-color: coral;
  }
}
</style>