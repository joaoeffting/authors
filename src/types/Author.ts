import { Prisma } from "@prisma/client";

export type AuthorWithLinks = Prisma.AuthorGetPayload<{
  include: { links: true };
}>;
