export default function destructuring(obj) {
  const { special } = obj;
  const attacks = [];
  special.forEach((element) => {
    if (!Object.prototype.hasOwnProperty.call(element, 'description')) {
      element.description = 'Описание недоступно';
    }
    attacks.push(element);
  });
  return attacks;
}
