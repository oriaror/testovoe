import PaymentForm from "@/components/PaymentForm/PaymentForm";
import { notFound } from "next/navigation";

async function getData(slug: string) {
  const req = await fetch(`http://localhost:3000/api/operators/${slug}`);
  if (req.status === 404) {
    notFound();
  } else {
    return req.json();
  }
}

export default async function PaymentScreen({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  return <PaymentForm name={data.name} />;
}
