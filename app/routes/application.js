import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'task',
        attributes: {
          title: 'Fewer Moving Parts',
          date: '27/05/2016',
          description: 'description for today is'
        },
        relationships: {}
      }, {
        id: 2,
        type: 'task',
        attributes: {
          title: 'More Fewer Moving Parts',
          date: '28/05/2016',
          description: 'more description for today is'
        },
        relationships: {}
      }]
    });
  }
});
