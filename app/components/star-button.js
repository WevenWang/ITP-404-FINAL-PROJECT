import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggle(){
      // this.toggleProperty('starred');
      this.onClick(!this.starred);
    }

  }
});
