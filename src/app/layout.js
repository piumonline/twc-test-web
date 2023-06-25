import "./globals.css";

export const metadata = {
  title: "TWC Contacts Portal ",
  description:
    "An efficient platform for managing and accessing contact information seamlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
