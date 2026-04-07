
import { somar, subtrair, multiplicar, dividir, exponenciar } from '../calculadora/operacoes.js'

// descrição   +   função que será executada
test("Testar a função somar", ()=>{
    // expectativa de retorno 15
    let resultado = somar(100, 5)
    expect(resultado).toBe(105)
})

test("Testar a função subtrair", ()=>{
    // expectativa de retorno 15
    let resultado = subtrair(100, 5)
    expect(resultado).toBe(95)
})

test("Testar a função multiplicar", ()=>{
    // expectativa de retorno 15
    let resultado = multiplicar(100, 5)
    expect(resultado).toBe(500)
})

test("Testar a função dividir", ()=>{
    // expectativa de retorno 15
    let resultado = dividir(100, 5)
    expect(resultado).toBe(20)
})

test("Testar a função exponenciar", ()=>{
    // expectativa de retorno 15
    let resultado = exponenciar(2,3)
    expect(resultado).toBe(8)
})

