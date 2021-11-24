import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Contact</h2>
      <div>Contact Information</div>
    </Layout>
  );
}
