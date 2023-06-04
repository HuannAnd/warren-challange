import { Table, Filter, Header } from "@/components";

import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Header />
      <Filter />
      <Table />
    </Container>

  )
}