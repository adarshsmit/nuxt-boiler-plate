<template>
  <div id="getstarted">
    <section class="_connect_with_us mb_50 mb_mob_30">
      <!-- divider starts here -->
      <div class="divider mb_100 my_mob_30"></div>
      <!-- divider ends here -->
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="d-lg-block d-none"></div>
          </div>
          <div class="col-12 col-lg-9">
            <!-- section head starts here -->
            <div class="section_head">
              <div class="heading text-lg-left text-center">
                Ready to get started?
                <span
                  class="subtitle d-lg-block"
                >Connect with our technology consultants</span>
              </div>
            </div>
            <!-- section head ends here -->
            <!-- ctas start -->
            <div class="d-lg-flex align-items-center">
              <div class="mb-2 mb-lg-0 mr-lg-4">
                <cta
                  :cta="1"
                  altCta1="alt_cta1"
                  thickBorder="alt_border"
                  bigFont="cta_alt_font"
                  content="Let Us Contact You"
                />
              </div>
              <div>
                <cta
                  :cta="0"
                  altCta1="alt_cta1"
                  bigFont="cta_alt_font"
                  content="Find A Local Partner"
                />
              </div>
            </div>
            <!-- ctas ends -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>