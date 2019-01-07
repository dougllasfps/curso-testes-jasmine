describe("and calls ", function(){

    var Calculadora = {
        somar : function(n1, n2){
            return n1 + n2;
        }
    }

    beforeEach(function(){
        spyOn(Calculadora, 'somar').and.returnValue(10)
    })

    it("deve validar o uso do calls", function(){      
        Calculadora.somar(1,1) 
        expect(Calculadora.somar.calls.count()).toEqual(jasmine.any(Number))
        expect(Calculadora.somar).toHaveBeenCalledWith(1,1)
    })
})