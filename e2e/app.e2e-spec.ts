import { ChartsBaddumpPage } from './app.po';

describe('charts-baddump App', function() {
  let page: ChartsBaddumpPage;

  beforeEach(() => {
    page = new ChartsBaddumpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
