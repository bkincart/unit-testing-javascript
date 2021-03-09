# Unit Testing with JavaScript

---

## What is Unit Testing?

- Well, first, there's automated testing.

---

## What is Automated Testing?

- Code that verifies the code we write, works the way we expect
- Software is prone to human error
- We use code to ensure our software does what we think it will
- As we change things, it protects us from ourselves in ensuring that we didn't unintentionally break something that already existed

---

## Ok, So What is Unit Testing?

- We test our **factory**
- Given certain _inputs_, we expect certain _outputs_

---

## A Simple Example

`src/triple.js`:

```javascript
const triple = num => {
  return num * 3
}
```

- The "black box" we're testing is that: given a number going into the factory, we expect its triple to come out as the finished product.

---

## Verifying Our Assumptions

- We can write tests with real data
- We can run tests to **verify** the function works the way in which we expect

`src/__tests__/triple.test.js`:

```javascript
import triple from '../triple.js'
describe('tripling a number', () => {
  it('triples 3 resulting in 9', () => {
    expect(triple(3)).toEqual(9)
  })
})
```

---

## Jest is an Automated Test Framework

- Here, we're writing a **unit test**
- Jest provides us with `describe`, `it`, and `expect` functions
- Jest is an **open source library** designed to make automated testing easy

---

## Jest should be a `devDependency`

`yarn add jest --dev`

- We need Jest in order to run our automated tests, but it is not required to **run** our code in production.
- To make running our tests easy, we can also add a `scripts` entry to our `package.json` file

---

## Let's Write the First Test

`src/__tests__/triple.test.js`:

```javascript
import triple from '../triple.js'
describe('tripling a number', () => {
  it('triples 3 resulting in 9', () => {
    expect(triple(3)).toEqual(9)
  })
})
```

---

## Let's Strengthen Our Tests with More Examples

```javascript
import triple from "../triple.js"
describe("tripling a number", () => {
  it("triples 3 resulting in 9", () => {
    expect(triple(3)).toEqual(9)
  })

  it("triples 4 resulting in 12", () => {
    expect(triple(3).toEqual(12))
  })

  it("triples 0 resulting in 0", () => {
    expect(triple(0)).toEqual(0)
  })

  it("triples -3 resulting in -9, () => {
    expect(triple(-3)).toEqual(-9)
  })
})
```

---

## When Writing Tests, Consider:

- Right Results
- Boundary Cases (negatives, zero, very high numbers, decimals)
- Error Conditions

---

## What Happens When Our Function is Wrong

```javascript
const triple = num => {
  return num * 2
}
```

- Running our test will now show test failures!
- The function no longer works the way in which we expect

---

## What Happens When We Implement our Function Differently

```javascript
const triple = num => {
  return num + num + num
}
```

- Our tests pass!
- We're still tripling the number, but in a different way
- The "black box" still works as expected

---

## Test Driving a Class

---

## What is Test Driven Development (TDD)?

- We write a failing test first (RED)
- We make the test pass (GREEN)
- We improve the code (REFACTOR)

---

## Let's TDD a `Snowboarder` class.

1. Define behaviors - what do we want the snowboarder to do?
2. Create our test file
3. Write our first failing test (RED)
4. Make our first test pass (GREEN)
5. See if we can make improvements to the code (REFACTOR)

---

## A `SnowBoarder` should:

- have a first name
- have a last name
- have a full name
- start with an empty list of scores
- have a way to register a score
- has an average score
- has a lowest score

---

## Let's Get Coding!
