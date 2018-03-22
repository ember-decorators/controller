import Controller from '@ember/controller';
import { moduleFor } from 'ember-qunit';
import { test } from 'qunit';

import { controller } from '@ember-decorators/controller';

moduleFor('javascript | @controller', { integration: true });

test('it works (ES6)', function(assert) {
  const FooController = Controller.extend();

  this.register('controller:foo', FooController);

  class BarController extends Controller {
    @controller foo;
  }

  this.register('controller:bar', BarController);

  const bar = this.container.lookup('controller:bar');

  assert.ok(bar.get('foo') instanceof FooController, 'controller injected correctly');
});

test('it works (Ember object model)', function(assert) {
  const FooController = Controller.extend();

  this.register('controller:foo', FooController);

  const BarController = Controller.extend({
    @controller foo: null
  });

  this.register('controller:bar', BarController);

  const bar = this.container.lookup('controller:bar');

  assert.ok(bar.get('foo') instanceof FooController, 'controller injected correctly');
});

test('controller decorator works with controller name (ES6)', function(assert) {
  const FooController = Controller.extend();

  this.register('controller:foo', FooController);

  class BarController extends Controller {
    @controller('foo') baz;
  }

  this.register('controller:bar', BarController);

  const bar = this.container.lookup('controller:bar');

  assert.ok(bar.get('baz') instanceof FooController, 'controller injected correctly');
});

test('controller decorator works with controller name (Ember object model)', function(assert) {
  const FooController = Controller.extend();

  this.register('controller:foo', FooController);

  const BarController = Controller.extend({
    @controller('foo') baz: null
  });

  this.register('controller:bar', BarController);

  const bar = this.container.lookup('controller:bar');

  assert.ok(bar.get('baz') instanceof FooController, 'controller injected correctly');
});

test('can set controller field (ES6)', function(assert) {
  assert.expect(0);

  const FooController = Controller.extend();

  this.register('controller:foo', FooController);

  class BarController extends Controller {
    @controller foo
  }

  this.register('controller:bar', BarController);

  const bar = this.container.lookup('controller:bar');

  bar.set('foo', FooController.create());
});

test('can set controller field (Ember object model)', function(assert) {
  assert.expect(0);

  const FooController = Controller.extend();

  this.register('controller:foo', FooController);

  const BarController = Controller.extend({
    @controller foo: null
  });

  this.register('controller:bar', BarController);

  const bar = this.container.lookup('controller:bar');

  bar.set('foo', FooController.create());
});
