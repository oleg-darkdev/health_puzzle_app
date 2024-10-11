<script>
import {
    FirstIslandCard,
    SecondIslandCard,
    ThirdIslandCard,
    FifthIslandCard,
    FourthIslandCard
} from '$lib/entities';

import {islands} from '$lib/shared';
</script>

<section class="section">
    <div class="w-layout-blockcontainer container w-container">
        <div class="comp_programme">
            <div class="section-title">
                <div class="text_heading_m">Scenariusze rozgrywki</div>
            </div>

            <div class="programme_grid">
                <FirstIslandCard island={islands[0]}/>

                <SecondIslandCard island={islands[1]}/>

                <ThirdIslandCard island={islands[2]}/>

                <FourthIslandCard island={islands[3]}/>

                <FifthIslandCard island={islands[4]}/>

                <div class="programme_grid-bg">
                    <div class="programme_grid-line w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1141 2776" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                            <path d="M1.5 2774C256.224 2741.38 445.188 2789.97 669.927 2638.37C834.988 2527.03 1000.07 2342.42 1059.16 2145.97C1083.19 2066.08 1078.04 1959.14 972.472 1971.04C841.866 1985.77 713.173 2057.51 605.985 2131.1C547.251 2171.42 488.679 2228.93 417.163 2243.92C333.196 2261.52 191.378 2243.94 205.596 2128.04C222.394 1991.09 312.22 1867.3 387.123 1757.64C521.06 1561.54 678.681 1385.49 827.422 1201.38C929.459 1075.08 1035.72 943.339 1103.79 793.815C1129.05 738.324 1143.59 681.959 1137.69 621.079C1133.95 582.507 1121.18 533.495 1080.62 519.186C930.143 466.108 712.263 569.925 590.107 653.877C557.924 675.994 529.766 731.831 573.37 761.454C638.12 805.442 753.205 687.484 786.654 646.442C868.747 545.714 937.94 404.542 952.732 274.295C964.031 174.802 937 29.4996 813.69 7.53775C813.69 7.53775 620 -20.0004 493 52.9997" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
                            <path d="M1.5 2774C256.224 2741.38 445.188 2789.97 669.927 2638.37C834.988 2527.03 1000.07 2342.42 1059.16 2145.97C1083.19 2066.08 1078.04 1959.14 972.472 1971.04C841.866 1985.77 713.173 2057.51 605.985 2131.1C547.251 2171.42 488.679 2228.93 417.163 2243.92C333.196 2261.52 191.378 2243.94 205.596 2128.04C222.394 1991.09 312.22 1867.3 387.123 1757.64C521.06 1561.54 678.681 1385.49 827.422 1201.38C929.459 1075.08 1035.72 943.339 1103.79 793.815C1129.05 738.324 1143.59 681.959 1137.69 621.079C1133.95 582.507 1121.18 533.495 1080.62 519.186C930.143 466.108 712.263 569.925 590.107 653.877C557.924 675.994 529.766 731.831 573.37 761.454C638.12 805.442 753.205 687.484 786.654 646.442C868.747 545.714 937.94 404.542 952.732 274.295C964.031 174.802 937 29.4996 813.69 7.53775C813.69 7.53775 620 -20.0004 493 52.9997" stroke="url(#paint0_linear_764_792)" stroke-width="3" stroke-linecap="round"></path>
                            <defs>
                                <linearGradient id="paint0_linear_764_792" x1="233.814" y1="52.1445" x2="1435.53" y2="2116.32" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.02" stop-color="#30EDF9"></stop>
                                    <stop offset="1" stop-color="#94D8FF"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="scenarios" class="anchor"></div>
        </div>
    </div>
</section>

<style>

</style>
