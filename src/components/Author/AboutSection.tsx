interface Props {
  name: string;
  description: string;
}

export default function AboutSection({ name, description }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="m-auto px-2 font-bold">{name}</h3>
      <p className="m-auto px-2">{description}</p>
    </div>
  );
}
