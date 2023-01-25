import './globals.css'
import Header from './header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="scroll-p-0">
        <div
          className="z-0 bg-[#0C0818] text-white h-screen snap-y snap-mandatory 
        overflow-x-hidden
        scrollbar scrollbar-track-[#160F2E]/50 scrollbar-thumb-[#08605F]"
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
