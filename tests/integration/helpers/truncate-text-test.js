import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);





//testing if the text is truncated to the number of characters passed in
  test('test truncate number', async function(assert) {
    this.set('message', 'This message is to be truncated');
    this.set('number', 20);


    await render(hbs`{{truncate-text message number}}`);


    assert.equal(this.element.textContent.length, 23);
  });

//testing if the text is not truncated when the length is too short
  test('text too short, not truncate', async function(assert) {
    this.set('message', 'This message is to be truncated');
    this.set('number', 50);


    await render(hbs`{{truncate-text message number}}`);


    assert.equal(this.element.textContent, 'This message is to be truncated');
  });
});
