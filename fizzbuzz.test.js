const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  test("should print 0 when it receives 0", () => {
    const expected = 0;
    const result = fizzbuzz(0);
    expect(expected).toBe(result);
  });

  test("should print 1 when it receives 1", () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });

  test("should print fizz when it receives 3", () =>{
    const expected = 'fizz';
    const result = fizzbuzz(3);
    expect(expected).toBe(result);
  });

  test("should print fizz when it receives multiple of 3", () =>{
    const expected = 'fizz';
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  });

  test("should print fizz when it receives 5", () =>{
    const expected = 'buzz';
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });

  test("should print fizz when it receives multiple of 5", () =>{
    const expected = 'buzz';
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  });

  test("should print fizzbuzz when it receives multiple of 3 and multple of 5", () =>{
    const expected = 'fizzbuzz';
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });

});
