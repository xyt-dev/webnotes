import Image from "next/image"
import DaisyProsePage from "@/components/DaisyProsePage"

function Img({ src }: { src: string }) {
  return (
    <Image src={src} alt="" width={500} height={999} />
  )
}

export default function WildSolve() {
  return (
    <DaisyProsePage>
      <ol>
        <li><Img src="/Images/Math/wildsolve/1.png" /></li>
      </ol>
    </DaisyProsePage>
  )
}