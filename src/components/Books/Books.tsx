import BookCard from "./BookCard";

interface Props {}

export default function Books() {
  return (
    <div className="px-2">
      <h1 className="text-lg font-bold">Books</h1>
      <div className="my-4 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
