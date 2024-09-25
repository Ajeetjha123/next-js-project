import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>welocme to Recipe App</h1>
      <Link href={"recipe"}>Explore Recipe</Link>
    </div>
  );
}
