export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import '../app/globals.css';
import Footer from './_SharedComponents/_Footer/page';
import TopNavigation from './_SharedComponents/_TopNavigation/page';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full overflow-auto">
        <TopNavigation />
        <div className="flex flex-1 flex-col overflow-auto">{children}</div>
        <Footer />
      </body>
    </html>
  )
}