import AddOrEditLinksForm from "@/components/Author/AddOrEditLinksForm";
import Links from "@/components/Author/Links";
import FormSubmit from "@/components/FormSubmit";
import { TYPES_OF_LINKS } from "@/constants";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

interface Props {
  params: {
    handler: string;
  };
}

async function addLinks(authorId: string, formData: FormData) {
  "use server";

  const type = formData.get("type")?.toString();
  const src = formData.get("src")?.toString();
  const linkName = formData.get("linkName")?.toString();

  if (!type || !src || !authorId || !linkName) {
    throw Error("Missing required fields");
  }

  await prisma.authorLinks.create({
    data: {
      type,
      src,
      authorId,
      linkName,
    },
  });
  revalidatePath("/[handler]/add-links");
}

export default async function Page({ params: { handler } }: Props) {
  const author = await prisma.author.findUnique({
    where: { handler },
    include: { links: true },
  });

  if (!author) {
    return <div>Not found</div>;
  }
  const links = author?.links;
  const authorId = author.id;
  const addLinksWithParams = addLinks.bind(null, authorId);
  return (
    <div className="p-2">
      <h1 className="mb-3 text-lg font-bold">Add Link</h1>
      <AddOrEditLinksForm action={addLinksWithParams} buttonLabel="Add Link" />
      <Links
        links={links}
        handler={author.handler}
        column
        showEdit
        showDelete
      />
    </div>
  );
}
