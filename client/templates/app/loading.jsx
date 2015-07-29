let message = '<p class="loading-message">Loading Message</p>';
let spinner = '<div class="sk-spinner sk-spinner-cube-grid">'
            + '  <div class="sk-cube"></div>'
            + '  <div class="sk-cube"></div>'
            + '  <div class="sk-cube"></div>'
            + '  <div class="sk-cube"></div>'
            + '  <div class="sk-cube"></div>'
            + '  <div class="sk-cube"></div>'
            + '  <div class="sk-cube"></div>'
            + '  <div class="sk-cube"></div>'
            + '  <div class="sk-cube"></div>'
            + '</div>';

Template.loading.rendered = () => {
  if (!Session.get('loadingSplash')) {
    this.loading = window.pleaseWait({
      backgroundColor: '#262b2b',
      loadingHtml: spinner
    });
    Session.set('loadingSplash', true);
  }
}

Template.loading.destroyed = () => {
  if (this.loading) {
    this.loading.finish();
  }
}
