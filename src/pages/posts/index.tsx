import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              nihil eum explicabo dolores, quae distinctio vero ut blanditiis
              perferendis numquam odit ipsa ab, tempore id? Saepe unde
              laboriosam natus nam?
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              nihil eum explicabo dolores, quae distinctio vero ut blanditiis
              perferendis numquam odit ipsa ab, tempore id? Saepe unde
              laboriosam natus nam?
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              nihil eum explicabo dolores, quae distinctio vero ut blanditiis
              perferendis numquam odit ipsa ab, tempore id? Saepe unde
              laboriosam natus nam?
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              nihil eum explicabo dolores, quae distinctio vero ut blanditiis
              perferendis numquam odit ipsa ab, tempore id? Saepe unde
              laboriosam natus nam?
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
