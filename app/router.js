import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('offer', function() {
    this.route('new');
    this.route('myoffer');
    this.route('savedoffer');
  });
});

export default Router;
