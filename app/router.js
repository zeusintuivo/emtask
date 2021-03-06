import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:task_id'});
  });
  this.route('home');
});

export default Router;
