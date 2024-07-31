import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <ul className="daisy-menu mx-auto text-[1rem] bg-base-200 rounded-box text-base-content min-h-full min-w-[800px] w-[30%] p-6">
        <li>
          <Link href='/math'>Math</Link>
        </li>
        <li>
          <details open>
          <summary>CS</summary>
          <ul>
            <li><Link href="/CS/OS">操作系统</Link></li>
            <li><Link href="/CS/Network">计算机网络</Link></li>
          </ul>
          </details>
        </li>
        <li>
          <Link href='/english'>English</Link>
        </li>
        <li><Link href='/configs'>Configs</Link></li>
      </ul>
    </main>
  );
}
