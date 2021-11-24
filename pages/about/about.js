import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h2 className={utilStyles.headingLg}>About Ilhan</h2>
      <div>About me!</div>
    </Layout>
  );
}
