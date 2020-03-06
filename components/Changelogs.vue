<template>
  <div class="container-fluid">
    <div class="text-center">
      <div>
        <h2 class="font-weight-bolder">CHANGELOGS STYLES</h2>
      </div>
      <div>
        <b-form-select class="col-lg-3" size="lg" v-model="selectedStyle" :options="options"></b-form-select>
      </div>
    </div>
    <div class="container">
      <div v-html="changelogs" class="text-justify" :class="selectedStyle"></div>
    </div>
  </div>
</template>
<script>
import Changelogs from "../js/remarkable";
export default {
  data: function() {
    return {
      changelogs: Changelogs,
      selectedStyle: "foghorn",
      options: [
        "default",
        "avenir_white",
        "foghorn",
        "screen",
        "swiss",
        "markdown_alt",
        "markdown",
        "markdown1",
        "markdown2",
        "markdown3",
        "markdown4",
        "markdown5",
        "markdown6",
        "markdown7",
        "markdown8",
        "markdown9",
        "markdown10"
      ]
    };
  }
};
</script>

<style lang="scss">
.avenir_white {
  @import "~/assets/markdowncss/avenir_white.scss";
}
.foghorn {
  @import "~/assets/markdowncss/foghorn.scss";
}
.screen {
  @import "~/assets/markdowncss/screen.scss";
}
.swiss {
  @import "~/assets/markdowncss/swiss.scss";
}
.markdown_alt {
  @import "~/assets/markdowncss/markdown_alt.scss";
}
.markdown {
  @import "~/assets/markdowncss/markdown.scss";
}
.markdown1 {
  @import "~/assets/markdowncss/markdown1.scss";
}
.markdown2 {
  @import "~/assets/markdowncss/markdown2.scss";
}
.markdown3 {
  @import "~/assets/markdowncss/markdown3.scss";
}
.markdown4 {
  @import "~/assets/markdowncss/markdown4.scss";
}
.markdown5 {
  @import "~/assets/markdowncss/markdown5.scss";
}
.markdown6 {
  @import "~/assets/markdowncss/markdown6.scss";
}
.markdown7 {
  @import "~/assets/markdowncss/markdown7.scss";
}
.markdown8 {
  @import "~/assets/markdowncss/markdown8.scss";
}
.markdown9 {
  @import "~/assets/markdowncss/markdown9.scss";
  background-color: #110f14;
}
.markdown10 {
  @import "~/assets/markdowncss/markdown10.scss";
}
</style>