import Link from "next/link";

export default function NotFound() {
  return (
    <div className="font-bold text-center text-lg text-red-700">
      <h2 className="">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-blue-500 hover:underline text-3xl">Return Home</Link>
    </div>
  );
}
