import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="m-16">
        <Link href='/math' className="text-blue-600 text-center w-min text-2xl mx-auto block mb-6">Math</Link>
        <Link href='/CS' className="text-blue-600 text-center w-min text-2xl mx-auto block mb-6">CS</Link>
        <Link href='/english' className="text-blue-600 text-center w-min text-2xl mx-auto block mb-6">English</Link>
        <Link href='/configs' className="text-blue-600 text-center w-min text-2xl mx-auto block mb-6">Configs</Link>
      </div>
    </main>
  );
}
