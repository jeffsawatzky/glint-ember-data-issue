import Store from '@ember-data/store';

export default class StoreService extends Store {
  adapterFor() {
    return super.adapterFor('common' as never);
  }
}
