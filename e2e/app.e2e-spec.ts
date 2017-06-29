import { HouseAngular2Page } from './app.po';

describe('house-angular2 App', () => {
  let page: HouseAngular2Page;

  beforeEach(() => {
    page = new HouseAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
