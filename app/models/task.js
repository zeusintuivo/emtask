import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  date: attr('date'),
  created: attr('string', {
    defaultValue: function(){
      return new Date();
    }
  })
});
