import { rewrite } from "next/navigation";

export default async function Page({ params }) {
  if (params.slug === "dash") {
    rewrite("/");
  }

  return <div>I am the about page! Check the console on the server.</div>;
}

export async function generateStaticParams() {
  return [{ slug: "dash" }, { slug: "about" }]; // Example dynamic routes
}
