import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);

  // test('it renders', async function(assert) {
  //   // Set any properties with this.set('myProperty', 'value');
  //   // Handle any actions with this.set('myAction', function(val) { ... });
  //
  //   await render(hbs`{{star-button}}`);
  //
  //   assert.equal(this.element.textContent.trim(), '');
  //
  //   // Template block usage:
  //   await render(hbs`
  //     {{#star-button}}
  //       template block text
  //     {{/star-button}}
  //   `);
  //
  //   assert.equal(this.element.textContent.trim(), 'template block text');
  // });

//test if the star is filled when starred is true
test('Starred', async function(assert) {

    this.set('star',true)

    await render(hbs`<StarButton @starred={{star}} />`);

    assert.dom('img').hasClass('filled-star');
  });

//test if the star is empty when starred is false

test('Not Starred', async function(assert) {

  this.set('star',false)

  await render(hbs`<StarButton @starred={{star}} />`);

  assert.dom('img').hasClass('empty-star');
});

//test if onClick is called when the new starred value when clicked
// test('onClicked is Called', async function(assert) {
//
//   this.set('star',false)
//
//   await render(hbs`<StarButton data-test="toggle-star" @starred={{star}} @onClick={{action "star" email}} />`);
//
//
//   await click('[data-test="toggle-star"]')
//
//   assert.dom('img').hasClass('filled-star');
// });


});
