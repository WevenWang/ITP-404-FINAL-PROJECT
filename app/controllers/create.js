import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';

export default Controller.extend({
  actions:{
    createCelebrity(event){
      event.preventDefault();

      let celebrity = this.store.createRecord('celebrity',{
        name: this.name,
        motto: this.motto,
        occupation: this.occupation,
        birthday: this.birthday,
        userAdded: true
      });
      celebrity.save().then(()=> {

        this.transitionToRoute('index');
      });
    },

    saveCelebrity(){
      return new RSVP.Promise((resolve) => {
        later(() => {
          resolve();
        }, 2000);
      });
    }



  }
});
