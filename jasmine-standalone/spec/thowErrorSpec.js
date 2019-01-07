describe("throwError", function(){

    var Calculadora = {
        somar : function(n1, n2){
            return n1 + n2;
        }
    }

    beforeEach(function(){
        spyOn(Calculadora, 'somar').and.throwError("erro")
    })

    it("deve validar o uso do throwError", function(){       
        expect(function(){
            Calculadora.somar(1,2)
        }).toThrowError("erro")
    })
})