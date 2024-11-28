import EngWord from "@/components/EngWord"
import wordList from "./EnglishWordList.json"
const words : Record<string, Record<string, string[]>> = wordList
function Word({children, word, highlight}:{children:React.ReactNode, word:string, highlight?:string}) {
  return (
    <EngWord word={word} wordInfo={words[word]} highlight={highlight}>{children}</EngWord>
  )
}
export default function Accumulation() {
  return (
    <div className="prose daisy-prose max-w-full leading-[35px] mx-auto p-6">
      <h1 className="text-center">Accumulation</h1>
      <ul>
        <li>They have invested heavily in projects designed to change the way of using and <Word word="conserve" highlight="v 1">conserving</Word> natural energy.</li>
        <li>We must <Word word="conserve" highlight="v 0">conserve</Word> endangered meadow lands.</li>
        <li>What right has one country to <Word word="dictate" highlight="v 0">dictate</Word> the environmental standards of another?</li>
        <li>The boss <Word word="dictate" highlight="v 2">dictated</Word> a long and detailed report to his assistant.</li>
        <li>It's an approach not <Word word="dictate" highlight="v 1">dictated</Word> by the confines of conventional large scale agriculture led by international corporations.</li>
        <li>This is a <Word word="further need" highlight=" 0">further need</Word> to <Word word="democratize" highlight="vt 0">democratize</Word> the life of society as a whole.</li>
        <li>To <Word word="democratize" highlight="vt 1">democratize</Word> art is this fashion magazine's goal.</li>
        <li>The language is <Word word="intelligible" highlight="adj 0">intelligible</Word> to experts and non-experts <Word word="alike" highlight="adv 0">alike</Word>.</li>
        <li>Almost half the population are <Word word="eligible" highlight="adj 0">eligible</Word> to vote in today's election.</li>
        <li>The decision was based on emotion rather than <Word word="rational" highlight="adj 0">rational</Word> thought.</li>
      </ul>
      <div className="h-16" />
    </div>
  )
}