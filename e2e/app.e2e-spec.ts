import { HttpExampleAngular2Page } from './app.po';

describe('http-example-angular2 App', function() {
  let page: HttpExampleAngular2Page;

  beforeEach(() => {
    page = new HttpExampleAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
