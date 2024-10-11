<script>
  const negative = [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
  ];

  const positive = [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
  ];

  // export let data;
</script>

<div class="layout_grid2 filled">
  <div class="results_comparison">
    <div class="flex-h _0-5">
      <div class="icon-embed-xl w-embed">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 28 28" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
          <path d="M14 2.625C11.7502 2.625 9.551 3.29213 7.68039 4.54203C5.80978 5.79193 4.35182 7.56847 3.49088 9.64698C2.62993 11.7255 2.40467 14.0126 2.84357 16.2192C3.28248 18.4257 4.36584 20.4525 5.95667 22.0433C7.54749 23.6342 9.57432 24.7175 11.7809 25.1564C13.9874 25.5953 16.2745 25.3701 18.353 24.5091C20.4315 23.6482 22.2081 22.1902 23.458 20.3196C24.7079 18.449 25.375 16.2498 25.375 14C25.3718 10.9841 24.1724 8.09271 22.0398 5.96018C19.9073 3.82764 17.0159 2.62818 14 2.625ZM10.0625 10.5C10.3221 10.5 10.5759 10.577 10.7917 10.7212C11.0075 10.8654 11.1758 11.0704 11.2751 11.3102C11.3744 11.5501 11.4004 11.814 11.3498 12.0686C11.2991 12.3232 11.1741 12.557 10.9906 12.7406C10.807 12.9241 10.5732 13.0491 10.3186 13.0998C10.064 13.1504 9.80006 13.1244 9.56023 13.0251C9.3204 12.9258 9.11542 12.7575 8.9712 12.5417C8.82698 12.3258 8.75001 12.0721 8.75001 11.8125C8.75001 11.4644 8.88829 11.1306 9.13443 10.8844C9.38057 10.6383 9.71441 10.5 10.0625 10.5ZM18.8125 20.0069C18.6117 20.1227 18.3732 20.1541 18.1493 20.0942C17.9253 20.0344 17.7343 19.8881 17.6181 19.6875C16.8011 18.2755 15.517 17.5 14 17.5C12.483 17.5 11.1989 18.2766 10.3819 19.6875C10.3272 19.7921 10.2519 19.8845 10.1605 19.9592C10.0692 20.0339 9.96369 20.0894 9.85035 20.1223C9.73701 20.1551 9.6182 20.1648 9.50105 20.1505C9.3839 20.1363 9.27084 20.0985 9.16867 20.0395C9.0665 19.9804 8.97733 19.9013 8.90653 19.8069C8.83573 19.7125 8.78476 19.6047 8.75668 19.4901C8.7286 19.3755 8.724 19.2563 8.74316 19.1399C8.76231 19.0235 8.80482 18.9121 8.86813 18.8125C9.9936 16.8667 11.8639 15.75 14 15.75C16.1361 15.75 18.0064 16.8656 19.1319 18.8125C19.2477 19.0133 19.2791 19.2518 19.2192 19.4757C19.1594 19.6997 19.0131 19.8907 18.8125 20.0069ZM17.9375 13.125C17.6779 13.125 17.4242 13.048 17.2083 12.9038C16.9925 12.7596 16.8243 12.5546 16.7249 12.3148C16.6256 12.0749 16.5996 11.811 16.6502 11.5564C16.7009 11.3018 16.8259 11.068 17.0094 10.8844C17.193 10.7009 17.4268 10.5759 17.6814 10.5252C17.936 10.4746 18.1999 10.5006 18.4398 10.5999C18.6796 10.6992 18.8846 10.8675 19.0288 11.0833C19.173 11.2992 19.25 11.5529 19.25 11.8125C19.25 12.1606 19.1117 12.4944 18.8656 12.7406C18.6194 12.9867 18.2856 13.125 17.9375 13.125Z" fill="currentColor"></path>
          <path d="M14 2.625C11.7502 2.625 9.551 3.29213 7.68039 4.54203C5.80978 5.79193 4.35182 7.56847 3.49088 9.64698C2.62993 11.7255 2.40467 14.0126 2.84357 16.2192C3.28248 18.4257 4.36584 20.4525 5.95667 22.0433C7.54749 23.6342 9.57432 24.7175 11.7809 25.1564C13.9874 25.5953 16.2745 25.3701 18.353 24.5091C20.4315 23.6482 22.2081 22.1902 23.458 20.3196C24.7079 18.449 25.375 16.2498 25.375 14C25.3718 10.9841 24.1724 8.09271 22.0398 5.96018C19.9073 3.82764 17.0159 2.62818 14 2.625ZM10.0625 10.5C10.3221 10.5 10.5759 10.577 10.7917 10.7212C11.0075 10.8654 11.1758 11.0704 11.2751 11.3102C11.3744 11.5501 11.4004 11.814 11.3498 12.0686C11.2991 12.3232 11.1741 12.557 10.9906 12.7406C10.807 12.9241 10.5732 13.0491 10.3186 13.0998C10.064 13.1504 9.80006 13.1244 9.56023 13.0251C9.3204 12.9258 9.11542 12.7575 8.9712 12.5417C8.82698 12.3258 8.75001 12.0721 8.75001 11.8125C8.75001 11.4644 8.88829 11.1306 9.13443 10.8844C9.38057 10.6383 9.71441 10.5 10.0625 10.5ZM18.8125 20.0069C18.6117 20.1227 18.3732 20.1541 18.1493 20.0942C17.9253 20.0344 17.7343 19.8881 17.6181 19.6875C16.8011 18.2755 15.517 17.5 14 17.5C12.483 17.5 11.1989 18.2766 10.3819 19.6875C10.3272 19.7921 10.2519 19.8845 10.1605 19.9592C10.0692 20.0339 9.96369 20.0894 9.85035 20.1223C9.73701 20.1551 9.6182 20.1648 9.50105 20.1505C9.3839 20.1363 9.27084 20.0985 9.16867 20.0395C9.0665 19.9804 8.97733 19.9013 8.90653 19.8069C8.83573 19.7125 8.78476 19.6047 8.75668 19.4901C8.7286 19.3755 8.724 19.2563 8.74316 19.1399C8.76231 19.0235 8.80482 18.9121 8.86813 18.8125C9.9936 16.8667 11.8639 15.75 14 15.75C16.1361 15.75 18.0064 16.8656 19.1319 18.8125C19.2477 19.0133 19.2791 19.2518 19.2192 19.4757C19.1594 19.6997 19.0131 19.8907 18.8125 20.0069ZM17.9375 13.125C17.6779 13.125 17.4242 13.048 17.2083 12.9038C16.9925 12.7596 16.8243 12.5546 16.7249 12.3148C16.6256 12.0749 16.5996 11.811 16.6502 11.5564C16.7009 11.3018 16.8259 11.068 17.0094 10.8844C17.193 10.7009 17.4268 10.5759 17.6814 10.5252C17.936 10.4746 18.1999 10.5006 18.4398 10.5999C18.6796 10.6992 18.8846 10.8675 19.0288 11.0833C19.173 11.2992 19.25 11.5529 19.25 11.8125C19.25 12.1606 19.1117 12.4944 18.8656 12.7406C18.6194 12.9867 18.2856 13.125 17.9375 13.125Z" fill="url(#paint0_linear_312_2025)"></path>
          <defs>
            <linearGradient id="paint0_linear_312_2025" x1="21.9517" y1="6.785" x2="5.485" y2="22.5583" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF94E1"></stop>
              <stop offset="1" stop-color="#FF5C5C"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="text_size_xl">ВІД</div>
    </div>
    <div class="results_content">
      {#each negative as title, number}
      <div class="results_content-single">
        <div class="chip outlined">
          <div class="text">{number+1}</div>
        </div>
        <div class="text_size_m">{title}</div>
      </div>
      {/each}
    </div>

    <div style="" class="results_bg1 w-embed">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 279 203" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
        <g opacity="0.8">
          <ellipse cx="139.5" cy="101.5" rx="139.5" ry="101.5" fill="url(#paint0_linear_4014_67165)"></ellipse>
          <ellipse cx="139.5" cy="101.5" rx="139.5" ry="101.5" fill="url(#paint1_linear_4014_67165)"></ellipse>
        </g>
        <defs>
          <linearGradient id="paint0_linear_4014_67165" x1="237.017" y1="37.12" x2="95.3384" y2="223.642" gradientUnits="userSpaceOnUse">
            <stop stop-color="#94FFDF"></stop>
            <stop offset="1" stop-color="#64F930"></stop>
          </linearGradient>
          <linearGradient id="paint1_linear_4014_67165" x1="237.017" y1="37.12" x2="95.3384" y2="223.642" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF94E1"></stop>
            <stop offset="1" stop-color="#FF5C5C"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
  <div  class="results_comparison">
    <div class="flex-h _0-5">
      <div class="icon-embed-xl w-embed">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 28 28" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
          <path d="M14 2.625C11.7502 2.625 9.551 3.29213 7.68039 4.54203C5.80978 5.79193 4.35182 7.56847 3.49088 9.64698C2.62993 11.7255 2.40467 14.0126 2.84357 16.2192C3.28248 18.4257 4.36584 20.4525 5.95667 22.0433C7.54749 23.6342 9.57432 24.7175 11.7809 25.1564C13.9874 25.5953 16.2745 25.3701 18.353 24.5091C20.4315 23.6482 22.2081 22.1902 23.458 20.3196C24.7079 18.449 25.375 16.2498 25.375 14C25.3718 10.9841 24.1724 8.09271 22.0398 5.96018C19.9073 3.82764 17.0159 2.62818 14 2.625ZM10.0625 10.5C10.3221 10.5 10.5759 10.577 10.7917 10.7212C11.0075 10.8654 11.1758 11.0704 11.2751 11.3102C11.3744 11.5501 11.4004 11.814 11.3498 12.0686C11.2991 12.3232 11.1741 12.557 10.9906 12.7406C10.807 12.9241 10.5732 13.0491 10.3186 13.0998C10.064 13.1504 9.80006 13.1244 9.56023 13.0251C9.3204 12.9258 9.11542 12.7575 8.9712 12.5417C8.82698 12.3258 8.75001 12.0721 8.75001 11.8125C8.75001 11.4644 8.88829 11.1306 9.13443 10.8844C9.38057 10.6383 9.71441 10.5 10.0625 10.5ZM19.1319 17.0625C18.0064 19.0083 16.1361 20.125 14 20.125C11.8639 20.125 9.9936 19.0094 8.86813 17.0625C8.80482 16.9629 8.76231 16.8515 8.74316 16.7351C8.724 16.6187 8.7286 16.4995 8.75668 16.3849C8.78476 16.2703 8.83573 16.1625 8.90653 16.0681C8.97733 15.9737 9.0665 15.8946 9.16867 15.8355C9.27084 15.7765 9.3839 15.7387 9.50105 15.7245C9.6182 15.7102 9.73701 15.7199 9.85035 15.7527C9.96369 15.7856 10.0692 15.8411 10.1605 15.9158C10.2519 15.9905 10.3272 16.0829 10.3819 16.1875C11.1989 17.5995 12.483 18.375 14 18.375C15.517 18.375 16.8011 17.5984 17.6181 16.1875C17.6728 16.0829 17.7481 15.9905 17.8395 15.9158C17.9308 15.8411 18.0363 15.7856 18.1497 15.7527C18.263 15.7199 18.3818 15.7102 18.499 15.7245C18.6161 15.7387 18.7292 15.7765 18.8313 15.8355C18.9335 15.8946 19.0227 15.9737 19.0935 16.0681C19.1643 16.1625 19.2153 16.2703 19.2433 16.3849C19.2714 16.4995 19.276 16.6187 19.2569 16.7351C19.2377 16.8515 19.1952 16.9629 19.1319 17.0625ZM20.125 12.6875H16.625C16.3929 12.6875 16.1704 12.5953 16.0063 12.4312C15.8422 12.2671 15.75 12.0446 15.75 11.8125C15.75 11.5804 15.8422 11.3579 16.0063 11.1938C16.1704 11.0297 16.3929 10.9375 16.625 10.9375H20.125C20.3571 10.9375 20.5796 11.0297 20.7437 11.1938C20.9078 11.3579 21 11.5804 21 11.8125C21 12.0446 20.9078 12.2671 20.7437 12.4312C20.5796 12.5953 20.3571 12.6875 20.125 12.6875Z" fill="url(#paint0_linear_312_2081)"></path>
          <defs>
            <linearGradient id="paint0_linear_312_2081" x1="21.9517" y1="6.785" x2="5.485" y2="22.5583" gradientUnits="userSpaceOnUse">
              <stop stop-color="#94FFDF"></stop>
              <stop offset="1" stop-color="#64F930"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="text_size_xl">ДО</div>
    </div>
    <div class="results_content">
      {#each positive as title, number}
      <div class="results_content-single">
        <div class="chip outlined">
          <div class="text">{number + 1}</div>
        </div>
        <div class="text_size_m">{title}</div>
      </div>
      {/each}
    </div>
    <div style="" class="results_bg2 w-embed">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 281 204" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
        <ellipse cx="140.5" cy="102" rx="140.5" ry="102" fill="url(#paint0_linear_4014_67166)"></ellipse>
        <ellipse cx="140.5" cy="102" rx="140.5" ry="102" fill="url(#paint1_linear_4014_67166)"></ellipse>
        <defs>
          <linearGradient id="paint0_linear_4014_67166" x1="136.232" y1="3.22236" x2="184.248" y2="188.022" gradientUnits="userSpaceOnUse">
            <stop stop-color="#94FFB8"></stop>
            <stop offset="1" stop-color="#30F9D5"></stop>
          </linearGradient>
          <linearGradient id="paint1_linear_4014_67166" x1="238.716" y1="37.3028" x2="96.425" y2="225.049" gradientUnits="userSpaceOnUse">
            <stop stop-color="#94FFDF"></stop>
            <stop offset="1" stop-color="#64F930"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>


<style>

</style>
