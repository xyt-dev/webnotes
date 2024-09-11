"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useEffect, useState } from "react";
import AdvancedMath1 from "./pages/Solve1000/AdvancedMath1";
import LinearAlgebra1 from "./pages/Solve1000/LinearAlgebra1";
import Link from "next/link";
import WildSolve from "./pages/WildSolve";
import LatexSymbols from "./pages/LatexSymbols";
import OtherPage from "./pages/Other";

export default function DaisyPages() {
  const pages: { [key: string]: React.ReactNode } = {
    "AdvancedMath1": AdvancedMath1(),
    "WildSolve": WildSolve(),
    "LatexSymbols": LatexSymbols(),
    "Other": OtherPage(),
    "LinearAlgebra1": LinearAlgebra1(),
  }
  const [pageRenderingName, setPageRenderingName] = useState("")
  useEffect(() => {
      const lastPage = localStorage.getItem("lastPage");
      lastPage && pages[lastPage] ? setPageRenderingName(lastPage) : setPageRenderingName("Solve1000");
  });
  useEffect(() => {
    if (pageRenderingName !== "") {
      const savedPosition = localStorage.getItem("scrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
      const handleScroll = () => {
        localStorage.setItem("scrollPosition", window.scrollY.toString());
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  })
  function Leaf({ children, pageName }: { children: string, pageName: string }) {
    return (
      <DaisySidebarLeaf setPageRendering={() => { setPageRenderingName(pageName); localStorage.setItem("lastPage", pageName) }} isSelected={pageRenderingName === pageName}>{children}</DaisySidebarLeaf>
    )
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Node summary="张宇1000题">
        <Node summary="基础">
          <Leaf pageName="AdvancedMath1">高等数学</Leaf>
          <Leaf pageName="LinearAlgebra1">线性代数</Leaf>
        </Node>
      </Node>
      <Leaf pageName="WildSolve">野题</Leaf>
      <Leaf pageName="Other">其他</Leaf>
      <Leaf pageName="LatexSymbols">Latex符号大全</Leaf>
      <li><Link href='https://xy6.notion.site' legacyBehavior><a target="_blank" rel="noopener noreferrer">Notion笔记</a></Link></li>
    </DaisySidebar>
  )
}