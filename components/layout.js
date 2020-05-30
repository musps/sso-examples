import Head from 'next/head'
import Header from './header'

const Layout = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Single Sign On Authentication examples</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
    </Head>

    <Header />

    <main>
      <div className="container">{children}</div>
    </main>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        max-width: 50rem;
        margin: 0 auto;
        padding: 2rem 1.25rem;
      }
    `}</style>
  </React.Fragment>
)

export default Layout
