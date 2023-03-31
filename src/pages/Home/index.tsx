import { Table, Filter, Header } from "@/components";

import * as HomeS from './styles'

export default function Home() {
  return (
    <HomeS.Container>
      <Header />
      <Filter />
      <Table />
    </HomeS.Container>

  )
}