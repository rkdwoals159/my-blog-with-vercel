import '@toast-ui/editor/dist/toastui-editor.css'
import dynamic from 'next/dynamic'
export default function ToastEditor() {
  const Editor = dynamic(
    () => import('@toast-ui/react-editor').then(m => m.Editor),
    { ssr: false }
  )

  return (
    <>
      <div>
        <Editor
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
        />
      </div>
    </>
  )
}
