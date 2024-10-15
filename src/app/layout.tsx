import type { Metadata } from "next";
import { Inter, Lora, JetBrains_Mono, Noto_Serif_SC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "../components/font.css"
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const noto_serif_sc = Noto_Serif_SC({ subsets: ["latin"], weight: "500" });
// JetBrainsMono_Vivosans
// Inter_Vivosans

export const metadata: Metadata = {
  title: "🥳Xy6Blog🥳",
  description: "Generated by create nextapp",
};

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono', // 定义 CSS 变量
});

const vivo_sans = localFont({
  src: [
    { path: "Font/vivoSans-Regular.ttf", weight: '500' },
    { path: "Font/vivoSans-Bold.ttf", weight: '700' },
  ],
  variable: '--font-vivo-sans', // 定义 CSS 变量
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={`${vivo_sans.variable} ${jetbrains_mono.variable} JetBrainsMono_Vivosans`}> {/* 前两个自动定义存放字体的 CSS 变量, 后一个属性是存放两个字体 CSS 变量的 font-family */}
        <div className="daisy-navbar bg-base-100">
          <Link href='/' className="pl-6">🥳Xy6Blog🥳</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
