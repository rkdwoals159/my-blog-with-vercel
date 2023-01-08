import styled from '@emotion/styled'
interface PostingProps {
  postId: number
}

const StyledPosting = styled.div`
  border: solid 1px;
`
export default function Posting(props: PostingProps) {
  return (
    <>
      <StyledPosting>ddd{props.postId}</StyledPosting>
    </>
  )
}
