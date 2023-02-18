import styled from "styled-components"

export const Table = styled.table`

`
export const Th = styled.th`
    background: #222;
    font-weight: 800;
    padding: 10px 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 0 0 5px #111;
    margin-inline: 2px;
    color: #fff;
`
export const THead = styled.thead`

`

export const TBody = styled.tbody`

`
export const TRow = styled.tr`
    display: grid;
    grid-template-columns: 215px 355px 200px 200px ;
    margin-bottom: 5px;

${THead} & ,
${TBody} & {
    display: grid;
    grid-template-columns: 215px 355px 200px 200px ;
    margin-bottom: 5px;

}


`