import triple from '../triple.js'

describe('tripling a number', () => {
  it('triples 3 resulting in 9', () => {
    expect(triple(3)).toEqual(9)
  })

  it('triples 4 resulting in 12', () => {
    expect(triple(4)).toEqual(12)
  })

  it('triples -3 resulting in -9', () => {
    expect(triple(-3)).toEqual(-9)
  })

  it('triples 0 resulting in 0', () => {
    expect(triple(0)).toEqual(0)
  })

  // it('throws an error if they hand in a string', () => {
  //   expect(triple("hello")).toEqual("Please provide a number")
  // })
})
