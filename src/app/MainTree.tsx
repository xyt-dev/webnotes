import Link from "next/link"
export default function MainTree() {
  return (
    <ul className="daisy-menu mx-auto bg-base-100 text-base-content min-h-full w-80 p-4">
      <li>
        <Link href='/'>🥳MainPage</Link>
      </li>
      <li>
        <details open>
          <summary>Math</summary>
          <ul>
            <li><Link href='/math'>1000题</Link></li>
            <li><Link href='https://xy6.notion.site'>Notion笔记</Link></li>
          </ul>
        </details>
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
        <details open>
        <summary>English</summary>
        <ul>
          <li><Link href='/english'>阅读的逻辑</Link></li>
          <li><Link href="/english/accumulation">Accumulation</Link></li>
        </ul>
        </details>
      </li>
      <li><Link href='/configs'>Configs</Link></li>
    </ul>
  )
}