"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useState } from "react";

export default function OSPages() {
  const [pageRenderingName, setPageRenderingName] = useState("");
  function Leaf({ children, pageName }: { children: string, pageName: string }) {
    return (
      <DaisySidebarLeaf setPageRendering={() => { setPageRenderingName(pageName) }} isSelected={pageRenderingName === pageName}>{children}</DaisySidebarLeaf>
    )
  }
  const pages: { [key: string]: React.ReactNode } = {
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Leaf pageName="firstPage">第一页</Leaf>
    </DaisySidebar>
  )
}