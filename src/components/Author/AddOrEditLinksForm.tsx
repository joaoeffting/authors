import { TYPES_OF_LINKS } from "@/constants";
import FormSubmit from "../FormSubmit";
import { AuthorLinks } from "@prisma/client";

interface Props {
  action: (formData: FormData) => Promise<void>;
  authorId?: string;
  link?: AuthorLinks;
  buttonLabel: string;
  handler?: string;
}

export default function AddOrEditLinksForm({
  action,
  authorId,
  link,
  buttonLabel,
  handler,
}: Props) {
  return (
    <form action={action}>
      <input type="hidden" name="authorId" value={authorId} />
      <input type="hidden" name="linkId" value={link?.id} />
      <input type="hidden" name="handler" value={handler} />

      <select
        className="select-bordered select mb-3 w-full"
        name="type"
        defaultValue={link?.type}
      >
        <option value={TYPES_OF_LINKS.AMAZON}>Amazon</option>
        <option value={TYPES_OF_LINKS.FACEBOOK}>Facebook</option>
        <option value={TYPES_OF_LINKS.INSTAGRAM}>Instagram</option>
        <option value={TYPES_OF_LINKS.TIKTOK}>TikTok</option>
        <option value={TYPES_OF_LINKS.TWITTER}>Twitter</option>
        <option value={TYPES_OF_LINKS.LINK}>Normal Link</option>
      </select>

      <input
        type="text"
        required
        name="linkName"
        placeholder="Description"
        className="input-bordered input mb-3 w-full"
        defaultValue={link?.linkName || ""}
      />

      <input
        type="text"
        required
        name="src"
        placeholder="URL"
        className="input-bordered input mb-3 w-full"
        defaultValue={link?.src}
      />
      <FormSubmit className="btn-block">{buttonLabel}</FormSubmit>
    </form>
  );
}
