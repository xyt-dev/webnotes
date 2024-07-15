import { ReactNode } from "react"
import {/*  merienda, */ kalam /* , noto_sans_jp */, zen_maru_gothic,  } from "@/fonts/fonts"
import './font.css'

function Title({children}: {children: ReactNode}) {
  return (
  <div className="w-[100%] text-center font-bold text-[1.2rem]">
      {children}
    </div>
  )
}

export default function TextBox1({children, title}: {children?: ReactNode, title?: ReactNode}) {
  return (
    <div className={`p-5 border-[1px] shadow-custom bg-neutral-200/10 text-blue-800 ${kalam.className} ${zen_maru_gothic.className} Kalam_Zen_maru_gothic`}>
      <Title>{title}</Title>
      {children}
    </div>
  )
}


