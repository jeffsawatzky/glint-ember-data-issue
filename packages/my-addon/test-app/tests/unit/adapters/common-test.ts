import { module, test } from 'qunit';

import { setupTest } from 'test-app-for-my-addon/tests/helpers';

module('Unit | Adapter | common', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:common');
    assert.ok(adapter);
  });
});
