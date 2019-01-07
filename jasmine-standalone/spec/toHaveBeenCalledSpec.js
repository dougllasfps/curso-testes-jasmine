describe("toHaveBeenCalled", function(){

    var Calculadora = {
        somar : function(n1, n2){
            return n1 + n2;
        }
    }

    beforeEach(function(){
        spyOn(Calculadora, 'somar')
    })

    it("deve validar o uso do toHaveBeenCalled", function(){
        expect(Calculadora.somar).not.toHaveBeenCalled()
        expect(Calculadora.somar(1,2)).toBeUndefined()

        Calculadora.somar(1,2)
        expect(Calculadora.somar).toHaveBeenCalled()
        expect(Calculadora.somar).toHaveBeenCalledTimes(2)
    })
})