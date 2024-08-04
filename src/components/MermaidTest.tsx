import dynamic from 'next/dynamic';
const Mermaid = dynamic(() => import('./Mermaid'), { ssr: false });

const MermaidTest: React.FC = () => {
  const chart = `
    graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
  `;

  return (
    <div>
      <h1>Mermaid Diagram in Next.js with TypeScript</h1>
      <Mermaid chart={chart} />
    </div>
  );
};


export default MermaidTest