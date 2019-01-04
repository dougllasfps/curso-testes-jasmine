describe("teste do to equal", function(){
    it("deve validar o uso do toEqual", function(){

        var obj1 = { valor: true }
        var obj2 = { valor: true }

        expect(true).toEqual(true)
        expect(obj1).toEqual(obj2)
    })

    it("deve validar o uso do toEqual com objetos", function(){

        var obj1 = { valor: true }
        var obj2 = { valor: true }

        expect(obj1).toEqual(obj2)
        expect(obj1).not.toBe(obj2)
    })
})