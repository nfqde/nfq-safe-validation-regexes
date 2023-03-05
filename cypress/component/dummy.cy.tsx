/* eslint-disable @typescript-eslint/no-unused-expressions */
import {email} from '../../src/index';

describe('dummy.cy.tsx', () => {
    it('playground', () => {
        expect(email.test('c.kruppe@nfq.de')).to.be.true;
    });
});