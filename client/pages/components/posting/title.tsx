import type { ContentProps } from './content'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
export default function PostingTitle(props: ContentProps) {
  return (
    <>
      <StyledTitle>
        {props.value.title}
        <TimeLikeContainer>
          <StyledCreatedAt>
            {new Date(props.value.createdAt).toLocaleString()}
          </StyledCreatedAt>
          <StyledCreatedAt>{`좋아요 : ${props.value.liked}`}</StyledCreatedAt>
        </TimeLikeContainer>
      </StyledTitle>
    </>
  )
}

const StyledTitle = styled.h1`
  ${tw`text-4xl px-7 py-4 flex flex-col`}
`
const StyledCreatedAt = styled.div`
  ${tw`text-xs mr-3`}
`
const TimeLikeContainer = styled.div`
  display: flex;
`
