import "./globals.css";
import StoreProvider from "./StoreProvider";


export const metadata = {
  title: "Verse LFG",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
      <body>{children}</body>
        </StoreProvider>
    </html>
  );
}
