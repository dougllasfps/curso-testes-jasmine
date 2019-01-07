describe("callThrough", function(){

    var Calculadora = {
        somar : function(n1, n2){
            return n1 + n2;
        }
    }

    beforeEach(function(){
        spyOn(Calculadora, 'somar').and.callThrough()
    })

    it("deve validar o uso do callThrough", function(){
        expect(Calculadora.somar(1,2)).toBeDefined()

    })
})