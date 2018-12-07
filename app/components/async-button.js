import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  buttonText: 'Save',
  click() {
    this.set('buttonText','Saving...');
    

  }

});
