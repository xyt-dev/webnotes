import TextBox from "@/components/TextBox1"
import { Paragraph as Para, Title1, Title2, Title3, Bold as B } from "@/components/TextBox1"
import Link from "next/link"

export default function EnglishPage() {
  return (
    <div className={`w-[100%] mx-auto`}>
      <Link href='/english/words' className="daisy-btn daisy-btn-ghost w-min pl-10 pr-10 daisy-glass flex justify-center text-center font-medium text-2xl mx-auto mb-6">Words</Link>
      <TextBox>
        <Title1><span className="text-pink-600 underline">阅读的逻辑</span></Title1>

        <Title3>Text1</Title3>
        <Para>
            In the weeks and months that followed Mr. Hrist's sale, spending of any sort became deeply unfashionable. In the art
          world that meant collectors stayed away from galleries and salerooms.
        </Para>

        <Title3>Text2</Title3>
        <Para>
            A deal is a deal--except, apparently, when Entergy is involved. The company, a major energy supplier in New England,
          provoked justified outrage in Vermont last week when it announced it was reneging on a longstanding commitment to abide by the
          state's strict nuclear regulations.
        </Para>
        <Para>
            Instead, the company has done precisely what it had long promised it would not: challenge the constitutionality of Vermont's
          rules in the federal court, as part of an effort to keep its Vermont nuclear power plant running. It's a stunning move.
        </Para>

        <Title3>Text3</Title3>
        <Para>
            In spite of "endless talk of difference," American society is an amazing machine for homogenizing people. There is "the democratizing
          uniformity of dress and discourse, and the casualness and absence of difference" characteristic of popular culture. People are absorbed
          into "a culture of consumption" launched by the 19th-century department stores that offered "vast arrays of goods in an elegant atmosphere.
          Instead of intimate stores catering to a knowledgeable elite," these were stores "anyone could enter, regardless of class or background.
          This turned shopping into a public and democratic act." The mass media, advertising and sports are other forces for homogenization.
        </Para>

        <Title3>Text4</Title3>
        <Para>
            In a rare unanimous ruling, the US Supreme Court has overturned the corruption conviction of a former Virginia governor. But it did so
            while holding its nose at the ethics of his conduct, which included accepting gifts such as a Rolex watch and a Ferrari automobile from
            a company seeking access to government.
        </Para>

        <Title3>Text5</Title3>
        <Para>
            Of all the changes that have taken place in English-language newspapers during the past quarter-century, perhaps the most far-reaching
          has been the inexorable decline in the scope and seriousness of their arts coverage.
        </Para>
        <Para>
            It is difficult to the point of impossibility for the average reader under the age of forty to imagine a time when high-quality arts
          criticism could be found in most big-city newspapers. Yet a considerable number of the most significant collections of criticism published
          in the 20th century <B>consisted</B> in large part <B>of</B> newspaper reviews. To read such books today is to marvel at the fact that their
          learned contents were once deemed suitable for publication in general-circulation dailies.
        </Para>

        <Title3>Text6</Title3>
        <Para>
            Though often viewed as a problem for western states, the growing frequency of wildfire is a national concern because of its impact on 
          federal tax dollars, says Professor Moritz, a specialist in fire ecology and management.
        </Para>
        <Para>
            In 2015, the US Forest Service for the first time spent more than half of its $5.5 billion annual budget fighting fires--nearly double
          the percentage it spent on such efforts 20 years ago. In effect, fewer federal funds today are going towards the agency's other work--such as
          forest conservation, watershed and cultural resources management, and infrastructure upkeep.
        </Para>

        <Title3>Text7</Title3>
        <Para>
            Many Americans regard the jury as a concrete expression of crucial democratic values, including the principles that all citizens who meet
          minimal qualifications of age and literacy are equally competent to serve on juries; that jurors should be selected randomly from a representative 
          cross section of the community; that no citizen should be denied the right to serve on a jury on account of race, religion, sex, or national origin;
          that defendants are entitled to trail by their peers; and that verdicts should represent the conscience of the community and not just the letter of
          the law. The jury is also said to be the best surviving example of direct rather than representative democracy. In a direct democracy, citizens take
          turns to govern themselves, rather than electing representatives to govern for them.
        </Para>
        <Para>
            But as recently as in 1968, jury selection conflicted with these democratic ideals. In some states, for example, jury duty was limited to persons
          of supposedly superior intelligence, education, and moral character. Although the Supreme Court of US had prohibited intentional racial discrimination
          in jury selection as early as 1880 case of Western Virginia, the practice of selecting so-called elite or blue-ribbon juries provided a convenient
          way around this and other antidiscrimination laws.
        </Para>
        <Para>
            The system also failed to regularly include women on juries until the mid-20th century. Although women first served on state juries in Utah in 1898,
          it was not until the 1940s that a majority of states made women eligible for jury duty. Even then several states automatically exempted women from jury
          duty unless they personally asked to have their names included on the jury list. This practice was justified by the claim that women were needed at home,
          and it kept juries unrepresentative of women through the 1960s.
        </Para>

        <Title3>Text8</Title3>
        <Para>
            Over the past decade, thousands of patents have been granted for what are called business methods. Amazon.com received one for its "one-click"
          online payment system. Merrill Lynch got legal protection for an assets allocation strategy. One inventor patented a technique for lifting a box.
        </Para>
        <Para>
            Now the nation's top patent court appears completely ready to scale back on business-method patents, which have been controversial ever since
          they were first authorized 10 years ago. In a move that has intellectual-property lawyers abuzz, the U.S Court of Appeal said it would use a
          particular case to conduct a broad review of business-method patents.
        </Para>

        <Title3>Text9</Title3>
        <Para>
            Perhaps willfully, it may be easier to think about such lengthy timescales than about the more immediate future. The potential evolution
          of today's technology, and its social consequences, is dazzlingly complicated, and it's perhaps best left to science fiction writers and
          futurologists to explore the many possibilities we can envisage. That's one reason why we have launched a new publication dedicated to the
          near future.
        </Para>
        <Para>
            But take a longer view and there is a surprising amount that we can say with considerable assurance. As(引导从句) so often, the past holds
          the key to the future: we have now identified enough of long-term patterns shaping the history of the planet, and our species, to make evidence-based
          forecasts about the situations in which our descendants will find themselves.
        </Para>

        <Title3>Text10</Title3>
        <Para>
            All around the world, lawyers generate more hostility than the members of any other profession--with the possible exception of journalism.
          But there are few places where clients have more grounds for complaint than America.
        </Para>
        <Para>
            During the decade before the economic crisis, spending on legal services in America grew twice as fast as inflation. The best lawyers made
          skyscrapers-full of money, tempting ever more students to pile into law schools.
        </Para>

      </TextBox>

    </div>
  )
}
