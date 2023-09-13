// HomepageFeatures.tsx

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Blacklist',
    description: (
      <>
        <div className={styles.textBlock}>
            One such use case of this innovative system is the Blacklist functionality. This document delves deep into how professional entities can leverage Eventon to dispatch signals from off-chain, signifying updates to a blacklist.
        </div>
      </>
    ),
  },
  {
    title: 'Copy Trading',
    description: (
      <>
        <div className={styles.textBlock}>
          Another use case of this innovative system is the Whitelist functionality.This document delves deep into how professional entities can leverage Eventon to dispatch signals from off-chain, signifying updates to a whitelist.
        </div>
        
      </>
    ),
  },
  {
    title: 'Vulnerable Contract Alert',
    description: (
      <>
        <div className={styles.textBlock}>
        The VulnerableContractAlert system is designed to detect and alert users to potential vulnerabilities in smart contracts within blockchain networks.
        <h1></h1>
        Smart contracts are critical components of blockchain ecosystems, and identifying vulnerabilities is essential to prevent security breaches and financial losses.
        </div>
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <img src={ImgSrc} alt={title} className={styles.featureImg} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
