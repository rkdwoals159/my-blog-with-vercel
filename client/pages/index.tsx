import { getPostingAll } from 'utils/apiManager'
import Category from './components/Category'
import { PostingValue } from './components/posting'

interface HomeProps {
  data: PostingValue[]
}
const Home = ({ data }: HomeProps) => {
  return (
    <div>
      <main>
        <Category data={data}></Category>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const data = await getPostingAll()
  console.log(data)
  return {
    props: { data } // 페이지 컴포넌트에 props로 넘길 것
  }
}

export default Home
