import Component from '@ember/component';

export default Component.extend({

  starred: false,
  actions:{
    deleteEmail(email){
      let confirmed = window.confirm('Are you sure you want to delete this post?')

      if (confirmed)
      {
        email.destroyRecord();
      }

    },
    star(email,newValue) {
      email.set('starred',newValue);
      email.save();


    }
  }
});
