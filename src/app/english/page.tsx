import TextBox from "@/components/TextBox1"
import { Paragraph as Para, Title1, Title2, Title3 } from "@/components/TextBox1"
export default function EnglishPage() {
  return (
    <div className={`w-[390px] md:w-[50%] mx-auto`}>
      
      <TextBox>
        <Title1><span className="text-pink-600 underline">阅读的逻辑</span></Title1>

        <Title2>句间逻辑</Title2>

        <Title3>Text1</Title3>
        <Para>
            In the weeks and months that followed Mr. Hrist's sale, spending of any sort became deeply unfashinable. In the art
          world that meant collectors stayed away from galleries and salerooms.
        </Para>

        <Title3>Text2</Title3>
        <Para>
        </Para>
      </TextBox>

    </div>
  )
}
