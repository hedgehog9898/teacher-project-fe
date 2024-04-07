<script setup lang="ts">

</script>

<template>
  <header class="the-header d-flex">
    <VContainer class="d-flex">
      <span>GERMANIFY</span>
      <div class="w-100 d-flex align-center justify-center">
        <nav class="the-header__nav">
          <ul class="the-header__nav-list d-flex">
            <li class="the-header__nav-list__elem text-uppercase">
              Home
            </li>
            <li class="the-header__nav-list__elem text-uppercase">
              Prices
            </li>
            <li class="the-header__nav-list__elem text-uppercase">
              About
            </li>
          </ul>
        </nav>
      </div>
    </VContainer>
  </header>
</template>

<style scoped lang="scss">
.the-header {
  &__nav {
    &-list {
      gap: 45px;
      list-style: none;
      &__elem {

      }
    }
  }
}
</style>