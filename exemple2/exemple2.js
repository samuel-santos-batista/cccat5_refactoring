const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;


exports.validate = function (rawCpf) {
  if(!rawCpf) return false
  const cpf = cleanCpf(rawCpf)
  if(!isValidLength(cpf)) return false
  if (isMonodigit(cpf)) return false
  const firstControlDigit = calculeCheckDigit(cpf, FACTOR_DIGIT_1)
  const secondControlDigit = calculeCheckDigit(cpf, FACTOR_DIGIT_2)
  const calculatedDigit = `${firstControlDigit}${secondControlDigit}`;
  const checkDigit = extractCheckDigit(cpf)
  return calculatedDigit === checkDigit
}


const cleanCpf = (rawCpf) => rawCpf.replace(/[\.\-]/g, "");

const isValidLength = (cpf) => cpf.length === 11

const isMonodigit = (cpf) => {
  const [firstDigit] = cpf
  return [...cpf].every(digit => digit === firstDigit)
}

const calculeCheckDigit = (cpf, factor) =>{
  const sum = [...cpf].reduce((previousSum, digit) => 
    factor === 1 ?  previousSum : previousSum + (parseInt(digit) * factor--)
  , 0)
  const rest = sum%11;
  return rest === 0 ? 2 : (11 - rest)
}

const extractCheckDigit = function (cpf) {
	return cpf.slice(-2);
}
