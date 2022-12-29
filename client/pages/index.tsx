import type { NextPage } from 'next'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import Category from './components/Category'

const Input = tw.input`
    text-center border h-28
`

const MyDiv = styled.div`
  background: gold;
  font-size: 5rem;
  margin-top: 10px;
`

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h1>
          {/* <Input placeholder="box" />
          <MyDiv>Test Text</MyDiv> */}
        </h1>
        <Category></Category>
      </main>
    </div>
  )
}

export default Home
