<template>
  <footer>
    <div class="container">
      <div class="copyright">
        <logo />
        <span>All rights reserved</span>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>

footer{
  background-color: #f4f4f4;
  border-top: 1px solid $color-border-default;
  padding: 20px;
  padding-top: 40px;
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .copyright{
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
      margin-left: 20px;
      color: $invert;
      font-size: 0.8rem;
    }
  }
}

@media only screen and (max-width: 500px) {
}
</style>
