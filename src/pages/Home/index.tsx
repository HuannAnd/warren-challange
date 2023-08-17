import Header from "@/layouts/Header";
import Filter from "@/components/Filter";
import Table from "@/layouts/Table";

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