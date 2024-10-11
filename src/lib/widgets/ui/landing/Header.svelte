<script>
  export let navigation;

  let showMenu = false;
</script>

<header class="nav_section">
  <div  role="banner" class="nav_container w-nav">
    <div class="nav">
      <a href="/" class="nav_logo w-nav-brand">
         <img src="/images/logo.svg" class='h-12 w-auto' alt="">
      </a>
      {#if !showMenu}
      <nav role="navigation" class="nav_menu-wrapper w-nav-menu">
          <ul role="list" class="nav_menu w-list-unstyled">
            {#each navigation as {title, link}}
              <li>
                <a href="{link}" class="nav-link">{title}</a>
              </li>
            {/each}

            <!-- <li>
              <a  href="/" target="_blank" class="button filled w-button">App</a>
            </li> -->
          <div class="legal">
            <slot name='legal'>

            </slot>
          </div>
          </ul>

      </nav>
      {/if}
      <div class="nav_menubutton w-nav-button {showMenu ? 'open':''}" on:click={()=> showMenu = !showMenu}>
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
</header>


<style>

@media screen and (min-width: 991px) {
  .nav-link {
  color: var(--green-80);;
  letter-spacing: 0.25px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  font-size: 18px;
  line-height: 20px;
  text-decoration: none;
  font-family: Rg Standard, sans-serif;
  font-weight: 700;
}
.nav-link:hover {
  color: rgba(26, 27, 31, 0.75);
}
.nav-link:focus-visible {
  outline-offset: 0px;
  color: #0050bd;
  border-radius: 4px;
  outline: 2px solid #0050bd;
}
  .nav_menu {
    grid-column-gap: 1.5em;
    grid-row-gap: 1.5em;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-left: 0;
    display: flex;
  }
  .legal {
    display: none;
  }
  .nav_menubutton {
    display: none;
  }
}
@media screen and (max-width: 991px) {
  .w-nav-button {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 18px;
  font-size: 24px;
  position: relative;
}
.w-nav-button:focus {
  outline: 0;
}

.nav_menubutton {
  border-radius: 1em;
}
.nav_menubutton.open {
  background-color: var(--gray-20);
  border-radius: 0.5em;
}

.w-icon-nav-menu:before {
  content: "";
}
.w-nav-menu {
  float: right;
  position: relative;
}
.nav_menu-wrapper {
    z-index: 5;
    border-top: 1px solid var(--gray-20);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.8);
    width: 100vw;
    height: 100vh;
    display: flex;
    position: absolute;
    top: 5em;
    bottom: 0%;
    left: 0%;
    right: 0%;
    /* box-shadow: inset 0 0.5em 2em rgba(0, 0, 0, 0.2); */
  }
  .nav-link {
    color: var(--green-80);
    background-color: rgba(255, 255, 255, 0);
    justify-content: center;
    align-items: center;
    padding: 0;
    text-decoration: none;
    transition: opacity 0.2s;
    display: flex;
    font-size: 40px;
    /* height: 5rem; */
    margin-bottom: 0.5em;
    line-height: 1.2;
    font-family: Rg Spacious, sans-serif;
    padding-left: 5px;
    padding-right: 5px;
  }

  .nav_menu {
    /* grid-column-gap: 2em;
    grid-row-gap: 2em; */
    flex-flow: column;
    /* justify-content: space-around; */
    align-items: start;
    /* padding: 4em 2em; */
    display: flex;
  }

  .nav-dropdown-list.shadow-three.w--open {
    position: absolute;
  }
  .nav-button-wrapper {
    width: 100%;
    margin-left: 0;
  }
  .nav_menubutton {
    color: var(--gray-90);
    background-color: rgba(26, 30, 49, 0.2);
    border-radius: 0.5em;
    padding: 0.5em;
  }
  .nav_menubutton.w--open {
    color: #fff;
    background-color: #a6b1bf;
  }
}
@media screen and (max-width: 767px) {
.nav_menu {
    flex-direction: column;
    padding-left: 1em;
    padding-right: 1em;
  }
}

@media screen and (max-width: 479px) {
  .nav_menu {
    flex-direction: column;
  }
}
</style>
