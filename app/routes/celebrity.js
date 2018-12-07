import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Celebrity Detail',
  model(params){
    return this.store.findRecord('celebrity',params.id);

  }
});
