export default function Space({width}: {width: number}) {
  return <div style={{display: 'inline-block', height: '1rem', width: `${width/2}rem` }}></div>;
}