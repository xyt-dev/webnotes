import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
export default function MidLink({children, href}: {children: String, href: Url}) {
  return (
      <Link href={href} className="text-blue-600 whitespace-nowrap text-center w-min text-2xl mx-auto block mb-6">{children}</Link>
  )
}