import PaymentForm from "@/components/PaymentForm/PaymentForm";
import { notFound } from "next/navigation";

async function getData(slug: string) {
  const req = await fetch(process.env.DB_HOST + `/api/operators/${slug}`, {
    cache: "no-store",
  });
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
  try {
    const data = await getData(params.slug);
    return <PaymentForm name={data.name} />;
  } catch (error) {
    console.log(error);
  }
}
