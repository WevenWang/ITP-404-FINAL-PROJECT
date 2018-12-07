import Route from '@ember/routing/route';

export default Route.extend({
  title: 'User-added Celebrities',
  model()
  {
      return this.store.findAll('celebrity');
  }


});
