import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Your Site',
  description: 'Description here',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17149594181"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17149594181');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
