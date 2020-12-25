<template>
  <div class="app-wrapper">
    <AppHeader />
    <main class="app-content">
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.app {
  &-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  &-content {
    flex: 1 0 auto;
  }
}
</style>
