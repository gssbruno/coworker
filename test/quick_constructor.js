const assert = require("assert");
const qc = require("../index");
const python = require("../python");

describe("Coworker Python", () => {
  it("Deve retornar o código de uma classe em python.", () => {
    const dogClass = python.makeClass("Cachorro", "raca", "data_nascimento");

    assert.equal(
      dogClass,
      `class Cachorro:\n    def __init__(self,raca,data_nascimento):\n        self.raca = raca\n        self.data_nascimento = data_nascimento`
    );
    console.log(dogClass);
  });

  it("Deve retornar o código de uma classe em python utilizando kwargs como argumentos", () => {});
});
