import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    deleteEmail(email){
      let confirmed = window.confirm('Are you sure you want to delete this post?')

      if (confirmed)
      {
        email.destroyRecord();
      }

    }
  }
});
