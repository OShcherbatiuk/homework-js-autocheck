function findLongestWord(string) {
  // Пиши код ниже этой строки
  const words = string.split(' ')
  let longestWord = string[0]
  for (const word of words) 
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  return longestWord

  // Пиши код выше этой строки
}

// Поиск самого длинного слова
// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.