import Route from '@ember/routing/route';


export default Route.extend({
  title: 'All Celebrities',
  model()
  {
      return this.store.findAll('celebrity');
  }


});
