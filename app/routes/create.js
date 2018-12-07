import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Add Celebrity',
  setupController(controller,model){
    this._super(controller,model);
    controller.set('name','');
    controller.set('motto','');
    controller.set('occupation','');
    controller.set('birthday','');

  }
});
