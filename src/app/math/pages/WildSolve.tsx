import Image from "next/image"
import DaisyProsePage from "@/components/DaisyProsePage"

function Img({ src, width }: { src: string, width?: number }) {
  return (
    <Image className="m-1" src={src} alt="" width={width ? width : 430} height={999} />
  )
}

function Solve({tags, children}: {tags?: string[], children?: React.ReactNode}) {
  const Tags = tags?.map ((tag, index) => {
    return <span key={index} className="rounded-box pl-2 pr-2 pt-[0.35rem] pb-1 text-xs font-bold mr-1 bg-[#282828] text-[#fbf1c7]">{tag}</span>
  })
  return (
    <li>{Tags}{children}</li>
  )
}

export default function WildSolve() {
  return (
    <DaisyProsePage>
      <ol>
        <Solve tags={["不定积分", "反三角函数"]}><Img src="/Images/Math/wildsolve/1.png" /></Solve>
        <Solve tags={["导数"]}><Img src="/Images/Math/wildsolve/2.png" /></Solve>
      </ol>
    </DaisyProsePage>
  )
}