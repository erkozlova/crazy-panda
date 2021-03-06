type sortItem = { number: number; name: string; surname: string; age: number };

export const TITLE_FIRST = [
  {
    title: 'Номер',
    id: 'number',
    key: 'title-number',
    sorter: (a: sortItem, b: sortItem): number => (a.number > b.number ? 1 : -1),
  },
  {
    title: 'Имя',
    id: 'name',
    key: 'title-name',
    sorter: (a: sortItem, b: sortItem): number =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
  },
  {
    title: 'Фамилия',
    id: 'surname',
    key: 'title-surname',
    sorter: (a: sortItem, b: sortItem): number =>
      a.surname.toLowerCase() > b.surname.toLowerCase() ? 1 : -1,
  },
  {
    title: 'Возраст',
    id: 'age',
    key: 'title-age',
    sorter: (a: sortItem, b: sortItem): number => a.age - b.age,
  },
];

export const DATA_FIRST = [
  {
    number: 1,
    name: 'Zak',
    surname: 'Mnname',
    age: 16,
  },
  {
    number: 2,
    name: 'Anna',
    surname: 'Zaname',
    age: 1,
  },
  {
    number: 3,
    name: 'Kris',
    surname: 'Annname',
    age: 8,
  },
  {
    number: 4,
    name: 'Boris',
    surname: 'borname',
    age: 37,
  },
  {
    number: 5,
    name: 'Peter',
    surname: 'Lirname',
    age: 26,
  },
  {
    number: 6,
    name: 'Lisa',
    surname: 'pername',
    age: 16,
  },
  {
    number: 7,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 8,
    name: 'name',
    surname: 'surname',
    age: 19,
  },
  {
    number: 9,
    name: 'name',
    surname: 'surname',
    age: 2,
  },
  {
    number: 10,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 11,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 12,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 13,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 14,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 15,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 16,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 17,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 18,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 19,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 20,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 21,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 22,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 23,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 24,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 25,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 26,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 27,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 28,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 29,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 30,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 31,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 32,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 33,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 34,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 35,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 36,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 37,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 38,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 39,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 40,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 41,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 42,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 43,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 44,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 45,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 46,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 47,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 48,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 49,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 50,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 51,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 52,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 53,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 54,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 55,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 56,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 57,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 58,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 59,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 60,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 61,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 62,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 63,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 64,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 65,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 66,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 67,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 68,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 69,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 70,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 71,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 72,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 73,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 74,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 75,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 76,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 77,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 78,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 79,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
  {
    number: 80,
    name: 'name',
    surname: 'surname',
    age: 10,
  },
];
