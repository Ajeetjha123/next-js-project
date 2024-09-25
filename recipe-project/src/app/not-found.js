import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1>his Page Is Not Found</h1>
      <Link href="/">Go To Home Page</Link>
    </div>
  );
}
