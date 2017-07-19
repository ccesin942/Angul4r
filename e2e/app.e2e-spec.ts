import { MamaloPage } from './app.po';

describe('mamalo App', () => {
  let page: MamaloPage;

  beforeEach(() => {
    page = new MamaloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
