import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, { reset } from 'ember-window-mock';

module('Acceptance | celebrities', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.beforeEach(function(){
    reset()
  })

  // hooks.beforeEach(function(){
  //   reset();
  // })


  test('visiting / display all the celebrities ', async function(assert) {
    server.create('celebrity',{starred: true})
    server.create('celebrity',{starred: true})
    server.create('celebrity',{starred: false})
    server.create('celebrity',{starred: false})
    server.create('celebrity',{starred: false})


    await visit('/');
    // await pauseTest();


    assert.equal(currentURL(), '/');
    assert.dom('[data-test="with-star"]').exists({count:2});
    assert.dom('[data-test="without-star"]').exists({count:3});
  });



  test('viewing a single celebrity', async function(assert) {
    server.create('celebrity',{
      name:"Sherine",
      birthday:"1997-05",
      occupation:"singer",
      motto:"All for one. One for all.",
      starred: true})



    await visit('/celebrities/1');
    // await pauseTest();



    assert.dom('[data-test="celebrity-name"]').hasText('Name: Sherine');
    assert.dom('[data-test="celebrity-birthday"]').hasText('Birthday: 1997-05');
    assert.dom('[data-test="celebrity-occupation"]').hasText('Occupation: singer');
    assert.dom('[data-test="celebrity-motto"]').hasText('Motto: All for one. One for all.');
    assert.dom('[data-test="celebrity-id"]').hasText('id: 1');

  });






  test('creating an celebrity', async function(assert) {
    server.createList('celebrity',0);
    await visit('/celebrities/new');
    await fillIn('#name','Sherine');
    await fillIn('#birthday','1999-02');
    await fillIn('#occupation','emergency');
    await fillIn('#motto','This is an emergency message');

    await click('[data-test="save-celebrity"]');
    // await pauseTest();

    assert.equal(currentURL(), '/');

    assert.dom('[data-test="without-star"]').exists({count:1});
    assert.equal(server.db.celebrities[0].name,'Sherine')
    assert.equal(server.db.celebrities[0].birthday,'1999-02')
    assert.equal(server.db.celebrities[0].occupation,'emergency')
    assert.equal(server.db.celebrities[0].motto,'This is an emergency message')

  });

  test('deleting a single celebrity', async function(assert) {
    server.create('celebrity',{starred: false});
    server.create('celebrity',{starred: false});
    window.confirm = () => true;


    await visit('/');
    // await pauseTest();
    await click('[data-test="delete-celebrity"]');
    assert.equal(currentURL(), '/');

    assert.dom('[data-test="without-star"]').exists({count:1});

  });

  test('cancelling deleting a single celebrity', async function(assert) {
    server.create('celebrity',{starred: false});
    server.create('celebrity',{starred: false});
    window.confirm = () => false;



    await visit('/');
    // await pauseTest();
    await click('[data-test="delete-celebrity"]');
    assert.equal(currentURL(), '/');

    assert.dom('[data-test="without-star"]').exists({count:2});

  });

  test('edit a single celebrity', async function(assert) {
    server.create('celebrity',{name: "toBeEdited"});

    await visit('/celebrities/1/edit');
    await fillIn('#name','Edited');
    // await pauseTest();
    await click('[data-test="save-celebrity"]');
    assert.equal(currentURL(), '/celebrities/1');

    assert.dom('[data-test="celebrity-name"]').hasText('Name: Edited');

  });













});
