import Service from '@ember/service';

export default class StoreService extends Service {}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:store')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('store') declare altName: StoreService;`.
declare module '@ember/service' {
  interface Registry {
    store: StoreService;
  }
}
