import '@toast-ui/editor/dist/toastui-editor.css'
import 'prismjs/themes/prism.css'
import dynamic from 'next/dynamic'

interface Props {
  content: string
}

const TuiEditor = ({ content = '' }: Props) => {
  const Viewer = dynamic(
    () => import('@toast-ui/react-editor').then(m => m.Viewer),
    { ssr: false }
  )
  return (
    <>
      {content && (
        <Viewer
          initialValue={content || ''}
        />
      )}
    </>
  )
}

export default TuiEditor
