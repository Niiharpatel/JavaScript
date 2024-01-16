function otpGenerator(number) {
  let otp = "";

  for (let i = 0; i < number; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }

  return otp;
}

console.log(otpGenerator(4));
