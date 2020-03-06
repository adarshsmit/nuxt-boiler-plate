<template>
  <div :style="style" ref="lavContainer" data-bm-renderer="svg" v-if="up"></div>
</template>

<script>
let lottieWeb;
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    loop: Boolean,
    autoplay: {
      type: Boolean,
      default: true
    },
    settings: Object,
    height: Number,
    width: Number
  },
  data() {
    return {
      animation: null,
      up: false
    };
  },
  computed: {
    style() {
      let style = {};
      if (this.width) {
        style.width = this.width + "px";
      }
      if (this.height) {
        style.height = this.height + "px";
      }
      return style;
    }
  },
  methods: {
    play() {
      if (this.animation) {
        this.animation.play();
      }
    },
    pause() {
      if (this.animation) {
        this.animation.pause();
      }
    },
    stop() {
      if (this.animation) {
        this.animation.stop();
      }
    },
    setSpeed(val) {
      if (this.animation) {
        this.animation.setSpeed(val);
      }
    }
  },
  mounted() {
    if (process.browser) {
      lottieWeb = require("lottie-web/build/player/lottie_light.js");
    }
    this.up = true;
    this.$nextTick(() => {
      if (lottieWeb) {
        this.animation = lottieWeb.loadAnimation({
          container: this.$refs.lavContainer,
          renderer: "svg",
          loop: this.loop,
          autoplay: this.autoplay,
          animationData: this.data,
          rendererSettings: this.settings
        });
      }
    });
  }
};
</script>