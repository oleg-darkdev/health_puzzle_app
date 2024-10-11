<script>
  import {Stats} from '$lib/widgets';
</script>

<section class="section">
    <div class="w-layout-blockcontainer container w-container">
        <div class="comp_hero">
            <div class="hero_wrapper">
                <div class="w-full">
                  <div class="chip ghost max-w-sm">
                    <div class='mx-auto'>Dziennik zdrowotny dla zespołu</div>
                </div></div>
                <div class="hero_title">
                    <div class="hero_titletext">Zbadaj zdrowie -</div>
                    <div class="hero_titletext textstyle_spaciousblackit">i ułóż puzzle</div>
                </div>
                <div  style="" class="hero_body">
                    <div class="text_size_m">
                      Zanurz się w procesie badania różnych aspektów funkcjonowania zespołu, identyfikując mocne i słabe strony oraz znajdując możliwości poprawy.
                    </div>
                </div>
                <a style="" href="/app" target="_blank" class="button filled w-button">Rozpocznij grę</a>
            </div>

            <Stats />

            <div style="" class="hero_bg">
                <div class="hero_bg-blur w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1278 720" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <ellipse cx="409.5" cy="360" rx="409.5" ry="360" fill="url(#paint0_linear_4046_305)"></ellipse>
                        <ellipse cx="868.5" cy="360" rx="409.5" ry="360" fill="url(#paint1_linear_4046_305)"></ellipse>
                        <defs>
                            <linearGradient id="paint0_linear_4046_305" x1="397.061" y1="11.373" x2="596.399" y2="644.919" gradientUnits="userSpaceOnUse">
                                <stop offset="0.02" stop-color="#30F9D5"></stop>
                                <stop offset="1" stop-color="#94DFFF"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_4046_305" x1="928" y1="-26.6174" x2="780.367" y2="623.71" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#94FFDF"></stop>
                                <stop offset="1" stop-color="#64F930"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="hero-bg_circle"></div>
            </div>
        </div>
    </div>
    <div id="top" class="anchor"></div>
</section>

<style>
.hero_bg {
  z-index: -5;
  max-width: 80em;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
}
.hero_bg-blur {
  filter: blur(6em);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 48em;
}
.hero-bg_circle {
  aspect-ratio: 1;
  background-image: radial-gradient(
    circle farthest-corner at 50% 0%,
    var(--white),
    rgba(255, 255, 255, 0.4) 30%
  );
  opacity: 0.8;
  border-radius: 1000px;
  width: 100%;
  margin-top: 9em;
  position: absolute;
  top: 0%;
  box-shadow: 0 1em 12em rgba(100, 249, 48, 0.6),
    0 1em 16em rgba(48, 249, 213, 0.8);
}

.comp_hero {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
    display: flex;
    position: relative;
}

.hero_wrapper {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 55em;
    margin: 12em auto;
    text-decoration: none;
    display: flex;
}

.hero_titletext {
    letter-spacing: -0.05em;
    font-family: Rg Spacious, sans-serif;
    font-size: 8em;
    font-weight: 400;
    line-height: 80%;
}

.hero_titletext.textstyle_spaciousblackit {
    padding-left: 0.125em;
    padding-right: 0.25em;
}

.hero_title {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
    display: flex;
}

@media screen and (max-width: 991px) {
    .hero_titletext {
        font-size: 7em;
    }

    .hero_wrapper {
        width: 100%;
        margin-top: 12em;
        margin-bottom: 6em;
    }

    .comp_hero {
        grid-column-gap: 4em;
        grid-row-gap: 4em;
        justify-content: flex-end;
        align-items: center;
        padding-top: 2em;
    }
  .hero_bg {
    width: 64em;
    margin-left: auto;
    margin-right: auto;
    left: auto;
    right: auto;
  }
}

@media screen and (max-width: 767px) {
    .hero_titletext {
        font-size: 5em;
    }

    .hero_wrapper {
        margin-bottom: 0;
    }

    .comp_hero {
        padding-top: 0;
    }
  .hero_bg {
    width: 48em;
  }
}

@media screen and (max-width: 479px) {
    .hero_titletext {
        font-size: 4em;
    }
}
</style>
