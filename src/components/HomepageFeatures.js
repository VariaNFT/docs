import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Stop Repeat',
    Svg: require('../../static/img/undraw_Chilling.svg').default,
    description: (
      <>
        VariaNFT lets you mint different NFTs to your targets without editing
        and uploading bunch of files.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_Portfolio_update.svg').default,
    description: (
      <>
        VariaNFT accepts SVG and CSV which can be retrieved from many design
        software and data source.
      </>
    ),
  },
  {
    title: 'Strong Supported',
    Svg: require('../../static/img/undraw_programme.svg').default,
    description: (
      <>
        VariaNFT used{' '}
        <a href="//rarible.com/" target="_blank" referrerPolicy="no-referrer">Rarible</a>{' '}
        and <a href="//nft.storage/" target="_blank" referrerPolicy="no-referrer">NFT.storage</a>.{' '}
        The NFTs on chain are secure and the data are delievered via IPFS.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
