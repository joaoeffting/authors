import FormSubmit from "@/components/FormSubmit";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import path from "path";
import { writeFile } from "fs/promises";

interface Props {
  params: {
    handler: string;
  };
}

const addBook = async (handler: string, formData: FormData) => {
  "use server";

  const bookPicture = formData.get("bookPicture");

  let filename;

  if (bookPicture) {
    // @ts-ignore
    const buffer = Buffer.from(await bookPicture.arrayBuffer());
    // @ts-ignore
    filename = Date.now() + bookPicture.name.replaceAll(" ", "_");
    await writeFile(
      path.join(process.cwd(), "public/books/" + filename),
      buffer
    );
  }

  const author = await prisma.author.findUnique({ where: { handler } });
  if (!author) {
    throw Error("Invalid User");
  }
  await prisma.book.create({
    data: {
      bookPicture: filename,
      authorId: author?.id,
    },
  });
  redirect(`/${handler}`);
};

export default function AddBook({ params: { handler } }: Props) {
  const addBookWithHandler = addBook.bind(null, handler);
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Habit</h1>
      <form action={addBookWithHandler}>
        <input
          type="file"
          required
          name="bookPicture"
          accept="image/png, image/jpeg"
          className="input-bordered input mb-3 w-full"
        />

        <FormSubmit className="btn-block">Add User</FormSubmit>
      </form>
    </div>
  );
}
