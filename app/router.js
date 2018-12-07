import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('celebrity', { path:'/celebrities/:id' });
  this.route('sent', { path:'/userAdded' });
  this.route('trash', { path:'/featured' });
  this.route('create', { path:'/celebrities/new' });
  this.route('edit', { path:'/celebrities/:id/edit' });
});

export default Router;
