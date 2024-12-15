export default async function Page({ params }) {
  let languages = ["python", "c#", "javascript"];

  if (languages.includes(params.slug)) {
    return <div>My Post: {params.slug + " yayyyyyy"}</div>;
  } else {
    return <div>Post not found</div>;
  }
}

export async function generateStaticParams() {
  return ["python", "c#", "javascript"].map((slug) => ({ slug }));
}
