<script>
  export let navigation, otherBoardgames;
</script>

<section class="section">
  <div class="w-layout-blockcontainer container w-container">
    <div data-w-id="5e9541ff-22ba-5272-a979-a6b2301e7951" style="" class="comp_footer">
      <div class="footer_wrapper">
        <div class="newsletter">
          <div class="footer_logo">
            <a href="#" class="nav_logo w-nav-brand">
              <img src="/images/logo.svg" class='h-20 w-64' alt="">
              <!-- <div class="logo">Health <span class="textstyle_spaciousblackit">puzzle</span>
              </div> -->
            </a>
            <!-- <div class="text_size_s">Mindful Leadership</div> -->
          </div>
        </div>
        <div class="footer_links">
          <div class="footer_links-col">
            <div class="footer_links-colname h-8">Other boardgames
            </div>
              <div class="footer_links-list">
                {#each otherBoardgames.slice(0, 3) as {title, logo, link}}
                <!-- <a href="{link}" class="button w-button">{title}</a> -->
                <a href="{link}" class="button w-button">
                  <img src="{logo}" class='h-14' alt="">
                </a>

                {/each}
            </div>
          </div>
          <div class="footer_links-col">
            <div class="footer_links-colname h-8">
            </div>
              <div class="footer_links-list">
                {#each otherBoardgames.slice(0, 3) as {title, logo, link}}
                <!-- <a href="{link}" class="button w-button">{title}</a> -->
                <a href="{link}" class="button w-button">
                  <img src="{logo}" class='h-14' alt="">
                </a>

                {/each}
            </div>
          </div>
          <div class="footer_links-col">
            <div class="footer_links-colname">Content <br>
            </div>
            <div class="footer_links-list">
              {#each navigation as {title, link}}
              <a href="{link}" class="button w-button">{title}</a>
              {/each}
            </div>
          </div>


          <div class="footer_links-col">
            <div class="footer_links-colname">
              <!-- Get in touch -->
              kontakt
            </div>
            <div class="">
              <a href="https://44games.vercel.app/" class='-mb-8' target="_blank">
                <img src="/images/logos/44games.svg" class='h-12  w-auto' alt="44Games logo">
              </a>

            </div>
            <div class="footer_links-list">
              <a href="#" class="button w-button">Instagram</a>
              <a href="#" class="button w-button">Facebook</a>
              <a href="#" class="button w-button">Linkedin</a>
            </div>




          </div>
        </div>
      </div>
      <div class="footer_legal">
        <div class="text_size_s">
          <p>© 2024-2025 <a href="https://44games.vercel.app/" target="_blank">44games</a>. All rights reserved.  </p>
          <p>Development by <a href="/" target="_blank">darkdev</a></p>
        </div>
      </div>

      <div class="footer_bg w-embed">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1613 1005" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
          <circle cx="1142.28" cy="470.319" r="470" fill="url(#paint0_linear_4046_299)"></circle>
          <circle cx="402.776" cy="552.819" r="402.5" fill="url(#paint1_linear_4046_299)"></circle>
          <circle cx="735.776" cy="592.819" r="411.5" fill="url(#paint2_linear_4046_299)"></circle>
          <defs>
            <linearGradient id="paint0_linear_4046_299" x1="1128" y1="15.1675" x2="1416.4" y2="820.963" gradientUnits="userSpaceOnUse">
              <stop offset="0.02" stop-color="#30F9ED"></stop>
              <stop offset="1" stop-color="#94DFFF"></stop>
              <stop offset="1" stop-color="#94D2FF"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_4046_299" x1="390.55" y1="163.035" x2="637.527" y2="853.105" gradientUnits="userSpaceOnUse">
              <stop stop-color="#30F9D5"></stop>
              <stop offset="1" stop-color="#94FFB8"></stop>
            </linearGradient>
            <linearGradient id="paint2_linear_4046_299" x1="1023.43" y1="331.811" x2="427.739" y2="902.424" gradientUnits="userSpaceOnUse">
              <stop stop-color="#64F930"></stop>
              <stop offset="0.0001" stop-color="#94FFDF"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</section>


<style>

</style>
