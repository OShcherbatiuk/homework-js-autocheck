function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

    for (const i of order) {
        total += i
    }
    
  // Пиши код выше этой строки
  return total;
}


// Цикл for...of
// Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

// for (const variable of iterable) {
//   // тело цикла
// }
// variable — переменная, которая будет хранить значение элемента на каждой итерации.
// iterable — коллекция, которая имеет перечислимые элементы, например массив.
// const planets = ['Земля', 'Марс', 'Венера'];

// for (const planet of planets) {
//   console.log(planet);
// }
// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.