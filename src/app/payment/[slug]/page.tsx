import PaymentForm from "@/components/PaymentForm/PaymentForm";
import { notFound, redirect } from "next/navigation";

async function getData(slug: string) {
  const req = await fetch(process.env.DB_HOST + `/api/operators/${slug}`, {
    cache: "no-store",
  });
  if (req.status === 404) {
     throw new Error('not found');
  } else {
    return req.json();
  }
}

export default async function PaymentScreen({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const data = await getData(params.slug);
    return <PaymentForm name={data.name} />;
  } catch (error) {
    notFound();
  }
}
