import { module, test } from 'qunit';

import StoreService from 'my-addon/services/store';
import { setupTest } from 'test-app-for-my-addon/tests/helpers';

module('Unit | Model | common/user', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:store', StoreService);
  });

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('common/user', {});
    assert.ok(model);
  });
});
