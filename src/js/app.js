export default function orderByProps(obj, sortingOrder) {
  const newArr1 = [];
  const newArr2 = [];
  for (const elem of Object.keys(obj)) {
    if (sortingOrder.includes(elem)) {
      newArr1.push({ key: elem, value: obj[elem] });
    } else {
      newArr2.push({ key: elem, value: obj[elem] });
    }
  }

  newArr2.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });

  return newArr1.concat(newArr2);
}
