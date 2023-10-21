import AuthorPage from "@/components/Author/Author";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface Props {
  params: {
    handler: string;
  };
}

const getAuthor = cache(async (handler: string) => {
  const author = await prisma.author.findUnique({
    where: {
      handler,
    },
    include: { links: true, books: true },
  });
  if (!author) {
    notFound();
  }
  return author;
});

export async function generateMetadata({
  params: { handler },
}: Props): Promise<Metadata> {
  const author = await getAuthor(handler);
  return {
    title: author.name + " - Authors",
    description: author.description,
    openGraph: {
      images: [{ url: `/authors/${author.profilePicture}` }],
    },
  };
}

export default async function Page({ params: { handler } }: Props) {
  const author = await getAuthor(handler);
  return <AuthorPage author={author} />;
}
