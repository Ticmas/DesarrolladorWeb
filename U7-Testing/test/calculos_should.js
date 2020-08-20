
var should    = require("chai").should();
var Calculos = require("../app/calculos");
describe("Utilizando should para testear nuestra función:: ", function() {
 describe("Testeando la función: ", function() {
 it("Check valor de retorno: value.should.equal(value) : ", function() {
 result   = Calculos.test("texto");
 result.should.equal("texto testeada");
 });
 });
});

