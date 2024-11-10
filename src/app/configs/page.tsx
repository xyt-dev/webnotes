"use client"
import DaisySidebar, { DaisySidebarLeaf, DaisySidebarNode as Node } from "@/components/DaisySidebar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ArchLinuxConfig from "./ArchlinuxConfig";
import DockerImages from "./DockerImages";
import Overlord1 from "./OverLord/Chapter1";

export default function DataStructurePage() {
  const pages: { [key: string]: React.ReactNode } = {
    "ArchLinuxConfig": <ArchLinuxConfig />,
    "DockerImages": <DockerImages />,
    "Overlord1": <Overlord1 />,
  }
  const [pageRenderingName, setPageRenderingName] = useState("")
  useEffect(() => {
      const lastPage = localStorage.getItem("lastPage");
      lastPage && pages[lastPage] ? setPageRenderingName(lastPage) : setPageRenderingName("");
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
      <Leaf pageName="ArchLinuxConfig">ArchLinuxConfig</Leaf>
      <Leaf pageName="DockerImages">DockerImages</Leaf>
      <Leaf pageName="Overlord1">Overlord1</Leaf>
    </DaisySidebar>
  )
}