import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'task',
        attributes: {
          title: 'Fewer Moving Parts',
          date: '2016-05-22T00:00:00.000Z',
          description: 'description for today is'
        },
        relationships: {}
      }, {
        id: 2,
        type: 'task',
        attributes: {
          title: 'More Fewer Moving Parts',
          date: '2016-05-22T00:00:00.000Z',
          description: 'more description for today is'
        },
        relationships: {}
      }]
    });
  }
});
