import Image from "next/image";
import defaultProfileSvg from "../../svgs/default-profile.svg";

interface Props {
  profilePicture: string | null;
}

export default function Avatar({ profilePicture }: Props) {
  const picture = `/authors/${profilePicture}`;
  return (
    <div className="avatar m-auto pt-10">
      <div className="w-24 rounded">
        <Image
          src={picture || defaultProfileSvg}
          width={80}
          height={80}
          alt="Author Avatar"
        />
      </div>
    </div>
  );
}
