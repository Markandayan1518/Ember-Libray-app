import Ember from 'ember';

export default Ember.Controller.extend({
  headerMessage: 'Coming Soon',

  responseMessage: '',

  emailAddress: "",

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid'),

  actualEmailAddress: Ember.computed('emailAddress',function(){
      console.log("Actual Email Address is Called ", this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddres', function() {
    console.log("Changed Email Address is Called ", this.get('emailAddress'));
  }),

  actions: {
    saveInvitation(){
      console.log("Called From Save Invitation Method ", this.get('emailAddress'));

      //saving data using models 'Invitation'
      const emailId = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', {email: emailId} );
      newInvitation.save().then(() => {
            console.log('Email address is saved in FireBase .');
            this.set('responseMessage',`Thank you, we saved your email id : ${this.get('emailAddress')}` );
            this.set('emailAddress',``);
      });
    }
  }

});
