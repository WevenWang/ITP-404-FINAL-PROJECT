import { module, test } from 'qunit';
import { visit, currentURL, pauseTest, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, { reset } from 'ember-window-mock';

module('Acceptance | emails', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.beforeEach(function(){
    reset()
  })
  
  // hooks.beforeEach(function(){
  //   reset();
  // })


  test('visiting / display starred and unstarred emails', async function(assert) {
    server.create('email',{starred: true})
    server.create('email',{starred: true})
    server.create('email',{starred: false})
    server.create('email',{starred: false})
    server.create('email',{starred: false})


    await visit('/');
    // await pauseTest();


    assert.equal(currentURL(), '/');
    assert.dom('[data-test="with-star"]').exists({count:2});
    assert.dom('[data-test="without-star"]').exists({count:3});
  });



  test('viewing a single email', async function(assert) {
    server.create('email',{
      from:"1381651300@163.com",
      to:"davidTang@usc.edu",
      subject:"Assignment",
      message:"My assignment is not complete, I need extension.",
      starred: true})



    await visit('/emails/1');
    // await pauseTest();



    assert.dom('[data-test="email-subject"]').hasText('Subject: Assignment');
    assert.dom('[data-test="email-from"]').hasText('From: 1381651300@163.com');
    assert.dom('[data-test="email-to"]').hasText('To: davidTang@usc.edu');
    assert.dom('[data-test="email-message"]').hasText('Message: My assignment is not complete, I need extension.');
    assert.dom('[data-test="email-id"]').hasText('id: 1');

  });






  test('creating an email', async function(assert) {
    server.createList('email',0);
    await visit('/emails/new');
    await fillIn('#from','1386134444@163.com');
    await fillIn('#to','wyf@163.com');
    await fillIn('#subject','emergency');
    await fillIn('#message','This is an emergency message');

    await click('[data-test="send-email"]');
    // await pauseTest();

    assert.equal(currentURL(), '/');

    assert.dom('[data-test="without-star"]').exists({count:1});
    assert.equal(server.db.emails[0].from,'1386134444@163.com')
    assert.equal(server.db.emails[0].to,'wyf@163.com')
    assert.equal(server.db.emails[0].subject,'emergency')
    assert.equal(server.db.emails[0].message,'This is an emergency message')

  });

  test('deleting a single email', async function(assert) {
    server.createList('email',2);
    window.confirm = () => true;


    await visit('/');
    // await pauseTest();
    await click('[data-test="delete-email"]');
    assert.equal(currentURL(), '/');

    assert.dom('[data-test="without-star"]').exists({count:1});

  });

  test('cancelling deleting a single email', async function(assert) {
    server.createList('email',2);
    window.confirm = () => false;



    await visit('/');
    // await pauseTest();
    await click('[data-test="delete-email"]');
    assert.equal(currentURL(), '/');

    assert.dom('[data-test="without-star"]').exists({count:2});

  });







});
