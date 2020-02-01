import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | autenticado/post/novo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:autenticado/post/novo');
    assert.ok(route);
  });
});
