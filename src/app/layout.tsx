import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["500"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Каштанка — заведи пушистого друга",
  description:
    "Покупайте, продавайте и находите специалистов для своего питомца. Поддержка социальных проектов для помощи животным.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
