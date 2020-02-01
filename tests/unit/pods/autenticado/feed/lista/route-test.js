import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | autenticado/feed/lista', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:autenticado/feed/lista');
    assert.ok(route);
  });
});
