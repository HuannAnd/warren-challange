import { options } from '@/constants/statusOptions';

import {
  Dropdown,
} from './components/index';

import { Button, Input, Container } from './Styles';

import useAlerts from '@/hooks/useAlerts';
import useFilterHandles from './useFilterHandles';

import { useRef } from 'react';


function ButtonIcon() {
  return (
    <svg viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M28.7659 57.2567C44.6529 57.2567 57.5318 44.4394 57.5318 28.6284C57.5318 12.8174 44.6529 0 28.7659 0C12.8789 0 0 12.8174 0 28.6284C0 44.4394 12.8789 57.2567 28.7659 57.2567ZM28.7659 49.8688C40.553 49.8688 50.1083 40.3591 50.1083 28.6284C50.1083 16.8976 40.553 7.38796 28.7659 7.38796C16.9788 7.38796 7.42346 16.8976 7.42346 28.6284C7.42346 40.3591 16.9788 49.8688 28.7659 49.8688Z" fill="#D9D9D9" />
      <path d="M45.4494 51.0627L50.6986 45.8387L62.5092 57.5928L57.2601 62.8169L45.4494 51.0627Z" fill="#D9D9D9" />
    </svg>
  )
}

const Filter = () => {
  const input = useRef<HTMLInputElement>(null!)
  const hasAlert = useAlerts();

  const {
    handleTitleChange,
    handleButtonTitleClick,
  } = useFilterHandles(input);

  return (
    <Container>
      <div className="Filter__input-container">
        <Input
          ref={input}
          type="text"
          placeholder='Search the transaction by title'
          onChange={handleTitleChange}
          $hasAlert={hasAlert}
        />
        <Button onClick={handleButtonTitleClick}>
          <ButtonIcon />
        </Button>
      </div>
      <Dropdown options={options} placeHolder="status" />
    </Container>
  );
}

export default Filter; 