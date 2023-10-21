"use client";

import { useTransition } from "react";

interface Props {
  deleteLink: (id: string) => Promise<void>;
  id: string;
}

export default function DeleteLink({ deleteLink, id }: Props) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-end justify-end">
      <button
        className="px-2"
        disabled={isPending}
        onClick={() => {
          startTransition(() => deleteLink(id));
        }}
      >
        Delete
        {isPending && <span className="loading loading-spinner loading-md" />}
      </button>
    </div>
  );
}
