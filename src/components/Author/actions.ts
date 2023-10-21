import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function deleteLink(id: string) {
  "use server";
  await prisma.authorLinks.delete({ where: { id } });
  revalidatePath("/[handler]/add-links", "page");
}
