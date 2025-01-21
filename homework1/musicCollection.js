/**
 * Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
 */

const musicCollection = [
    { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
    { title: "Thriller", artist: "Michael Jackson", year: 1982 },
    { title: "Back in Black", artist: "AC/DC", year: 1980 },
    { title: "Rumours", artist: "Fleetwood Mac", year: 1977 }
];

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: musicCollection[this.current++] }
                : { done: true }
        }
    };
};

for (const music of musicCollection) {
    console.log(`${music.title} - ${music.artist} (${music.year})`);
}

