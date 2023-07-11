import EmberRouter from '@ember/routing/router';
import config from 'test-app-for-my-addon/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // Add route declarations here
});