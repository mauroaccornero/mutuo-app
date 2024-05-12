import type { Metadata } from "next";
import "@/assets/css/app.scss";
import { AppStoreWithRedux } from "@/context/AppContext";

import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description: "Save money on your mortgage",
  icons: {
    icon: "#",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppStoreWithRedux>{children}</AppStoreWithRedux>
      </body>
    </html>
  );
}
