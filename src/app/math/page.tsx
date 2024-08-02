"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useState } from "react";
import Solve1000 from "./pages/Solve1000";
import Link from "next/link";

export default function DaisyPages() {
  const [pageRenderingName, setPageRenderingName] = useState("Solve1000");
  function Leaf({ children, pageName }: { children: string, pageName: string }) {
    return (
      <DaisySidebarLeaf setPageRendering={() => { setPageRenderingName(pageName) }} isSelected={pageRenderingName === pageName}>{children}</DaisySidebarLeaf>
    )
  }
  const pages:{[key: string]: React.ReactNode} = {
    "Solve1000": Solve1000(),
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Leaf pageName="Solve1000">张宇1000题</Leaf>
      <li><Link href='https://xy6.notion.site'>Notion笔记</Link></li>
    </DaisySidebar>
  )
}