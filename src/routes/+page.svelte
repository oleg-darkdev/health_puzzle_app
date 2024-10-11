<script>
	import { navigation } from '$lib/shared';
  // FreeSecond,  Features,
	import { Header, Footer, Hero, About, AboutAuthor, Goals, TargetAudience, Faq, Price, OtherBoardgames, Benefits,  ProblemsIslandsList, } from '$lib/widgets';
  import { Popup, OtherBoardgameCard } from '$lib/entities'
  import { OtherboardgameContent, LegalLinks } from '$lib/shared';

  const otherBoardgames = [
    {
      title: 'Lorem Ipsum.',
      logo: '/images/logo.svg',
      desc: [
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      ]
    },
    {
      title: 'Lorem Ipsum.',
      logo: '/images/logo.svg',
      desc: [
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      ]
    },
    {
      title: 'Lorem Ipsum.',
      logo: '/images/logo.svg',
      desc: [
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      ]
    },
  ]
</script>


<svelte:head>
  <title>Health Puzzle</title>
</svelte:head>

<!-- <Popup /> -->

<Header {navigation}>
  <div slot='legal'>
    <LegalLinks />
  </div>
</Header>

<Hero />

<About />

<TargetAudience />

<AboutAuthor />


<Goals />

<Benefits />

<Price />



<ProblemsIslandsList />

<!-- <Features /> -->

<OtherBoardgames>
  <OtherBoardgameCard cssClass={'small-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>
  <OtherBoardgameCard cssClass={'small-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>
  <OtherBoardgameCard cssClass={'small-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>

  <OtherBoardgameCard cssClass={'big-left-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>
  <OtherBoardgameCard cssClass={'big-right-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>

  <OtherBoardgameCard cssClass={'small-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>
  <OtherBoardgameCard cssClass={'small-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>
  <OtherBoardgameCard cssClass={'small-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>

  <OtherBoardgameCard cssClass={'big-left-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>
  <OtherBoardgameCard cssClass={'big-right-otherBoardgame-card'}>
    <OtherboardgameContent boardgame={otherBoardgames[0]}/>
  </OtherBoardgameCard>
</OtherBoardgames>


<Faq />

<Footer {navigation} {otherBoardgames}>
  <div slot='legal'>
    <LegalLinks />
  </div>
</Footer>


<style>

</style>
