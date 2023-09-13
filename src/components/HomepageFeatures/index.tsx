// HomepageFeatures.tsx

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
  url: string; 
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Blacklist',
    Img: './img/blacklist.png',
    description: (
      <>
        <div className={styles.textBlock}>
          One such use case of this innovative system is the Blacklist functionality. This document delves deep into how professional entities can leverage Eventon to dispatch signals from off-chain, signifying updates to a blacklist.
        </div>
      </>
    ),
    url: '/eventon-doc/docs/Use-Cases/Blacklist',
  },
  {
    title: 'Copy Trading',
    Img: './img/copytrading.png',
    description: (
      <>
        <div className={styles.textBlock}>
          Eventon's online copy trading subscription system aims to connect experienced traders (signal providers) with investors (subscribers).
          <h1></h1>
          The core concept of the system: Subscribers can replicate the trading strategies of signal providers, thereby benefiting from their expertise and successful trading decisions.
        </div>
      </>
    ),
    url: '/eventon-doc/docs/Use-Cases/CopyTrading',
  },
  {
    title: 'Vulnerable Contract Alert',
    Img: './img/smartbug.png',
    description: (
      <>
        <div className={styles.textBlock}>
          The VulnerableContractAlert system is designed to detect and alert users to potential vulnerabilities in smart contracts within blockchain networks.
          <h1></h1>
          Smart contracts are critical components of blockchain ecosystems, and identifying vulnerabilities is essential to prevent security breaches and financial losses.
        </div>
      </>
    ),
    url: '/eventon-doc/docs/Use-Cases/VulnerableContractAlert',
  },
];

function Feature({ title, Img, description, url }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={url}>{title}</a></h3> {/* 将标题包装在链接中 */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container text--center"> {/* 使用 text--center 类 */}
        <h1>Use Cases Example</h1> 
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
