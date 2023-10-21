import Image from "next/image";
import Links from "./Links";
import { Book } from "@prisma/client";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  const picture = `/books/${book.bookPicture}`;
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <Image src={picture || ""} width={300} height={150} alt="Book Cover" />
      </div>
      <div className="w-full">
        <Links />
      </div>
    </div>
  );
}
