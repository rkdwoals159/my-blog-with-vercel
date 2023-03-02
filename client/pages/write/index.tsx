import ToastEditor from './components/Editor'
import Login from './components/Login'

export default function writeIndex() {
  return (
    <>
      <div>여기는 작성페이지 입니다. 당신은 작성자 입니까?</div>
      {/* <ToastEditor></ToastEditor> */}
      <Login></Login>
    </>
  )
}
