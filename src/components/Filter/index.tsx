import React, { useContext, useRef, useState } from 'react';
import { TransactionType } from '../../Types/TransactionTypes';
import './FilterTransaction.css'
import { GlobalPropsContext, Inputchange } from '../Home';
import Dropdown, { Option } from '../Dropdown';
// import * as FilterStyles from './Styles'
import Input from '../Input';
import warnIcon from "../../assets/warn-icon.svg"
import { css, DefaultTheme, FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components';
import FilterMobile from '../FilterMobile';
import SidebarFilters from '../SidebarFilter';

interface FilterProps {
    setInputChange: Func<TransactionType, void>
    inputChange: TransactionType

}
export interface IconPreset {
    imagePath: string
    backgroundSize: string
}

export interface FilterStyles {
    containerStyles: FlattenSimpleInterpolation
    iconStyles: FlattenSimpleInterpolation
}

const Filter: React.FC = () => {
    const { setInputChange , inputChange , currentFilterStyles} = useContext(GlobalPropsContext)

    const [copyInputChange, setCopyInputChange] = useState<TransactionType>(inputChange!);
    const options: Option[] = [
        { label: 'status', value: '' },
        { label: 'created', value: 'created' },
        { label: 'processing', value: 'processing' },
        { label: 'processed', value: 'processed' },
    ]

    const filterStyles: FilterStyles[] = [
        {
            containerStyles: css`
                border: none;   
                

            `,
            iconStyles: css`
                background-size: 25px;
                background-image: url(/src/assets/search-icon.svg);
                
            `
        },
        {
            containerStyles: css`
            border: 3px solid #e02b57;
            `,
            iconStyles: css`
                background-size: 5px;
                background-image: url(/src/assets/warn-icon.svg);
            `
        }
    ]

    return (
        <div className="container-seacher">
            <Input
                copyInputChange={copyInputChange}
                setCopyInputChange={setCopyInputChange}
                setInputChange={setInputChange!}
                filterStyles={currentFilterStyles!}
            />
            <Dropdown
                placeHolder="status"
                copyInputChange={copyInputChange}
                setCopyInputChange={setCopyInputChange}
                options={options}
            />
            <FilterMobile />
            <SidebarFilters 
                copyInputChange={copyInputChange}
                setCopyInputChange={setCopyInputChange}
            />
        </div>
    );
}

export default Filter; 