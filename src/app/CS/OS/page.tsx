"use client"
import DaisySidebar, { DaisySidebarLeaf as Leaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useState } from "react";

export default function DaisyPages() {
  const [pageRenderingName, setPageRenderingName] = useState("");
  const pages:{[key: string]: React.ReactNode} = {
  }
  return (
    <DaisySidebar page={pages[pageRenderingName]}>
      <Node summary="操作系统">
        <Leaf setPageRendering={() => {setPageRenderingName("第一页")}}> </Leaf>
      </Node>
    </DaisySidebar>
  )
}