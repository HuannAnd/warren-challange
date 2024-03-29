import styled from "styled-components"

import { mediaQueries } from "@/constants/device"

export const Root = styled.table`
@media ${mediaQueries.lg} {
    display: flex;
    flex-direction: column;

}

@media ${mediaQueries.sm} {
    display: block;
    width: 100%;
}

`
export const Th = styled.th`
    background: #222;
    width: auto;
    padding: 10px 30px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    color: #fff;
    box-shadow: 0 0 5px #111;
    margin-inline: 2px;


`
export const Head = styled.thead`
@media ${mediaQueries.sm} {
    display: none ;
}
`

export const Body = styled.tbody`
@media ${mediaQueries.lg} {
    display: flex;
    flex-direction: column;
}

@media ${mediaQueries.sm} {
    display: block;
    width: 100%;
    margin-bottom: 20px;
}
`
export const Row = styled.tr`
    display: grid;
    grid-template-columns: 215px 355px 200px 200px ;
    margin-bottom: 5px;

${Head} & ,
${Body} & {
    display: grid;
    grid-template-columns: 215px 355px 200px 200px ;
    margin-bottom: 5px;
}

    @media ${mediaQueries.sm} {
    display: block;
    width: 100%;
    margin-bottom: 15px;
}


`