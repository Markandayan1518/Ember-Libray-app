import Ember from 'ember';

export default Ember.Controller.extend({
  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isValidMessage: Ember.computed.gte('message.length', 5),

  isNotVaild: Ember.computed.and('isValidEmail','isValidMessage'),

  isDisabled: Ember.computed.not('isNotVaild'),

  emailAddress: "",

  message: "",

  actualEmailAddress: Ember.computed('emailAddress',function(){
      console.log("Actual Email Address is Called from Contact Page ", this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddres', function() {
    console.log("Changed Email Address is Called from Contact Page ", this.get('emailAddress'));
  }),

  actions: {
    sendMessage(){
      console.log("Called From Send Message Method ", this.get('emailAddress'));
      //saving data using models 'Contact'
      const emailId = this.get('emailAddress');
      const message = this.get('message');
      const newContact = this.store.createRecord('contact', {email: emailId, content: message} );
      newContact.save().then(() => {
          this.set('responseMessage',`Thank you, we have send your comments from your email id : ${this.get('emailAddress')}` );
          this.set('emailAddress',``);
          this.set('message',``);
      });
    }
  }
});
