import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import SealSvg from '@site/static/img/Logo.svg'
import AriesHeadShotUrl from '@site/static/img/art-by-ruri/Aries.png'
import ElizabethHeadShotUrl from '@site/static/img/art-by-ruri/Elizabeth.png'
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>        
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Avinadal is a community of creators of all kinds, from writers to artists to musicians.">
      <HomepageHeader />
      <main>
        <section className={clsx(styles.section, styles.sectionSealed)}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--2', styles.centerImg)}>
                <SealSvg role="img" className={styles.svgSeal} />
              </div>
              <div className={clsx('col col--8')}>
                <p>If you feel like you can't quite find a community to fit into, Avinadal may be the place you're looking for. We approach fun in a healthy, adult-oriented way here. There is no judgment around the kind of content you want to create; as long as you're not breaking any laws, we want nothing more than to support you in that content creation.</p>                
                <p>Avinadal is a content-creation community founded by Aries Villanite with the help of other creators of all kinds, from writers to artists to musicians. The primary goal of this organization is to create content based on the Universe of Avilium, but we also love gaming, watching anime, and doing all kinds of nerdy things as a group! If you're looking for a new community, this may be a great place to join!</p>
              </div>
              <div className={clsx('col col--2', styles.centerImg)}>
                <SealSvg role="img" className={styles.svgSeal} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <div className='row'>
              <h2 className={styles.centeredHeading}>What does 'virtual persona' mean?</h2>
            </div>
            <div className="row">
              <div className={clsx('col col--3', styles.centerImg)}>
                <img src={AriesHeadShotUrl}></img>
              </div>
              <div className="col">
                <p>A Virtual Persona is an online persona crafted by an internet user or organization. These personas can be created for various reasons, including but not limited to concerns around anonymity, branding purposes, as a creative outlet, or simply just as a personal aesthetic choice. Some people stream with these personas, commonly known as VTubers, while others may prefer using it as an online identity to interact with others.</p>
                <p>Some people in the Avinadal community like to stick to our virtual personas whenever creating content, but it isn't a requirement. Many of us may use virtual avatars and still behave as ourselves while interacting with fellow community members and audiences.</p>
                <p>This fun approach to content creation and fan interaction opens up a few doors for us regarding additional creative opportunities and unique interactions with each other and our followers.</p>
                <p>Despite this, it should be noted that the community tries very hard not to lose sight of the differences between “Real Life” and “Role Play” regarding our personas. While some of us are more experienced with healthily blurring the lines between the two, we encourage those with less experience to avoid that behavior, as it can lead to unhealthy mindsets and habits when embracing one's fictional virtual persona.</p>
              </div>
              <div className={clsx('col col--3', styles.centerImg)}>
                <img src={ElizabethHeadShotUrl}></img>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
