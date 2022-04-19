export default function orderByProps(obj, arr) {
  const objUser = { ...obj };
  const firstArray = [];
  const secondArray = [];
  arr.forEach((element) => {
    firstArray.push({ key: element, value: objUser[element] });
    delete objUser[element];
  });
  for (const prop in objUser) {
    if (Object.prototype.hasOwnProperty.call(objUser, prop)) {
      secondArray.push({ key: prop, value: objUser[prop] });
    }
  }
  secondArray.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });
  return firstArray.concat(secondArray);
}
