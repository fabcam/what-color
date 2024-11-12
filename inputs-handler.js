document.getElementById('apiForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  let inputValue = document.getElementById('inputField').value;
  inputValue = inputValue.replace('#', '');

  try {
    const res = await getColorNameAPI(inputValue);
    document.getElementById('result').innerText = `${res}`;
    document.getElementById("colorSquare").style.backgroundColor="#" + inputValue;
  } catch (error) {
    document.getElementById('result').innerText = `Error: ${error.message}`;
  }
});

document.getElementById('apiForm2').addEventListener('submit', async function (event) {
  event.preventDefault();
  let inputValue = document.getElementById('inputField2').value;
  inputValue = inputValue.replace('#', '');

  try {
    const res = await getApproximateColorName(inputValue, false);
    document.getElementById('result2').innerText = `${res}`;
    document.getElementById("colorSquare2").style.backgroundColor="#" + inputValue;
  } catch (error) {
    document.getElementById('result2').innerText = `Error: ${error.message}`;
  }
});

document.getElementById('apiForm3').addEventListener('submit', async function (event) {
  event.preventDefault();
  let inputValue = document.getElementById('inputField3').value;
  inputValue = inputValue.replace('#', '');

  try {
    const res = await getApproximateColorName(inputValue, true);
    document.getElementById('result3').innerText = `${res}`;
    document.getElementById("colorSquare3").style.backgroundColor="#" + inputValue;
  } catch (error) {
    document.getElementById('result3').innerText = `Error: ${error.message}`;
  }
});

document.getElementById('eyeDropperBtn').addEventListener('click', async () => {
  if (window.EyeDropper == undefined) {
    console.error('EyeDropper API is not supported on this platform');
  }

  let eyeDropper = new EyeDropper();
  eyeDropper.open()
  .then(colorSelectionResult => {
      const colorCode = colorSelectionResult.sRGBHex
      document.getElementById('inputField').value = colorCode;
      document.getElementById('inputField2').value = colorCode;
      document.getElementById('inputField3').value = colorCode;
  })
  .catch(error => {
      // handle the user choosing to exit eyedropper mode without a selection
  });
})