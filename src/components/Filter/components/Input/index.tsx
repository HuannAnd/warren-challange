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
  const [{ preview }, {apply , choose}] = useFilter()

  return (
    <StylesInput.Container currentStyles={alertState.container}>
      <StylesInput.Input
        type="text"
        placeholder='Search by description of transaction'
        onChange={(event) => choose(
          { ...preview, title: event.target.value }
        )}
      />
      <StylesInput.Button
        onClick={() => apply(preview)}
        currentStyles={alertState.button}
      />
    </StylesInput.Container>

  );
}

export default Input;