import { ReactNode } from "react"
import {/*  merienda, */ kalam /* , noto_sans_jp */, zen_maru_gothic,  } from "@/fonts/fonts"
import './font.css'

export function Title1({children}: {children?: ReactNode}) {
  return (
    <div className="w-[100%] text-center font-bold text-[1.8rem] underline underline-offset-8 mb-6">
      {children}
    </div>
  )
}

export function Title2({children}: {children?: ReactNode}) {
  return (
    <div className="w-[100%] text-center font-bold text-[1.3rem] mb-3">
      {children}
    </div>
  )
}

export function Title3({children}: {children?: ReactNode}) {
  return (
    <div className="w-[100%] text font-bold text-[1.1rem] mb-1">
      {children}
    </div>
  )
}

export function Paragraph({children}: {children?: ReactNode}) {
  return (
    <span className="block mb-1">&nbsp;&nbsp;{children}</span>
  )
}

export default function TextBox1({children}: {children?: ReactNode}) {
  return (
    <div className={`p-5 border-[1px] shadow-custom bg-neutral-200/10 text-blue-800 max-w-[800px] mx-auto ${kalam.className} ${zen_maru_gothic.className} Kalam_Zen_maru_gothic`}>
      {children}
    </div>
  )
}


