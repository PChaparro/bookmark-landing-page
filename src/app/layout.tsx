import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Bookmark",
  description:
    "A clean and simple interface to organize your favorite websites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
