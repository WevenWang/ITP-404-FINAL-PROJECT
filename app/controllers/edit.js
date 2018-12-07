import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';

export default Controller.extend({
  actions: {
    editCelebrity(event) {
      event.preventDefault();

      let celebrity = this.model;
      celebrity.save().then(() => {
        this.transitionToRoute('celebrity', celebrity.id);
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
