
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen min-w-screen bg-slate-300/10 p-6">
        {children}
    </div>
  );
}
