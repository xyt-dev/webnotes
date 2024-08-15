export default function DaisyProsePage({children, ref}: {children?: React.ReactNode, ref?: React.RefObject<HTMLDivElement>}) {
  return (
    <div ref={ref} className="prose daisy-prose max-w-[1000px] leading-[35px] mx-auto pt-6">
      {children}
    </div>
  )
}