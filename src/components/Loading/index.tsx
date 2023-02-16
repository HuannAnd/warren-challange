import React from 'react'
import * as C from "./Styles";

export interface LoadingProps {
    loading: boolean
    children: React.ReactNode
}

const Loading: React.FC< LoadingProps > = ({ loading, children }) => {
    return (
        false ? (
            <C.Centralize loadingOpen={loading}>
            <C.LoadingStyled>
                <C.BarsLoading index={1}/>    
                <C.BarsLoading index={2}/>    
                <C.BarsLoading index={3}/>    
            </C.LoadingStyled>
            <C.Paragraph>Warren</C.Paragraph>
        </C.Centralize>) : (
            <>
                {children}
            </>
        ) 
    );
}
 
export default Loading;