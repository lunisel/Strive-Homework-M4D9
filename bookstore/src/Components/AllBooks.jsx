import booksFantasy from "../data/fantasy.json";
import booksHistory from "../data/history.json";
import booksHorror from "../data/horror.json";
import booksRomance from "../data/romance.json";
import booksScifi from "../data/scifi.json";

const AllBooks = () => {
  let allBooks = [
    ...booksFantasy,
    ...booksHistory,
    ...booksHorror,
    ...booksRomance,
    ...booksScifi,
  ];
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  let books = shuffle(allBooks);
  return books;
};

export default AllBooks;
