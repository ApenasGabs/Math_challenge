function password(pwd) {
  let numberOne = 0;
  let numberZero = 0;

  let newPwd = [];

  pwd.forEach((item) => {
    item.split("").map((value, index, _) => {
      if (value == 1) {
        numberOne++;
      }

      if (value == 0) {
        numberZero++;
      }

      if (pwd.length - 1 == index) {
        if (numberOne >= numberZero) {
          newPwd.push("1");
        } else {
          newPwd.push("0");
        }

        numberOne = 0;
        numberZero = 0;
      }
    });
  });

  return newPwd.join("");
}

let arr = [
  "1001011111",
  "0110100000",
  "1110001010",
  "0111010101",
  "0011100110",
  "1010011001",
  "1101100100", 
  "1011010100",
  "1001100111",
  "1000011000",
];

console.log(password(arr));
