<script>
  const targetAudience = [
    {
      title: "Każdy kto jest zainteresowany rozwijaniem umiejętności uważności, pogłębianiem zrozumienia zasad uważności i metod pracy z nią.",
      icon: "team-members.svg"
    },
    {
      title: "Dla menedżerów każdego poziomu i właścicieli firm",
      icon: "managers.svg"
    },
    {
      title: "Dla dyrektorów i specjalistów HR",
      icon: "hr.svg"
    },
    {
      title: "Psychologowie i trenerzy",
      icon: "psychologists.svg"
    }
  ];
</script>

<section class="section">
  <div class="w-layout-blockcontainer container w-container">
    <div class="comp_goals">
      <div class="goals_bg w-embed">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 985 577" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
          <ellipse cx="492.533" cy="288.5" rx="492" ry="288.5" fill="url(#paint0_linear_4007_67020)"></ellipse>
          <defs>
            <linearGradient id="paint0_linear_4007_67020" x1="182.569" y1="-88.4627" x2="667.552" y2="797.947" gradientUnits="userSpaceOnUse">
              <stop offset="0.02" stop-color="#30F9D5"></stop>
              <stop offset="0.51046" stop-color="#94E5FF"></stop>
              <stop offset="0.96" stop-color="#94CCFF"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="section-title">
        <div class="text_heading_m">Do kogo jest skierowana ta gra?</div>
      </div>
      <div class="layout_grid2">
        <img src="images/health_petal.webp" loading="lazy" width="Auto" height="Auto" alt="health petal"  class="image_square">
        <div class="flex-v _0-5">
          {#each targetAudience as {title, icon}}
          <div class="goals_card">
            <div class="goals_card_icon w-embed">
              <img src="/images/icons/{icon}" class='h-20 w-20' alt="">
            </div>
            <div class="text_size_m">{title}</div>
            <div class="goals-card_glow cyan"></div>
          </div>
          {/each}
      </div>
      <div id="target-audience" class="anchor"></div>
    </div>
  </div>
</section>


<style>

</style>
