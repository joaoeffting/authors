import Books from "../Books/Books";
import Divider from "../Divider";
import AboutSection from "./AboutSection";
import Avatar from "./Avatar";
import Links from "./Links";
import { AuthorWithLinksAndBooks } from "@/types/Author";

interface Props {
  author: AuthorWithLinksAndBooks;
}

export default function AuthorPage({ author }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Avatar profilePicture={author.profilePicture} />
      <AboutSection name={author.name} description={author.description} />
      <Divider />
      <Links links={author.links} handler={author.handler} />
      <Divider />
      <Books books={author.books} />
    </div>
  );
}
