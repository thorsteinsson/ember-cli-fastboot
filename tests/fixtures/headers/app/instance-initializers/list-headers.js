export default {
  name: 'test-headers',
  initialize(applicationInstance) {
    let listCookiesController = applicationInstance.lookup('controller:list-headers');
    let fastbootInfo = applicationInstance.lookup('info:-fastboot');

    listCookiesController.set('instanceInitializerHeader', fastbootInfo.headers['x-fastboot-info']);
  }
};
