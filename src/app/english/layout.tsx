
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen min-w-screen p-6" data-theme="cupcake">
        {children}
    </div>
  );
}
