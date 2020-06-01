<template>
  <div>
    <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"
        },
        {
          src: "https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"
        },
        {
          src:
            "https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
        }
      ]
    };
  },
  mounted() {
    $(function() {
      $('input[name="daterange"]').daterangepicker(
        {
          opens: "left"
        },
        function(start, end, label) {
          console.log(
            "A new date selection was made: " +
              start.format("YYYY-MM-DD") +
              " to " +
              end.format("YYYY-MM-DD")
          );
        }
      );
    });
  }
};
</script>

<style lang="scss" scoped>
</style>