import { ReactNode } from "react"
import {/*  merienda, */ kalam /* , noto_sans_jp */, zen_maru_gothic,  } from "@/fonts/fonts"
import './font.css'

export function Title1({children}: {children?: ReactNode}) {
  return (
    <div className="w-[100%] text-center font-bold text-[1.8rem] underline underline-offset-8 pb-6">
      {children}
    </div>
  )
}

export function Title2({children}: {children?: ReactNode}) {
  return (
    <div className="w-[100%] text-center font-bold text-[1.3rem] pt-6">
      {children}
    </div>
  )
}

export function Title3({children}: {children?: ReactNode}) {
  return (
    <div className="w-[100%] text font-bold text-[1.1rem] pt-2">
      {children}
    </div>
  )
}

export function Paragraph({children, noIndent}: {children?: ReactNode, noIndent?: boolean}) {
  function indent() {
    if (!noIndent) {
      return (<span>&nbsp;&nbsp;</span>)
    }
  }
  return (
    <span className="inline-block pb-1">{indent()}{children}</span>
  )
}

export function Bold({children}: {children?: ReactNode}) {
  return (
    <span className="font-bold">{children}</span>
  )
}

export function HSeperator({children, isVisible}: {children?: ReactNode, isVisible?: Boolean}) {
  return (
    <div className="w-[100%] h-[0.06em] bg-blue-800 mt-3 mb-3"></div>
  )
}

export default function TextBox1({children}: {children?: ReactNode}) {
  return (
    // ${kalam.className} ${zen_maru_gothic.className} Kalam_Zen_maru_gothic
    <div className={`p-6 border-[1px] shadow-custom max-w-[800px] mx-auto`}>
      {children}
    </div>
  )
}


