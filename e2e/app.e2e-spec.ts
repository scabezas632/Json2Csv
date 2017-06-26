import { TableCSVPage } from './app.po';

describe('table-csv App', () => {
  let page: TableCSVPage;

  beforeEach(() => {
    page = new TableCSVPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
