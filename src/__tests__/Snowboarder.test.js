import Snowboarder from '../Snowboarder.js'

describe('a snowboarder', () => {
  const firstName = 'Shaun'
  const lastName = 'White'
  let boarder

  beforeEach(() => {
    boarder = new Snowboarder(firstName, lastName)
  })

  it.only('has a first name', () => {
    expect(boarder.firstName).toEqual(firstName)
  })

  it('has a last name', () => {
    expect(boarder.lastName).toEqual(lastName)
  })

  it('has a full name', () => {
    expect(boarder.getFullName()).toEqual(`${firstName} ${lastName}`)
  })

  it('starts with an empty list of scores', () => {
    expect(boarder.scores).toEqual([])
  })

  it('has a way to register a score', () => {
    boarder.registerScore(100)
    expect(boarder.scores).toEqual([100])
  })

  it('has an average score', () => {
    boarder.registerScore(100)
    boarder.registerScore(50)
    expect(boarder.getAverageScore()).toEqual(75)
  })
  // it("must has a lowest score", () => {})
})
