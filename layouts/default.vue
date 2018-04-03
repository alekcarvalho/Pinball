<template>
  <main>
    <header-component />
    <nuxt/>
    <footer-component />
  </main>
</template>

<script>
import Header from '~/layouts/header.vue'
import Footer from '~/layouts/footer.vue'

export default {

  components: {
    'header-component': Header,
    'footer-component': Footer
  }

}
</script>


<style lang="scss">

html, body{
  overflow-x: hidden!important;
  background-color: $background;
}

body{
  font-weight: 400;
}

html.has-navbar-fixed-top {
    padding-top: 7rem;
}

.main{
  min-height: calc(100vh - 143px);
}

.button {
  padding: 0 2.5rem;
  padding-top: 1.0rem;
  padding-bottom: 2rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 500;
  border: none;
  border-radius: 45px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover{
      opacity: 0.8;
      //transform: translateY(-7px);
    }
    &:focus, &:active, &:visited{
      box-shadow: none!important;
    }
  }

  .button.is-primary{
    color: $secondary;
    background-color: $primary;
    box-shadow: 0px 10px 15px rgba(73, 130, 252, 0.4);
  }
  .button.is-secondary{
    color: $secondary;
    background-color: #2EE59D;
    box-shadow: 0px 10px 15px rgba(46, 229, 157, 0.4);
  }

select{
  width: 100%;
}

.section {
  padding: 3rem 1.5rem .5rem!important;
  &:last-child{
    padding: 3rem 1.5rem!important;
  }
}

  .input, .textarea{
    font-size: 1rem;
    box-shadow: none!important;
  }

  .input.is-medium, .textarea.is-medium {
    font-size: 0.9rem;
    padding: 1.32rem;
}

.modal-card {
  width: auto;
  padding: 20px;
  background: #fff;
  section{
    margin-bottom: 20px;
    h4{
      margin-bottom: 10px;
    }
    span.title{
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  .total{
    padding: 20px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    .total-price{
      text-align: right;
    }
  }
  button{
    width: 100%;
  }
  .agendamento-title{
    font-size: 1.2rem;
  }
  .agendamento-field{
    margin-top: 10px;
  }
  .image-wrap{
    border: 1px solid #ddd;
    text-align: center;
    padding: 20px
  }
  input{
    height: 47px;
    padding-left: .5rem!important;
  }
  .control{
    .icon{
      transform: translateY(20%)
    }
    .icon.is-left{
      right: 0;
      left: auto;
    }
  }
  .field-horario{
    .control{
      height: 50px;
    }
    select{
      height: 47px;
    } 
    .select:not(.is-multiple):after{
      top: 75%;
    }
  }
  .column-left{
    img{
      max-width: 30px;
    }
  }
}

.datepicker-body{
  font-weight: 500;
  .datepicker-cell.is-selectable{
    &:hover{
      background: $primary!important;
      color: #fff!important;
    }
  }
}

.datepicker-header{
  .icon.is-primary.is-clickable{
    i{
      margin-top: -10px;
    }
  }
}

.datepicker .datepicker-table .datepicker-body .datepicker-row .datepicker-cell.is-unselectable {
    color: #c5c5c5;
    background-color: #f3f3f3;
    border-radius: 0;
}

@media only screen and (min-width: 1024px) {
  .dropdown-menu{
    .dropdown-content{
      position: fixed;
    }
  }
}
@media only screen and (max-width: 768px) {
  .title.is-1{
    font-size: 2.2rem;
  }
  h2.title{
    font-size: 1.7rem;
  }
}

//CSS Hacks
@-moz-document url-prefix() { 
    .button.is-medium.header-default{
      padding: 32px 20px 10px;
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	  .button.is-medium.header-default{
      padding: 32px 20px 10px;
    }
    .modal-card {
      min-width: 800px;
    }
  }
</style>

