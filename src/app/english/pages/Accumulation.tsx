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
    <div className="prose daisy-prose max-w-full leading-[35px] pl-12 pr-24">
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
        <li>The food is excellent and the room is large enough to <Word word="accommodate" highlight="vt 1">accommodate</Word> us.</li>
        <li>Our proposal tries to <Word word="accommodate" highlight="vt 2">accommodate</Word> the special needs of minority groups.</li>
        <li>The roads build are built to <Word word="accommodate" highlight="vt&vi 0">accommodate</Word> (to) <Word word="drastic" highlight="adj 0">drastic</Word> temperature changes.</li>
        <li>All vitamin supplements would be evaluated in scientifically <Word word="rigorous" highlight="adj 0">rigorous</Word> clinical trials to ensure their safety and efficacy.</li>
        <li>The team launched a <Word word="vigorous" highlight="adj 0">vigorous</Word> campaign to promote their new product.</li>
        <li>
            Modem techniques for producing and shipping food led to greater variety and quantity, including a tremendous increase 
          in the amount of animal protein and <Word word="dairy" highlight="n 0">dairy</Word> products available, making us more <Word word="vigorous" highlight="adj 1">vigorous</Word>.
        </li>
        <li>He became <Word word="accustom" highlight="v 0">accustomed</Word> to waking up early for his morning run.</li>
        <li>The team will <Word word="commence" highlight="v 0">commence</Word> training for the upcoming <Word word="tournament" highlight="n 0">tournament</Word> next month.</li>
        <li>The new stadium has an <Word word="immense" highlight="adj 0">immense</Word> capacity, <Word word="accommodate" highlight="vt 1">accommodating</Word> over 100,000 <Word word="spectator" highlight="n 0">spectators</Word>.</li>
        <li>She's an <Word word="immense" highlight="adj 1">immense</Word> teacher. </li>
        <li>The carnival parade was a <Word word="magnificent" highlight="adj 1">magnificent</Word> <Word word="spectacle" highlight="n 0">spectacle</Word>. </li>
        <li>It can be challenging for immigrants to <Word word="assimilate" highlight="v 0">assimilate</Word> into a new culture. </li>
        <li>To <Word word="assimilate" highlight="v 1">assimilate</Word> new ideas, one must be open to change and willing to learn. </li>
        <li>The agreement would allow the rebels to be <Word word="incorporate" highlight="v 0">incorporated</Word> into a new national police <Word word="force" highlight="n 1">force</Word>.</li>
        <li>The ambitious <Word word="entrepreneur" highlight="n 0">entrepreneur</Word> is in the process of <Word word="incorporate" highlight="v 1">incorporating</Word> a new <Word word="corporate" highlight="adj 0">corporate</Word> entity to expand his business ventures into international markets.</li>
      </ul>
      <div className="h-16" />
    </div>
  )
}
