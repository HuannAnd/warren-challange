import * as StylesInput from './Styles';

import { useFilter } from '@/hooks/useFilter';

import { FlattenSimpleInterpolation } from 'styled-components';


type InputProps = {
  alertState: {
    container: FlattenSimpleInterpolation,
    button: FlattenSimpleInterpolation
  }
}

const Input = ({ alertState }: InputProps) => {
  const { arbitraryFilter, setArbitraryFilter, setfilter } = useFilter()

  return (
    <StylesInput.Container currentStyles={alertState.container}>
      <StylesInput.Input
        type="text"
        placeholder='Search by description of transaction'
        onChange={(event) => setArbitraryFilter(
          { ...arbitraryFilter, title: event.target.value }
        )}
      />
      <StylesInput.Button
        onClick={() => setfilter(arbitraryFilter)}
        currentStyles={alertState.button}
      />
    </StylesInput.Container>

  );
}

export default Input;