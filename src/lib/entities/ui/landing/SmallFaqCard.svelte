<script>
  export let faqData;
</script>

<div  class="{faqData.cssClass} faq_single" on:click={()=> faqData.showAnswer = !faqData.showAnswer}>
  <div  class="{faqData.showAnswer ? 'h-16': ''} faq_single_question  " >
    <div class="text_size_m">
      <span class="faq_chip">{faqData.id}</span> {faqData.q}
    </div>
    <div class="faq_single-icon">
      <div class="icon-embed-1-5 w-embed">
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  </div>

  {#if faqData.showAnswer}
    <div class="faq_single_answer">
      {#each faqData.a as answer}
        <p class="text_size_s">{answer}</p>
      {/each}
    </div>
  {/if}
</div>


<style>
.faq_single_question {
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  text-align: left;
  cursor: pointer;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  padding-top: 2em;
  padding-left: 2em;
  padding-right: 2em;
  font-weight: 600;
  display: flex;
}
.faq_single {
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 1em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: auto;
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
  transform: translate(0);
}
.faq_single:hover {
  background-color: var(--white);
  transform: translateY(-0.25em);
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
}
.faq_single-icon {
  background-color: rgba(218, 223, 234, 0.4);
  border-radius: 0.5em;
  align-self: flex-start;
  width: 1.5em;
  height: 1.5em;
  transition: opacity 0.2s;
}
.faq_single-icon:hover {
  opacity: 0.6;
}
.faq_single-icon:active {
  opacity: 0.4;
}
.faq_single_answer {
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;
  opacity: 0.8;
  flex-flow: column;
  margin-bottom: 1em;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 0.875em;
  line-height: 130%;
  display: flex;
  overflow: hidden;
}

@media screen and (max-width: 991px) {
  .faq_single_question {
    margin-bottom: 0.5em;
  }
  .faq_single_answer {
    margin-bottom: 1.5em;
  }
  .faq_single {
    border-width: 1px;
    border-color: var(--gray-20);
    background-color: var(--white);
    transform: none;
  }
  .faq_single:hover {
    box-shadow: none;
    transform: none;
  }
}
</style>
