import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'span',
  classNameBindings:['isTooShort:error'],
  inputCount: computed('text',function(){
    return this.text.trim().length;
  }),

  isTooShort: computed ('inputCount',function(){
    return this.inputCount < 1;
    // if (this.inputCount > 0) {
    //   return true;
    // } else {
    //   return false;
    //
    // }
  })
});
