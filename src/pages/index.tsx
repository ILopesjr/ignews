import Head from 'next/head';
import Image from "next/image";
import { SubscriberButton } from '../components/SubscribeButton';

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get acces to all the publications <br />
          <span>for  $9.90 month</span>
        </p>
        <SubscriberButton />
        </section>        

        <Image src="/images/avatar.svg" alt="Girl coding" width="336"  height="521" />
      </main> 
    </>
  );
}
