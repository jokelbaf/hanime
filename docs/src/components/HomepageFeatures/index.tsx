import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    image: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Fully compatible with official website',
        image: '/hanime/img/api-icon.png',
        description: (
            <>
                Hanime API wrapper provides you with all routes and methods available on the official website.
            </>
        ),
    },
    {
        title: 'Ultimate Speed',
        image: '/hanime/img/speed-icon.png',
        description: (
            <>
                Enjoy fast concurrent requests with fully asynchronous API calls.
            </>
        ),
    },
    {
        title: 'Built-in Logging',
        image: '/hanime/img/logs-icon.png',
        description: (
            <>
                Use the built-in logging feature to log your API requests and responses.
            </>
        ),
    },
];

function Feature({ title, image, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={image} className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
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
