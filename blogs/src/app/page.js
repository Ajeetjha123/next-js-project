import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <div className="container flex flex-col mx-auto justify-center items-center">
        <h2 className="font-bold text-4xl text-white mb-4">
          Brose Our Blog Data
        </h2>
        <Link
          className="bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded "
          href={"blogs"}
        >
          Explore Blogs
        </Link>
      </div>
    </div>
  );
}
