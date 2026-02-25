import { useParams } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>Blog dinámico</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}