<script>
  export let data;
</script>

<div class="cta_single {data.cssClass}">
  <div class="cta_text">
    <div class="cta_text-hero">{data.title}</div>
    <div class="size-s">{data.subTitle}</div>
  </div>
  <div class="cta_price">{data.price} <span class="textstyle_outlined">$</span>
  </div>
  <div class="cta_list">
    {#each data.features as feature}
      <div class="text_size_s">{feature}</div>
    {/each}
  </div>
  <a href="#" class="button pricing w-button">Lorem Ipsum is simply</a>
</div>


<style>

</style>
