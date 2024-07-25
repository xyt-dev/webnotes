import Link from "next/link"
export default function CSPage() {
  return (
    <div className="m-16">
      <Link href='/CS/OS' className="text-blue-600 whitespace-nowrap text-center w-min text-2xl mx-auto block mb-6">操作系统</Link>
      <Link href='/CS/Network' className="text-blue-600 whitespace-nowrap text-center w-min text-2xl mx-auto block mb-6">计算机网络</Link>
    </div>
  )
}