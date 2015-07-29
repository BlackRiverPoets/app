Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.plugin('loading', {loadingTemplate: 'loading'});

Router.route('/', {
  name: 'homeIndex'
});
