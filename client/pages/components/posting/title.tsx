import type { ContentProps } from './content'
import styled from '@emotion/styled'
export default function PostingTitle(props: ContentProps) {
  return (
    <>
      <StyledTitle>{props.value.title}</StyledTitle>
    </>
  )
}

const StyledTitle = styled.h1`
  font-size: 35px;
  padding : 10px 15px;
  /* border-bottom: solid 1px; */
`
