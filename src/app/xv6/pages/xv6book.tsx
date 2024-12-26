import EngWord from "@/components/EngWord"
import wordList from "../../english/EnglishWordList.json"
import Space from "@/components/Space"
import CodeBlock from "@/components/CodeBlock"

const words : Record<string, Record<string, string[]>> = wordList
function Word({children, word, highlight}:{children:React.ReactNode, word:string, highlight?:string}) {
  return (
    <EngWord word={word} wordInfo={words[word]} highlight={highlight}>{children}</EngWord>
  )
}
function Img({ src, width }: { src: string, width?: number }) {
  return (
    <img className="m-1 mx-auto" src={src} alt="" width={width} />
  )
}

export default function Xv6Book() {
  return (
    <div className="prose daisy-prose max-w-full leading-[35px] pl-24 pr-48">
      <h1 className="text-center">Xv6Book</h1>
      <h2>1. Operating system interface</h2>
      <h3>Introduction</h3>
      <strong>Definition and functionality of Operating system: </strong><br />
      <Space width={2} />The job of an operating system is to share a computer among multiple programs and to provide a
      more useful set of services than the hardware alone supports. An operating system manages and
      abstracts the low-level hardware, so that, for example, a word processor need not concern itself
      with which type of disk hardware is being used. An operating system shares the hardware among
      multiple programs so that they run (or appear to run) at the same time. Finally, operating systems
      provide controlled ways for programs to interact, so that they can share data or work together. <br />
      <Space width={2} />An operating system provides services to user programs through an interface. Designing a good
      interface turns out to be difficult. On the one hand, we would like the interface to be simple and
      narrow because that makes it easier to get the implementation right. On the other hand, we may be
      tempted to offer many sophisticated features to applications. The trick in resolving this tension is to
      design interfaces that rely on a few mechanisms that can be combined to provide much generality. <br />
      <strong>The collection of system calls of Xv6: </strong> <br />
      <Space width={2} />The collection of system calls that a kernel provides is the interface that user programs see. The
      xv6 kernel provides a subset of the services and system calls that Unix kernels traditionally offer.
      Figure 1.2 lists all of xv6’s system calls:
      {Img({ src:"Images/xv6/Xv6systemcalls.png", width:900 })}
      <strong>The shell of Xv6: </strong> <br />
      <Space width={2} />The shell is an ordinary program that reads commands from the user and executes them. The
      fact that the shell is a user program, and not part of the kernel, illustrates the power of the system
      call interface: there is nothing special about the shell. It also means that the shell is easy to replace;
      as a result, modern Unix systems have a variety of shells to choose from, each with its own user
      interface and scripting features. The xv6 shell is a simple implementation of the essence of the
      Unix Bourne shell. Its implementation can be found at (user/sh.c).
      <CodeBlock lang="c" className="text-base mt-2 w-[800px]">{
`int main() {
  return 0;
}`
        }</CodeBlock>
      <div className="h-12" />

    </div>
  )
}