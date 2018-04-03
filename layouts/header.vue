<template>
  <header id="header">
    <div class="container">
      <nav class="navbar nav-main" role="navigation" aria-label="dropdown navigation">

        <div class="navbar-start">
                
            <div class="navbar-brand">
              <nuxt-link class="navbar-item" :to="{ name: 'index'}">
                <Logo />
              </nuxt-link>
            </div>
          

            <div class="navbar-burger burger" data-target="main-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          

            <div class="field search">
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Buscar...">
                <span class="icon is-small is-right">
                  <i class="fas fa-search"></i>
                </span>
              </p>
            </div>

          </div>    


        <div class="navbar-end">

          <div class="avatar">
            <img src="~/static/images/avatar.png" alt="avatar">
            <a href="#"><b>Jonas</b> <i class="fas fa-chevron-down"></i></a>
          </div>
                
        </div>
        

        <div id="main-menu" class="navbar-menu">
          <div class="field search-menu">
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Buscar...">
                <span class="icon is-small is-right">
                  <i class="fas fa-search"></i>
                </span>
              </p>
            </div>
          <nuxt-link class="navbar-item" :to="{ name: 'index'}" exact>
            Home
          </nuxt-link>
          <nuxt-link class="navbar-item" :to="{ name: 'menu1'}">
            Menu 1
          </nuxt-link>
          <nuxt-link class="navbar-item" :to="{ name: 'menu2'}">
            Menu 2
          </nuxt-link>
          <nuxt-link class="navbar-item" :to="{ name: 'menu3'}">
            Menu 3
          </nuxt-link>
          <nuxt-link class="navbar-item" :to="{ name: 'menu4'}">
            Menu 4
          </nuxt-link>
        </div>

      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/logo.vue'

export default {
  components: {
    Logo
  },

  mounted () {
    this.menuMobile()
    document.documentElement.classList.toggle('has-navbar-fixed-top')
  },

  methods: {
    menuMobile () {
      // Get all "navbar-burger" elements
      let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
      let $mobileMenuLink = Array.prototype.slice.call(document.querySelectorAll('#main-menu a'), 0)
      const $navbarBurger2 = document.querySelector('.navbar-burger')
      const $mobileMenu = document.querySelector('#main-menu')
      // Check if there are any nav burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            // Get the target from the "data-target" attribute
            let target = $el.dataset.target
            let $target = document.getElementById(target)

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            document.documentElement.classList.toggle('is-clipped')
            $el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
            $target.classList.remove('is-hidden')
          })
        })

        $mobileMenuLink.forEach(function ($el) {
          $el.addEventListener('click', function () {
            document.documentElement.classList.toggle('is-clipped')
            // $mobileMenu.classList.toggle('is-hidden')
            $mobileMenu.classList.toggle('is-active')
            $navbarBurger2.classList.toggle('is-active')
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

/* ==========================================================================
   HEADER - HOME
   ========================================================================== */
#header {
  background: url('~/static/images/border.png') repeat-x 0px 0px $default;
  padding: 1.5rem 0 .5rem;
  border-bottom: 1px solid $color-border-default;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  .nav-main{
    display: flex;
    background: none;
    .logo{
      margin-left: 10px;
    }
  }
  .navbar-item{
    &:hover{
      background: none;
    }
  }
  .nav-sub{
    margin-top: 30px;
    .navbar-end{
      a{
        font-size: 1.2rem;
        text-transform: uppercase; 
        color: $primary;
        font-weight: 600;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  .image-sub-brand{
    height: 100px;
  }
  .nuxt-link-active{
    text-decoration: underline;
  }
}

.header-default{
  display: flex;
  align-items: end;
}

.navbar-burger{
  margin-top: 7px;
  margin-left: 1.5rem ;
  span{
    height: 0.1rem;
  }
  &:hover{
    background: none;
  }
}

.columns{
  width: 100%;
}

.search{
  width: 30rem;
  margin-left: 4rem;
  margin-top: .8rem;
}

.avatar{
  display: flex;
  align-items: center;
  img{
    margin-right: .5rem;
  }
  a{
    font-size: .8rem;
  }
  b{
    margin-right: .3rem;
  }
  i{
    font-size: .5rem;
  }
}

.navbar-burger.is-active{
  position: fixed;
  z-index: 9999;
  right: 0;
  color:$primary!important;
}

.navbar-menu.is-active{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px 0;
    z-index: 9998;
    margin-top: -7px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $default;
    a{
      font-size: 1.6rem;
      color: $primary!important;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 1rem;
      text-decoration: none!important;
      &:hover{
        text-decoration: underline!important;
      }
    }
  }

@media screen and (min-width: 1216px){
  .search{
    width: 40rem;
  }
}

@media screen and (min-width: 1024px){
  .navbar-burger {
      display: block;
  }
  .navbar-menu{
    display: none;
  }
  .navbar-menu .is-active{
    display: block;
  }
}

@media only screen and (max-width: 1024px) {
  .search-field{
    display: none;
  }
  .nav-main, .navbar-sub-brand{
    justify-content: center;
  }

  .navbar-end{
    display: none;
  }
  .navbar-start{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .search{
    width: 60%!important;
    margin-left: 0rem;
  }
  .navbar-burger{
    margin-left: 0rem;
  }
}

@media only screen and (max-width: 768px) {
  .search{
    display: none;
  }
  .navbar-start{
    justify-content: space-between;
  }
}

@media only screen and (max-width: 500px) {
  .navbar-sub-brand{
    padding: 20px;
    img{
      height: 70px!important;
    }
  }
}
</style>
