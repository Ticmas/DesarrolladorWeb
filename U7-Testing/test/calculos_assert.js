var assert    = require("chai").assert;
var Calculos = require("../app/calculos");
describe("Utilizando assert para testear nuestra función: ", function() {
 describe("Testeando la función: ", function() {
 it("Check valor de retorno: assert.equal(value,'value'): ", function() {
 result   = Calculos.test("texto");
 assert.equal(result, "texto testeada");
 });
 }); 
});