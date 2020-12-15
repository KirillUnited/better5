<template>
  <div id="section-footer" data-section-id="footer">
    <footer class="footer footer--dark footer--left" kjb-settings-id="sections_footer_settings_background_color">
      <div class="container">
        <div class="footer__text-container">
            <span kjb-settings-id="sections_footer_settings_copyright" class="footer__copyright">© 2020
            Better5.com</span>
            <div kjb-settings-id="sections_footer_settings_menu" class="footer__menu">
                <a class="footer__menu-item" href="terms.html">Terms</a>
                <a class="footer__menu-item" href="privacy-policy.html">Privacy</a>
                <a class="footer__menu-item" href="disclaimer.html">Disclaimer</a>
            </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: #272d34;
}
.container--main {
  background: #272d34;
}
.footer .social-icons__icon,
.footer .social-icons__icon:hover {
  color: #ffffff;
}
.footer .social-icons--round .social-icons__icon,
.footer .social-icons--square .social-icons__icon {
  background-color: #2e91fc;
}
</style>