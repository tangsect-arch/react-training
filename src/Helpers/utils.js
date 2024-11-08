function generateRandomString(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
}

export function generateRandomArray(numStrings) {
  const randomArray = [];
  for (let i = 0; i < numStrings; i++) {
    const randomLength = Math.floor(Math.random() * (64 - 8 + 1)) + 8;
    randomArray.push(generateRandomString(randomLength));
  }
  return randomArray;
}
