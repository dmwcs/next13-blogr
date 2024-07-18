import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AuthProvider>
          <div className="py-[32px] h-screen mx-auto max-w-[1080px]">
            <Navbar></Navbar>
            {children}
            <footer className="fixed bottom-0 left-0 w-full flex justify-center text-black bg-gray-300">
              Built by Shelton Cui
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
