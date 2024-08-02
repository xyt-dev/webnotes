"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useState } from "react";
import Solve1000 from "./pages/Solve1000";
import Link from "next/link";
import WildSolve from "./pages/WildSolve";

export default function DaisyPages() {
  const pages:{[key: string]: React.ReactNode} = {
    "Solve1000": Solve1000(),
    "WildSolve": WildSolve(),
  }
  const [pageRenderingName, setPageRenderingName] = useState(() => {
    const lastPage = localStorage.getItem("lastPage");
    return lastPage && pages[lastPage] ? lastPage : "Solve1000";
  });
  function Leaf({ children, pageName }: { children: string, pageName: string }) {
    return (
      <DaisySidebarLeaf setPageRendering={() => { setPageRenderingName(pageName); localStorage.setItem("lastPage", pageName) }} isSelected={pageRenderingName === pageName}>{children}</DaisySidebarLeaf>
    )
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Leaf pageName="Solve1000">张宇1000题</Leaf>
      <Leaf pageName="WildSolve">野题</Leaf>
      <li><Link href='https://xy6.notion.site'>Notion笔记</Link></li>
    </DaisySidebar>
  )
}