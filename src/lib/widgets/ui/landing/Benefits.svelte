<script>
  import {TransformationTable} from '$lib/entities';

  const benefits = [
    {
      icon: '/images/icons/battery.svg',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: '/images/icons/heart.svg',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: '/images/icons/human.svg',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: '/images/icons/infinity.svg',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: '/images/icons/smile.svg',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: '/images/icons/star.svg',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: '/images/icons/sun.svg',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: '/images/icons/tree.svg',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ]
</script>

<section class="section">
  <div class="w-layout-blockcontainer container w-container">
    <div class="comp_results">
      <div class="section-title">
        <div class="text_heading_m">
          Zysk na koniec rozgrywki
        </div>
      </div>
      <div class="layout_grid2">
        {#each benefits as benefit}
        <div class="results_card">
          <div class="results_card_icon w-embed">
            <img src="{benefit.icon}" class='h-24' alt="">
          </div>
          <div class="text_size_m">{benefit.text}</div>
        </div>
        {/each}
      </div>

      <TransformationTable />
      <!-- <div id="results" class="anchor"></div> -->
    </div>
  </div>
</section>


<style></style>
