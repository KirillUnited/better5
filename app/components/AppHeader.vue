<template>
  <div class="header header--light header--left">
    <div class="container">
      <Logo />
      <div class="header-ham">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="header-menu"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background: #fff;
}

.header .logo--text,
.header--left .header-menu a {
  line-height: 40px;
}

.header .logo--image {
  height: 40px;
}

.header .logo img {
  max-height: 40px;
}

.announcement {
  background: #2e91fc;
  color: #fff;
}

/*============================================================================
    #Header User Menu Styles
  ==============================================================================*/
.header .user__dropdown {
  background: #fff;
  top: 71px;
}

.header--center .user__dropdown {
  top: 50px;
}

/*============================================================================
    #Header Responsive Styles
  ==============================================================================*/
@media (max-width: 767px) {
  .header .logo--text {
    line-height: 40px;
  }

  .header .logo--image {
    max-height: 40px;
  }

  .header .logo img {
    max-height: 40px;
  }

  .header .header-ham {
    top: 20px;
  }
}

.announcement {
  background: #2e91fc;
  color: #fff;
}

a.announcement:hover {
  color: #fff;
}
</style>
