import { AppProps } from '$fresh/server.ts'
import { Footer } from '../components/Footer.tsx'

export default function App({ Component }: AppProps) {
  // TODO: fix dark mode styling
  return (
    <>
      <div className="fixed flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <main>
          <Component />
        </main>
        <Footer />
      </div>
    </>
  )
}
