import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: 'none',
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('second-route', { path: '/second-route/:parent_id' });

});

export default Router;
