import TextBox from "@/components/TextBox1"
import { Paragraph as Para, Title1, Title2, Title3, Bold as b } from "@/components/TextBox1"

export default function EnglishPage() {
  return (
    <div className={`w-[100%] mx-auto text-blue-800`}>
      
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
            A deal is a deal--except, apparently, when Entergy is involved. The company, a major energy supplier in New England,
          provoked justified outrage in Vermont last week when it announced it was reneging on a longstanding committment to abide by the
          state's strict nuclear regulations.
        </Para>
        <Para>
            Instead, the company has done precisely what it had long promised it would not: challenge the constitutionality of Vermont's
          rules in the federal court, as part of an effort to keep its Vermont nuclear power plant running. It's a stunning move.
        </Para>

        <Title3>Text3</Title3>
        <Para>
            In spite of "endless talk of difference," American society is an amazing machine for homogenizing people. There is "the democratizing
          uniformity of dress and discourse, and the casualness and absence of difference" characteristic of popular culture. People are obsorbed
          into "a culture of consumption" launched by the 19th-century department stores that offered "vast arrays of goods in an elegent atmosphere.
          Instead of intimate stores catering to a knowledgeable elite," these were stores "anyone could enter, regardless of class or background.
          This turned shopping into a public and democratic act." The mass media, advertising and sports are other forces for homogenization.
        </Para>

        <Title3>Text4</Title3>
        <Para>
            In a rare unanimous ruling, the US Supreme Court has overturned the corruption conviction of a former Virginia governor. But it did so
            while holding its nose at the ethics of his conduct, which included accepting gifts such as a Rolex watch and a Ferrari automobile from
            a company seeking access to government.
        </Para>

        <Title2>段间逻辑</Title2>
        
        <Title3>Text1</Title3>
        <Para>
            Of all the changes that have taken place in English-language newspapers during the past quarter-century, perhaps the most far-reaching
          has been the inexorable decline in the scope and seriousness of their arts coverage.
        </Para>
        <Para>
            It is difficult to the point of impossibility for the average reader under the age of forty to imagine a time when high-quality arts
          criticism could be found in most big-city newspapers. Yet a considerable number of the most significant collections of criticism published
          in the 20th century <b>consisted</b> in large part <b>of</b> newspaper reviews. To read such books today is to marvel at the fact that their
          learned contents were once deemed suitable for publication in general-circulation dailies.
        </Para>

        <Title3>Text2</Title3>
        <Para>
            Though often viewed as a problem for western states, the growing frequency of wildfire is a national concern because of its impact on 
          federal tax dollars, says Professor Moritz, a specialist in fire ecology and management.
        </Para>
        <Para>
            In 2015, the US Forest Service for the first time spent more than half of its $5.5 billion annual budget fighting fires--nearly double
          the percentage it spent on such efforts 20 years ago. In effect, fewer federal funds today are going towards the agency's other work--such as
          forest conservation, watershed and cultural resources management, and infrastructure upkeep.
        </Para>
          
      </TextBox>

    </div>
  )
}
