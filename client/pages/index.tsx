import type { NextPage } from 'next'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import GNB from './components/GNB'

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
          <GNB></GNB>
          {/* <Input placeholder="box" /> */}
          {/* <MyDiv>Test Text</MyDiv> */}
        </h1>
      </main>
    </div>
  )
}

export default Home
