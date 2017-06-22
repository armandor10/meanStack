import { WoikAppPage } from './app.po';

describe('woik-app App', () => {
  let page: WoikAppPage;

  beforeEach(() => {
    page = new WoikAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
