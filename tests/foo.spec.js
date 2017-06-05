import { expect } from 'chai';
import Foo from '../src/Foo';


describe('Foo', ()=> {
  it('exists', ()=> {
    expect(Foo).to.be.ok;
  });

  describe('#bar', ()=> {
    it('returns bazz', ()=> {
      const foo = new Foo();
      const actual = foo.bar();
      expect(actual).to.equal('bazz');
    });
  });
});
