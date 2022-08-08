import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '欢迎',
    Svg: require('@site/static/img/welcome.svg').default,
    description: (
      <>
        如您所见，这是一个非常简陋的测试站点。
      </>
    ),
  },
  {
    title: '文档内容',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
        该站点的文档内容是一些笔记。
      </>
    ),
  },
  {
    title: '博客内容',
    Svg: require('@site/static/img/bird2.svg').default,
    description: (
      <>
        该站点的博客内容是一些鸟类记录。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
