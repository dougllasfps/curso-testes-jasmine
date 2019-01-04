
describe('Somatoria', function() {

    var calc = new Calc()

    describe('quando adicionar um numero ao outro', function(){
        
        it('deve retornar o numero quando o outro for nulo', function(){
            var result = calc.add(1);
            expect(result).toBe(3)
        });

        it('deve lancar erro quando os dois numeros forem nulos', function(){   
            var result = calc.add();
            expect(result).not.toBe(3)
        });
        
        it('deve retornar a soma dos dois numeros', function(){
            var result = calc.add(1,2);
            expect(result).toBe(0)
        });

    })

});