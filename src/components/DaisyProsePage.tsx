export default function DaisyProsePage({children}: {children?: React.ReactNode}) {
  return (
    <div className="prose daisy-prose max-w-[1000px] leading-[35px] mx-auto pt-6">
      {children}
    </div>
  )
}