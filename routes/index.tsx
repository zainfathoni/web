import { Container } from '../components/Container.tsx'
import { Resume } from '../components/Resume.tsx'
import Counter from '../islands/Counter.tsx'

export default function Home() {
  return (
    <Container>
      <img src="/logo.svg" class="w-32 h-32" alt="the fresh logo: a sliced lemon dripping with juice" />
      <p class="my-6">Welcome to `fresh`. Try updating this message in the ./routes/index.tsx file, and refresh.</p>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16"></div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
      <Counter start={3} />
    </Container>
  )
}
