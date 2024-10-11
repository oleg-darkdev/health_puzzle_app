<script>
  export let boardgame;
</script>

<div>
  <div class="">
    <img src="{boardgame.logo}" class='h-16 w-auto' alt="">
  </div>
  <div class="work_text">
    <div class="textweight_medium">
      <div class="text_size_m">{boardgame.title}</div>
    </div>
    {#each boardgame.desc as desc}
      <p class="text_size_s">
        {desc}
      </p>
    {/each}
  </div>
</div>

  <style>

  </style>
