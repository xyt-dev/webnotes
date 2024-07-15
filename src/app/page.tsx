import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="m-16">
        <Link href='/english' className="text-blue-600 text-center mx-auto">English</Link>
      </div>
    </main>
  );
}
