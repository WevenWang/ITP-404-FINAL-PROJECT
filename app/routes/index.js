import Route from '@ember/routing/route';
import window from 'ember-window-mock';

export default Route.extend({

  model()
  {
      return this.store.findAll('email');
  }


});
