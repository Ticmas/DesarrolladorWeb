
var expect    = require("chai").expect;
var Calculos = require("../app/calculos");
describe("Utilizando expect para testear nuestra función:: ", function() {
 describe("Testeando la función: ", function() {
 it("Check valor de retorno: expect(value).to.equal('value'): ", function() {
 result   = Calculos.test("texto");
 expect(result).to.equal("texto testeada");
 });
  
 });
});

