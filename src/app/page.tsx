import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="m-16">
        <Link href='/math' className="text-blue-600 text-center text-2xl mx-auto block pb-6">Math</Link>
        <Link href='/english' className="text-blue-600 text-center text-2xl mx-auto block pb-6">English</Link>
      </div>
    </main>
  );
}
