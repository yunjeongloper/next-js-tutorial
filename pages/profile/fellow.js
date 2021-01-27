import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;

const Container = styled.div`
  text-align: center;
`;

export default function Fellow() {
  return (
    <Layout>
      <Head>
        <title>ㅇㅇㅇ 펠로우</title>
      </Head>
      <Container>
        <GlobalStyle />
        <h1>펠로우 프로필 페이지</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Container>
    </Layout>
  );
}
