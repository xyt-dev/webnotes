import EngWord from "@/components/EngWord"
import wordList from "./EnglishWordList.json"
const words : Record<string, Record<string, string[]>> = wordList
function Word({children, word, highlight}:{children:React.ReactNode, word:string, highlight:string}) {
  return (
    <EngWord word={word} wordInfo={words[word]} highlight={highlight}>{children}</EngWord>
  )
}
export default function Accumulation() {
  return (
    <div className="prose daisy-prose max-w-full leading-[35px] mx-auto p-6 pr-12">
      <h1 className="text-center">Accumulation</h1>
      They have invested heavily in projects designed to change the way of using and <Word word="conserve" highlight="v 1">conserving</Word> natural energy.
    </div>
  )
}