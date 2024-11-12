
async function getColorNameAPI(hexCode) {
  const response = await fetch(`https://www.thecolorapi.com/id?hex=${encodeURIComponent(hexCode)}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const res = await response.json();
  return res.name.value;
}