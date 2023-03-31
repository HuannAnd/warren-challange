import styled, {Keyframes, keyframes} from 'styled-components'

interface PropsCentralize {
    $loading: boolean
}

export const Centralize = styled.section<Pick < PropsCentralize , '$loading' >>`
    position: absolute;
    visibility: ${props => props.$loading ? 'visible' : 'hidden'};    
    top: 50%; left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    gap: 12px;

&::before
{
    position: absolute;
    top: 50%; left: 50%; right: 0; bottom: 0;
    transform-origin: top left;
    transform: translate(-50%, -50%);
    content: '';
    background: rgba(0, 0, 0, .6);
    height: 100vh;
    width: 100vw;
}

`


export const LoadingStyled = styled.div`
    position: relative;
    flex-direction: row;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background: #e02b57;
    width: 200px;
    height: 200px;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 75px;
     gap: 12px;

    &::before
    {
        position: absolute;
        content: "";
        top: calc(100% - 75px); left: 0;
        height: 75px;
        width: 75px;
        background: #e02b57;
    }

`

interface PropsSpan {
    index: number,
    $loading: boolean
}

const loading: Keyframes = keyframes`
    0%      { height: 30px; }
    50%     { height: 80px; }
    100%    { height: 30px; }
  
`

export const BarsLoading = styled.span<Pick < PropsSpan, 'index' | '$loading'  > >`
    width: 22px;
    height: 30px;
    box-shadow: 0 0 3px #ddd, 0 0 10px #aaa, 0 0 40px #9a9a9a;
    background: #fff;
    border-radius: 6px;
    animation: ${loading} 1.5s linear infinite;
    animation-delay: calc(0.3s * ${props => props.index});
    animation-fill-mode: backwards;
    animation-play-state: ${props => props.$loading ? 'running' : 'paused'};
    z-index: 1;
`

export const Paragraph = styled.p`
    position: relative;
    color: #ddd;
    font-size: 10rem;
    font-family: 'Poppins', sans-serif;
    text-shadow: 0 0 7px rgba(255, 255, 255, .3),
                 0 0 15px rgba(255, 255, 255, .3);
    bottom: 13px;
    font-weight: 800;

    &:nth-child(3)
    {
        border-bottom-right-radius: 20px;
    }
`