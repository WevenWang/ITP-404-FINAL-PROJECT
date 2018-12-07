import Component from '@ember/component';
import window from 'ember-window-mock';
// import RSVP from 'rsvp';
// import { later } from '@ember/runloop';

export default Component.extend({

  starred: false,
  actions:{
    deleteEmail(celebrity){
      let confirmed = window.confirm('Are you sure you want to delete this celebrity?')

      if (confirmed)
      {
        celebrity.destroyRecord();
      }

    },
    star(celebrity,newValue) {
      celebrity.set('starred',newValue);
      celebrity.save();


    }
  }
});
