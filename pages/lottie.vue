<template>
  <div id="app" v-if="up">
    <lottiec
      class="lottie"
      ref="lottie"
      loop
      autoplay
      :data="animationData"
      :height="400"
      :width="400"
    ></lottiec>
    <lottiec
      class="lottie"
      ref="lottie"
      loop
      autoplay
      :data="animationData2"
      :height="400"
      :width="400"
    ></lottiec>

    <div>
      <p>Speed: x{{speed}}</p>
      <input
        type="range"
        value="1"
        min="0"
        max="3"
        step="0.5"
        v-on:change="onSpeedChange"
        v-model="speed"
      />
    </div>
    <button v-on:click="stop">stop</button>
    <button v-on:click="pause">pause</button>
    <button v-on:click="play">play</button>
  </div>
</template>

<script>
import animationData from "~/assets/pinjump.json";
import animationData2 from "~/assets/loader/data.json";

export default {
  name: "app",
  components: {},
  data() {
    return {
      up: false,
      speed: 1,
      animationData,
      animationData2: animationData2
    };
  },
  computed: {
    lottie() {
      return this.$refs.lottie;
    }
  },
  methods: {
    stop() {
      this.lottie.stop();
    },

    play() {
      this.lottie.play();
    },

    pause() {
      this.lottie.pause();
    },

    onSpeedChange: function() {
      this.lottie.setSpeed(this.speed);
    }
  },
  mounted() {
    this.up = true;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.lottie {
  margin: 0 auto;
}
</style>
