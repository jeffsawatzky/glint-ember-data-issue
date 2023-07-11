import { module, test } from 'qunit';

import { setupTest } from 'test-app-for-my-addon/tests/helpers';

module('Unit | Model | common/user', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('common/user', {});
    assert.ok(model);
  });
});
