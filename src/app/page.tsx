import MidLink from "@/components/MidLink";

export default function HomePage() {
  return (
    <main>
      <div className="m-16">
        <MidLink href='/math'>Math</MidLink>
        <MidLink href='/CS'>CS</MidLink>
        <MidLink href='/english'>English</MidLink>
        <MidLink href='/configs'>Configs</MidLink>
      </div>
    </main>
  );
}
