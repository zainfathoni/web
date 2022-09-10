import { PageProps } from '$fresh/server.ts'
import { Container } from '../components/Container.tsx'

export default function Greet(props: PageProps) {
  return <Container>Hello {props.params.name}</Container>
}
