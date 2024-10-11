<script>
  import { IslandList, IslandDesc } from '$lib/shared';

  export let island;
</script>


 <div id="" class="second-island-wrap programme_single">
  <div class="chip programme">
    <div class="icon-embed-1 w-embed">
      <img src="/images/icons/{island.icon}" class='h-10 w-10' alt="">
    </div>
    <div>#2 Scenariusz</div>
  </div>


  <IslandDesc title={island.title} desc={island.desc}/>

  <IslandList items={island.items}/>

  <div class="programme_single-bg w-embed">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 339 339" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
      <circle cx="169.5" cy="169.5" r="169.5" fill="url(#paint0_linear_4023_653)"></circle>
      <defs>
        <linearGradient id="paint0_linear_4023_653" x1="164.351" y1="5.3548" x2="268.358" y2="295.956" gradientUnits="userSpaceOnUse">
          <stop offset="0.02" stop-color="#30F9D5"></stop>
          <stop offset="1" stop-color="#94DFFF"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</div>


<style>
@media screen and (max-width: 991px) {
  .second-island-wrap {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }
}
.second-island-wrap {
  grid-area: 2/2/3/3;
}
</style>
