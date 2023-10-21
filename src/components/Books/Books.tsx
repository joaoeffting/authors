import { Book } from "@prisma/client";
import BookCard from "./BookCard";

interface Props {
  books: Array<Book>;
}

export default function Books({ books }: Props) {
  return (
    <div className="px-2">
      <h1 className="text-lg font-bold">Books</h1>
      <div className="my-4 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
}
