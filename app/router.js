import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('shows');
  this.route('contact');
  this.route('media');
  this.route('band');
  this.route('news');
  this.route('releases');
});
