const exemple1 = require('./exemple1')

test("Deve calcular o valor da corrida em dias normais", () => {
  //given arrange
  const distance = 1000
  const date = new Date('2021-07-10T10:00:00')
  //when act
  const price = exemple1.calculeRide(distance, date)
  //then assert
  expect(price).toBe(2100)
})

test("Deve calcular o valor da corrida a noite", () => {
  //given arrange
  const distance = 1000
  const date = new Date('2021-07-10T23:00:00')
  //when act
  const price = exemple1.calculeRide(distance, date)
  //then assert
  expect(price).toBe(3900)
})


test("Deve calcular o valor da corrida no domingo", () => {
  //given arrange
  const distance = 1000
  const date = new Date('2021-07-11T10:00:00')
  //when act
  const price = exemple1.calculeRide(distance, date)
  //then assert
  expect(price).toBe(2900)
})



