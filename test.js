test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 108 yen", function () {
    const { fromDollarToYen } = require('./app.js');
  
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBeCloseTo(106.58, 1); // 1 dolar debería ser 108 yenes
  });
  

test("One yen should be 0.0063 pounds", function () {
    const { fromYenToPound } = require('./app.js');
  
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBeCloseTo(0.0062549, 4); // 1 yen debería ser 0.0063 libras
  });
  