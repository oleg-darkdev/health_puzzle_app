<script>
  const goals = [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  ]
</script>

<section class="section">
  <div class="w-layout-blockcontainer container w-container">
    <div class="comp_goals">
      <div  class="goals_bg w-embed">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 984 577" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
          <ellipse cx="492" cy="288.5" rx="492" ry="288.5" fill="url(#paint0_linear_4009_67087)"></ellipse>
          <defs>
            <linearGradient id="paint0_linear_4009_67087" x1="835.931" y1="105.509" x2="463.647" y2="713.661" gradientUnits="userSpaceOnUse">
              <stop stop-color="#94FFDF"></stop>
              <stop offset="1" stop-color="#64F930"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="section-title">
        <div class="text_heading_m">Funkcje narzędzia</div>
        <div class="flex-v _1">
          <div class="text_size_m">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry:
          </div>
        </div>
      </div>
      <div class="layout_grid2">
        <div  class="flex-v _0-5">
          {#each goals as goal, number}
          <div class="goals_card">
            <div class="goals_card_num">0{number + 1}</div>
            <div class="text_size_m">{goal}</div>
            <div class="goals-card_glow"></div>
          </div>
          {/each}
        </div>
        <img src="/images/health_petal_green.webp" loading="lazy" width="Auto" height="Auto" alt=""  class="image_square">
      </div>
      <div id="goals" class="anchor"></div>
    </div>
  </div>
</section>


<style>

</style>
