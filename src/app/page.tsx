import Link from "next/link";
import TextBox from "@/components/RawTextBox";

export default function HomePage() {
  return (
    <main>
      <TextBox>
        <ul className="daisy-menu mx-auto text-lg rounded-box text-base-content min-h-full w-full p-3">
          <li>
            <Link href='/math'>Math</Link>
          </li>
          <li>
            <Link href='/408'>408</Link>
          </li>
          <li>
            <Link href='/english'>English</Link>
          </li>
          <li><Link href='/configs'>Configs</Link></li>
        </ul>
      </TextBox>
    </main>
  );
}
