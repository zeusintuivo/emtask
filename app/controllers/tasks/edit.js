import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delTask(id) {
      this.store.findRecord('task', id).then(function(task){
        task.deleteRecord();



        task.save();

        // Clear Form
        //task.setProperties({
        //  title: '',
        //  description: '',
        //  date: ''
        //});
        //task.transitionToRoute('tasks');


      });
    },
    editTask(id) {
      let self = this;

      let title = this.get('model.title');
      let description = this.get('model.description');
      let date = this.get('model.date');

      // Create New Task
      let savedTask = this.store.findRecord('task', id).then(function(task){
        task.set('title', title);
        task.set('description', description);
        task.set('date', new Date(date));

        self.transitionToRoute('tasks');
        // Save to Database
        return task.save();

      });



      console.log(savedTask);
      if (savedTask) {
        console.log("saved action");
        //self.transitionToRoute('tasks');
      }


      // Clear Form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });

    }
  },
  willTransition(transition) {
    if (this.controller.get('userHasEnteredData') &&
      !confirm('Are you sure you want to abandon progress?')) {
      transition.abort();
    } else {
      // Bubble the `willTransition` action so that
      // parent routes can decide whether or not to abort.
      return true;
    }
  }
});
