import * as C from "./Styles";

export interface LoadingProps {
  loading: boolean

}

const Loading= ({ loading }: LoadingProps) => {
  return (
    <C.Centralize $loading={loading}>
      <C.LoadingStyled>
        <C.BarsLoading index={1} $loading={loading} />
        <C.BarsLoading index={2} $loading={loading} />
        <C.BarsLoading index={3} $loading={loading} />
      </C.LoadingStyled>
      <C.Paragraph>Warren</C.Paragraph>
    </C.Centralize>

  );
}

export default Loading;