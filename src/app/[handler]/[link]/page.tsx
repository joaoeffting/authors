import AddOrEditLinksForm from "@/components/Author/AddOrEditLinksForm";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

interface Props {
  params: {
    handler: string;
    link: string;
  };
}

async function editLinks(handler: string, linkId: string, formData: FormData) {
  "use server";

  const type = formData.get("type")?.toString();
  const src = formData.get("src")?.toString();
  const linkName = formData.get("linkName")?.toString();

  if (!type || !src || !linkName || !linkId) {
    throw Error("Missing required fields");
  }

  await prisma.authorLinks.update({
    where: { id: linkId },
    data: {
      type,
      src,
      linkName,
    },
  });
  redirect(`/${handler}/add-links`);
}

export default async function EditLink({ params: { handler, link } }: Props) {
  const linkToEdit = await prisma.authorLinks.findUnique({
    where: { id: link },
  });

  if (!linkToEdit) {
    return <div>Not found</div>;
  }
  const linkId = link;
  const editLinksWithHandler = editLinks.bind(null, handler, linkId);
  return (
    <div className="p-2">
      <h1 className="mb-3 text-lg font-bold">Add Link</h1>
      <AddOrEditLinksForm
        action={editLinksWithHandler}
        link={linkToEdit}
        buttonLabel="Update Link"
      />
    </div>
  );
}
