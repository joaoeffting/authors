import { TYPES_OF_LINKS } from "@/constants";
import AmazonLogo from "@/svgs/AmazonLogo";
import FacebookLogo from "@/svgs/FacebookLogo";
import InstagramLogo from "@/svgs/InstagramLogo";
import TikTokLogo from "@/svgs/TiktokLogo";
import TwitterLogo from "@/svgs/TwitterLogo";
import { AuthorLinks } from "@prisma/client";
import { deleteLink } from "./actions";
import DeleteLink from "./DeleteLink";
import Link from "next/link";
import DefaultLink from "@/svgs/DefaultLink";

interface Props {
  links: Array<AuthorLinks>;
  column?: boolean;
  showEdit?: boolean;
  handler?: string;
  showDelete?: boolean;
}

const getLinkByType = (link: AuthorLinks) => {
  const { type } = link;
  if (type === TYPES_OF_LINKS.AMAZON) {
    return <AmazonLogo />;
  }

  if (type === TYPES_OF_LINKS.INSTAGRAM) {
    return <InstagramLogo />;
  }

  if (type === TYPES_OF_LINKS.FACEBOOK) {
    return <FacebookLogo />;
  }

  if (type === TYPES_OF_LINKS.TWITTER) {
    return <TwitterLogo />;
  }

  if (type === TYPES_OF_LINKS.TIKTOK) {
    return <TikTokLogo />;
  }

  return (
    <div>
      <p>{link.linkName}</p>
    </div>
  );
};

export default function Links({
  links,
  column,
  showEdit,
  showDelete,
  handler,
}: Props) {
  return (
    <div className="px-2">
      <div className="flex justify-between">
        <h2 className="font-bold">Links:</h2>
        <Link href={`${handler}/add-links`}>Edit Links</Link>
      </div>

      <div className={`mt-2 flex gap-2 ${column && "flex-col"} items-center`}>
        {links.map((link) => {
          return (
            <div key={link.id}>
              <a href={link.link}>{getLinkByType(link)}</a>
              {showEdit && <DeleteLink id={link.id} deleteLink={deleteLink} />}
              {showDelete && <Link href={`/${handler}/${link.id}`}>Edit</Link>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
