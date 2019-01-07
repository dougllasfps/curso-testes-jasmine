describe("returnValue", function(){

    var Calculadora = {
        somar : function(n1, n2){
            return n1 + n2;
        }
    }

    beforeEach(function(){
        spyOn(Calculadora, 'somar').and.returnValues(20,10)
    })

    it("deve validar o uso do returnValue", function(){
        expect(Calculadora.somar(1,2)).toEqual(20)
        expect(Calculadora.somar(1,2)).toEqual(10)
        expect(Calculadora.somar(1,2)).toBeUndefined()

    })
})