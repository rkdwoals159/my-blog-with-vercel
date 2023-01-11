import type { PostingValue } from './index'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
export interface ContentProps {
  value: PostingValue
}
export default function PostingContent(props: ContentProps) {
  return <StyledContent>{props.value.content}</StyledContent>
}

const StyledContent = styled.div`
  /* ${tw`rounded-lg border-4`} */
  display: flex;
  justify-content: center;
  min-height: 500px;
`
