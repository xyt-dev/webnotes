import TextBox from "@/components/TextBox1"
import { Paragraph as Para } from "@/components/TextBox1"
export default function EnglishPage() {
  return (
    <div className={`w-[390px] md:w-[50%] mx-auto`}>

      <TextBox title="Text1">
        <Para>
          Wow
        </Para>
      </TextBox>

    </div>
  )
}
