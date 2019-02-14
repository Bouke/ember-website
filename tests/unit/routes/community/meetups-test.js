import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | community/meetups', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:community/meetups/index');
    assert.ok(route);
  });
});
