import { TYPES_OF_LINKS } from "@/constants";
import FormSubmit from "../FormSubmit";
import { AuthorLinks } from "@prisma/client";

interface Props {
  action: (formData: FormData) => Promise<void>;
  link?: AuthorLinks;
  buttonLabel: string;
}

export default function AddOrEditLinksForm({
  action,
  link,
  buttonLabel,
}: Props) {
  return (
    <form action={action}>
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
