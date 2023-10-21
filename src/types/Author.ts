import { Prisma } from "@prisma/client";

export type AuthorWithLinksAndBooks = Prisma.AuthorGetPayload<{
  include: { links: true; books: true };
}>;
