import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nonzero-check', function(hooks) {
  setupRenderingTest(hooks);

  test('when the user input nothing', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    this.set('name','')
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NonzeroCheck class="my-class" @text={{name}}/>`);

    assert.equal(this.element.textContent.trim(), 'This input cannot be empty, type something meaningful!');

    // Template block usage:

  });

  test('when the user input something', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    this.set('name','something')
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NonzeroCheck class="my-class" @text={{name}}/>`);

    assert.equal(this.element.textContent.trim(), '9 characters inputted. You are good to go!');

    // Template block usage:

  });

  test('when the user input blankspace', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    this.set('name','        ')
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NonzeroCheck class="my-class" @text={{name}}/>`);

    assert.equal(this.element.textContent.trim(), 'This input cannot be empty, type something meaningful!');

    // Template block usage:

  });


});
