import { ChangeEvent, MutableRefObject } from 'react'

import useSetTitle from '../../hooks/useSetTitle'


export default function useFilterHandles(ref: MutableRefObject<HTMLInputElement>) {
  const setTitle = useSetTitle()

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    ref.current.value = e.currentTarget.value
  }

  function handleButtonTitleClick() {
    setTitle(ref.current.value);
  }

  return {
    handleTitleChange,
    handleButtonTitleClick,
  }

}