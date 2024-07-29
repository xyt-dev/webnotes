import Link from "next/link"
export default function Menu() {
  return (
    <ul className="daisy-menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <li>
        <Link href='/'>🥳MainPage</Link>
      </li>
      <li>
        <Link href='/math'>Math</Link>
        <ul>
          <li><Link href='https://xy6.notion.site'>Notion</Link></li>
        </ul>
      </li>
      <li>
        <Link href='/CS'>CS</Link>
        <ul>
          <li><Link href="/CS/OS">操作系统</Link></li>
          <li><Link href="/CS/Network">计算机网络</Link></li>
        </ul>
      </li>
      <li>
        <Link href='/english'>English</Link>
        <ul>
          <li><Link href="/english/accumulation">Accumulation</Link></li>
        </ul>
      </li>
      <li><Link href='/configs'>Configs</Link></li>
    </ul>
  )
}