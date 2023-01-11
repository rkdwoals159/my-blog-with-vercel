import type { PostingValue } from './index'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import { Viewer } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import dynamic from 'next/dynamic'
export interface ContentProps {
  value: PostingValue
}
export default function PostingContent(props: ContentProps) {
  const NoSsrViewer = dynamic(() => import('../TuiViewer'), {
    ssr: false
  })
  return (
    <StyledContent>
      <NoSsrViewer content={props.value.content}></NoSsrViewer>
    </StyledContent>
  )
}

const StyledContent = styled.div`
  ${tw`min-h-[50vh] flex justify-center`}
`
