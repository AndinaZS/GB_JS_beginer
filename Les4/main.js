console.log('Задача 1');
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }

console.log(Object.values(numbers).filter(el => el >= 3))

// -------------------------

console.log('Задача 2');
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// -------------------------

console.log('Задача 3');
const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];

  products.forEach(product => {
      product.price *= 0.85;
      console.log(product)   
  });

// -------------------------

  console.log('Задача 4');
  const productstList = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg",
      ],
    },
    {
      id: 8,
      price: 78,
    },
  ];


console.log(productstList.filter(product => product.photos && product.photos != 0));
console.log(productstList.sort((prev, next) => prev.price - next.price));

// -------------------------

console.log('Задача 5');
const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const dictObj = {};
en.forEach((en, i) => dictObj[en] = ru[i]);
console.log(dictObj);

// -------------------------

console.log('Задача 6');
const numbers2 = {
    key1: {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    },
    key2: {
    keyin1: 4,
    keyin2: 5,
    keyin3: 6,
    },
    }

let result = 0; 
Object.values(numbers2).forEach(el => 
  result += Object.values(el).reduce((sum, current) => sum + current)
);
console.log(result);
