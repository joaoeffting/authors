import Image from "next/image";
import Links from "./Links";

interface Props {}

export default function BookCard() {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&q=80&w=2764&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={150}
          alt="Book Cover"
        />
      </div>
      <div className="w-full">
        <Links />
      </div>
    </div>
  );
}
