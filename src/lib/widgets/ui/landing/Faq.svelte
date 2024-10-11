<script>
  import {
    faq
  } from '$lib/shared';

  import { SmallFaqCard } from '$lib/entities';
</script>

<!-- <section class="section">
    <div class="w-layout-blockcontainer container w-container">
        <div class="comp_usp">
            <div class="section-title">
                <div class="text_heading_m">FAQ</div>
            </div>
            <div class="grid-cols-2 grid faq_list">
                {#each faq as {q, a}}
                <div  class="faq_single solid">
                    <div class="faq_single_question">
                        <div class="text_size_m">{q}</div>
                        <div class="faq_single-icon">
                            <div class="icon-embed-1-5 w-embed">
                                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style="" class="faq_single_answer">
                        {#each a as answer}
                        <p class="text_size_s">
                            {answer}
                        </p>
                        {/each}
                    </div>
                </div>
                {/each}

            </div>
            <div id="faq" class="anchor"></div>
        </div>
    </div>
</section> -->

<section class="section">
  <div class="w-layout-blockcontainer container w-container">
    <div class="comp_usp">
      <div class="section-title ">
        <!-- Inne gry planszowe -->
        <div class="text_heading_m">F.A.Q.</div>
        <!-- <div class="flex-v _1">
          <div class="text_size_m">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </div> -->
      </div>
      <div class="w-layout-grid faq_list usp">
        {#each faq as faqData}
          <SmallFaqCard {faqData}/>
        {/each}
      </div>
      <div id="faq" class="anchor"></div>
    </div>
  </div>
  <div style="" class="faq_bg w-embed">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 2549 2317" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
      <ellipse cx="673.089" cy="805.5" rx="518.117" ry="517.471" transform="rotate(175.019 673.089 805.5)" fill="url(#paint0_linear_4021_245)"></ellipse>
      <ellipse cx="1987.09" cy="922.76" rx="518.117" ry="517.471" transform="rotate(175.019 1987.09 922.76)" fill="url(#paint1_linear_4021_245)"></ellipse>
      <circle cx="501.5" cy="1570.5" r="501.5" fill="url(#paint2_linear_4021_245)"></circle>
      <ellipse cx="1412.84" cy="549.378" rx="573.264" ry="501.5" transform="rotate(175.019 1412.84 549.378)" fill="url(#paint3_linear_4021_245)"></ellipse>
      <ellipse cx="1317.5" cy="1572" rx="746.5" ry="745" fill="url(#paint4_linear_4021_245)"></ellipse>
      <ellipse cx="1317.5" cy="1572" rx="746.5" ry="745" fill="url(#paint5_linear_4021_245)"></ellipse>
      <defs>
        <linearGradient id="paint0_linear_4021_245" x1="657.35" y1="304.377" x2="974.568" y2="1191.81" gradientUnits="userSpaceOnUse">
          <stop offset="0.02" stop-color="#30F9B1"></stop>
          <stop offset="0.515" stop-color="#30F9D5"></stop>
          <stop offset="1" stop-color="#94DFFF"></stop>
        </linearGradient>
        <linearGradient id="paint1_linear_4021_245" x1="1971.35" y1="421.637" x2="2288.57" y2="1309.07" gradientUnits="userSpaceOnUse">
          <stop offset="0.02" stop-color="#30F9D5"></stop>
          <stop offset="1" stop-color="#94DFFF"></stop>
        </linearGradient>
        <linearGradient id="paint2_linear_4021_245" x1="486.266" y1="1084.84" x2="793.991" y2="1944.64" gradientUnits="userSpaceOnUse">
          <stop stop-color="#94FFB8"></stop>
          <stop offset="1" stop-color="#30F9D5"></stop>
        </linearGradient>
        <linearGradient id="paint3_linear_4021_245" x1="1395.42" y1="63.7209" x2="1672" y2="947.063" gradientUnits="userSpaceOnUse">
          <stop stop-color="#94FFB8"></stop>
          <stop offset="1" stop-color="#30F9D5"></stop>
        </linearGradient>
        <linearGradient id="paint4_linear_4021_245" x1="1839.34" y1="1099.46" x2="760.773" y2="2134.69" gradientUnits="userSpaceOnUse">
          <stop stop-color="#94FFDF"></stop>
          <stop offset="1" stop-color="#64F930"></stop>
        </linearGradient>
        <linearGradient id="paint5_linear_4021_245" x1="1839.34" y1="1099.46" x2="760.773" y2="2134.69" gradientUnits="userSpaceOnUse">
          <stop stop-color="#94F9FF"></stop>
          <stop offset="1" stop-color="#30F975"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>

<style>

</style>
