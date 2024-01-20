const calcTemp = () => {
  const numberTemp = document.getElementById("temp").value;

  const tempSelect = document.getElementById("temp_diff");
  const valueTemp = tempSelect.options[tempSelect.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fahToCel = (fah) => {
    let celsius = Math.round(((fah - 32) * 5) / 9);
    return celsius;
  };

  let result;

  if (valueTemp == "cel") {
    result = celToFah(numberTemp);
    document.getElementById("result").innerHTML = `= ${result} Fahrenheite`;
  } else {
    result = fahToCel(numberTemp);
    document.getElementById("result").innerHTML = `= ${result} Celsius`;
  }
};
