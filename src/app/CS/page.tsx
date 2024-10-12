import MidLink from "@/components/MidLink"
export default function CSPage() {
  return (
    <div className="m-10">
      <MidLink href="/CS/DataStructure">数据结构</MidLink>
      <MidLink href="/CS/OS">操作系统</MidLink>
      <MidLink href="/CS/Architecture">计算机组成原理</MidLink>
      <MidLink href="/CS/Network">计算机网络</MidLink>
    </div>
  )
}