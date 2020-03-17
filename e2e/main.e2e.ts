import {expect} from 'chai';
import {SpectronClient} from 'spectron';

import commonSetup from './common-setup';

describe('SequenceOne-Client App', function () {
  commonSetup.apply(this);

  let browser: any;
  let client: SpectronClient;

  beforeEach(function () {
    client = this.app.client;
    browser = client as any;
  });

  it('should display message saying App works !', async function () {
    const text = await browser.getText('app-home h1');
    expect(text).to.equal('Welcome to Sequence One' );
  });

  it('creates initial windows', async function () {
    const count = await client.getWindowCount();
    expect(count).to.equal(1);
  });

});
