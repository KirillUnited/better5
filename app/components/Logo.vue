<template>
  <nuxt-link to="/" class="logo logo--image">
    <img src="~/assets/img/icons/logo.png" />
  </nuxt-link>
</template>

<style>
.logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
