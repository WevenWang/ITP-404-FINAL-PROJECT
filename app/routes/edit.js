import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Edit Celebrity',
  model(params){
    return this.store.findRecord('celebrity',params.id);

  }
});
