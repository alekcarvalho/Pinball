<template>
  <main id="home" class="main">

    <section id="title" class="section">
      <div class="container">

        <div v-masonry transition-duration="0.3s" item-selector=".column" class="columns is-multiline">
          
          <div v-masonry-tile class="column is-mobile is-one-third-tablet is-one-quarter-desktop" v-for="movies in movie">

            <div class="card">
              <a class="card-link" href="#">
                <div class="card-image">
                  <figure class="image is-3by2">
                    <img :src="`https://image.tmdb.org/t/p/w500`+movies.backdrop_path" :alt="movies.title">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-5">{{movies.title}}</p>
                      <div class="category"><i class="fas fa-map-marker-alt"></i>
                      <p class="subtitle is-6">{{movies.media_type}}</p>
                      </div>
                    </div>
                  </div>
                  <div id="overview" class="content">
                  {{movies.overview}}
                  </div>
                </div>
                <footer class="card-footer">
                  <form class="card-footer-item">
                    <rating :items="items" legend="" :value="value" @change="update"></rating>
                    <span class="icon">
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </span>
                  </form>
                </footer>
              </a>
            </div>
             
          </div>
        </div>

        
        

      </div>
    </section>
    
    
  </main>
</template>

<script>
import axios from 'axios'
import Rating from 'vue-bulma-rating'

export default {

  name: 'home',

  head: {
    title: 'Home'
  },

  components: {
    Rating
  },

  data () {
    return {
      value: 3,
      items: [
        {
          title: '5 Stars',
          value: 5
        },
        {
          title: '4 Stars',
          value: 4
        },
        {
          title: '3 Stars',
          value: 3
        },
        {
          title: '2 Stars',
          value: 2
        },
        {
          title: '1 Star',
          value: 1
        }
      ]
    }
  },

  async asyncData () {
    const data = await axios.get('https://api.themoviedb.org/4/list/10?page=1&api_key=6c7cc97aa8149b8826f066cc50f2e155&language=pt-BR')
    return { movie: data.data.results }
    // console.log(data.data.results)
  },

  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
    this.truncate()
  },

  methods: {
    truncate () {
      let overviews = document.querySelectorAll('#overview')
      for (var overview of overviews) {
        let strings = overview.innerHTML.substring(0,155);
        overview.innerHTML = strings + '...'
      }
    },
    update (val) {
      this.value = val
    }
  }

}
</script>

<style lang="scss" scoped>
.card{
  border-radius: 0.2rem;
  .title{
    color: #717171;
    margin-bottom: 1rem;
    transition: 0.5s all;
  }
  .category{
    display: flex;
    flex-direction: row;
    align-items: center;
    i{
      color: #ACAAAA;
      margin-right: .4rem;
      font-size: .7rem;
    }
    .subtitle{
      color: #ACAAAA;
      &:first-letter{
        text-transform: uppercase;
      }
    }
  }
  .card-image{
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    img{
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.2rem;
    }
  }
  .content{
    color: #9a9a9a;
  }
  .card-footer{
    i{
      color: #4468B0;
    }
    .card-footer-item{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
.card-link:hover{
  .title{
    color: #B9CB41;
  }
}
.starability-basic{
  min-height: 0;
}
</style>
