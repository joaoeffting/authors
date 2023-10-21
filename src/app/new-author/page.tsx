import FormSubmit from "@/components/FormSubmit";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import path from "path";
import { writeFile } from "fs/promises";

interface Props {}

export const metadata = {
  title: "New User - Authors",
};

async function addUser(formData: FormData) {
  "use server";

  const handler = formData.get("handler")?.toString();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();

  if (!name || !description || !handler) {
    throw Error("Missing required fields");
  }

  const profilePicture = formData.get("profilePicture");
  let filename;
  if (profilePicture) {
    // @ts-ignore
    const buffer = Buffer.from(await profilePicture.arrayBuffer());
    // @ts-ignore
    filename = Date.now() + profilePicture.name.replaceAll(" ", "_");
    await writeFile(
      path.join(process.cwd(), "public/authors/" + filename),
      buffer
    );
  }

  await prisma.author.create({
    data: {
      name,
      description,
      handler,
      profilePicture: filename,
      links: undefined,
    },
  });
  redirect("/");
}

export default function NewAuthor() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Habit</h1>
      <form action={addUser}>
        <input
          type="file"
          required
          name="profilePicture"
          accept="image/png, image/jpeg"
          className="input-bordered input mb-3 w-full"
        />
        <input
          type="text"
          required
          name="handler"
          placeholder="Type a user handlerr"
          className="input-bordered input mb-3 w-full"
        />
        <input
          type="text"
          required
          name="name"
          placeholder="Type your name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Type a description"
          className="textarea-bordered textarea mb-3 w-full"
        ></textarea>
        <FormSubmit className="btn-block">Add User</FormSubmit>
      </form>
    </div>
  );
}
