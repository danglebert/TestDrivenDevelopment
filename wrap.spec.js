const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns desired output for multiple test cases', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal(`Lorem ipsum dolor ${'\n'}sit eu amet, elit na ${'\n'}magna sem amet nulla ${'\n'}vel purus ac ligula.`);

  })

  xit ('throws an error for edge case', () => {
    expect(wrap('Helloooooooooo', 4).to.equal('Column length needs to be greater than longest string length'))
  })

  xit('handles multiple spaces', () => {
    expect(wrap('      ', 10).to.equal('      '))
    expect(wrap('There  are   multiple   spaces   between  words', 8)).to.equal(``)
  })
});
