describe("teste do to toBe", function(){
    it("deve validar o uso do toBe", function(){
        expect(true).toBe(true)
    })

    it("deve validar o uso do toBe com objetos", function(){

        var obj1 = { valor: true }
        var obj2 = { valor: true }

        expect(obj1).not.toBe(obj2)
    })
})