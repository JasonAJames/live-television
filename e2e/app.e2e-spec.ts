import { LiveTelevisionPage } from './app.po';

describe('live-television App', function() {
  let page: LiveTelevisionPage;

  beforeEach(() => {
    page = new LiveTelevisionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
