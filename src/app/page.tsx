import Link from "next/link";
import TextBox from "@/components/RawTextBox";

export default function HomePage() {
  return (
    <main>
      <TextBox>
        <ul className="daisy-menu mx-auto text-lg rounded-box text-base-content min-h-full w-full p-3">
          <li>
            <Link href='/math'>Math</Link>
          </li>
          <li>
            <details open>
              <summary>CS</summary>
              <ul>
                <li><Link href="/CS/DataStructure">数据结构</Link></li>
                <li><Link href="/CS/OS">操作系统</Link></li>
                <li><Link href="/CS/Architecture">计算机组成原理</Link></li>
                <li><Link href="/CS/Network">计算机网络</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <Link href='/english'>English</Link>
          </li>
          <li><Link href='/Tasks'>Tasks</Link></li>
          <li><Link href='/configs'>Configs</Link></li>
        </ul>
      </TextBox>
    </main>
  );
}
