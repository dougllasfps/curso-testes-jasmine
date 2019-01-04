describe("teste do to toMatch", function(){
    it("deve validar o uso do toMatch", function(){
        var texto = "teste com JASMINE"
        var cep = "60360-640"
        
        expect(texto).toMatch(/jasmine/i)
        expect(texto).toMatch("JASMINE")
        expect(cep).toMatch(/^\d{5}-\d{3}$/)
    })

})