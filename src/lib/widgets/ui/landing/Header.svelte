<script>
  export let navigation;
</script>

<header class="nav_section">
  <div  role="banner" class="nav_container w-nav">
    <div class="nav">
      <a href="" class="nav_logo w-nav-brand">
        <!-- <div class="logo">un <span class="textstyle_spaciousblackit">fold</span> -->
        <!-- </div>
         -->
         <img src="/images/logo.svg" class='h-12 w-auto' alt="">
      </a>
      <nav role="navigation" class="nav_menu-wrapper w-nav-menu">
        <ul role="list" class="nav_menu w-list-unstyled">
          {#each navigation as {title, link}}
            <li>
              <a href="{link}" class="button w-button">{title}</a>
            </li>
          {/each}

          <li>
            <a  href="/" target="_blank" class="button filled w-button">App</a>
          </li>
        </ul>
      </nav>
      <div class="nav_menubutton w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
</header>


<style>

</style>
