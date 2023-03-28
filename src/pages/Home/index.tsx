import { Table , Filter, Header} from "@/components";


export function Home() {
  return (
    <div id="home-page">
        <Header />
        <main>
          <Filter />
          <Table />
        </main> 
    </div>
  
  )
}