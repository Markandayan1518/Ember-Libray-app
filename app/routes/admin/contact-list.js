import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('contact');
  },
  actions: {

      deleteContact(contact) {
        let confirmation = confirm(' Are you sure to delete this Message ? ');

        if (confirmation) {
          contact.destroyRecord();
        }
      }
    }
});
