const exemple2 = require('./exemple2')

test('Deve testar um cpf valido', () => {
  const cpf = '146.293.386-67'
  const isValid = exemple2.validate(cpf)
  expect(isValid).toBeTruthy()
})

test('Deve testar um cpf invalido com digitos iguais', () => {
  const cpf = '111.111.111-11'
  const isValid = exemple2.validate(cpf)
  expect(isValid).toBeFalsy()
})

test('Deve testar um cpf invalido com digitos iguais', () => {
  const cpf = '146.293.386-68'
  const isValid = exemple2.validate(cpf)
  expect(isValid).toBeFalsy()
})