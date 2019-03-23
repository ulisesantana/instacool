import * as assert from 'assert'
import { fromTicketToBranch } from './StringHelper'

describe('String Helper', () => {
  it('From Jira ticket format to git branch format', () => {
    const ticket = '[ZAM-364] Create a new section/view "Visión"';
    const branch = 'ZAM-364_Create_a_new_section/view_Vision';
    assert.strictEqual(fromTicketToBranch(ticket), branch)
  })
});