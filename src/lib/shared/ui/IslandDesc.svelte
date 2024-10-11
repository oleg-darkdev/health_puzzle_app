<script>
  export let title, desc;
</script>

<div class="programme_single_text">
  <div class="textweight_medium">
    <div class="text_size_m">{title}</div>
  </div>
  {#each desc as desc}
  <p class="text_size_s">
    {desc}
  </p>
  {/each}
</div>


<style>

</style>
