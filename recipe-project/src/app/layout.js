import "./globals.css";
import { Suspense } from "react";
import Loading from "./Loading";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
