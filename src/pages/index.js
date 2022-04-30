import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";
// import { translate } from "@docusaurus/Translate";

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout title="Homepage" description="IDEP Documentation">
            <main>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row cards__container">
                            <div className={clsx("col col--4", styles.feature)}>
                                <Link className="navbar__link" to="docs/GettingStarted/Introduction">
                                    <div className="card">
                                        <div className="card__header">
                                            <h3>
                                                <Translate description="GettingStarted">
                                                    🤯 Getting Started
                                                </Translate>
                                            </h3>
                                        </div>
                                        <div className="card__body">
                                            <p>
                                                <Translate description="GettingStarted">
                                                    Get a high-level understanding of IDEP's
                                                    architecture.
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={clsx("col col--4", styles.feature)}>
                                <Link className="navbar__link" to="docs/Validators/ValidatorsOverview">
                                    <div className="card">
                                        <div className="card__header">
                                            <h3>
                                                <Translate description="run-validator">
                                                    🎛 Run a Validator Node
                                                </Translate>
                                            </h3>
                                        </div>
                                        <div className="card__body">
                                            <p>
                                                <Translate description="validate-transactions">
                                                    Validate transactions, secure the network, and earn
                                                    rewards.
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={clsx("col col--4", styles.feature)}>
                                <Link
                                    className="navbar__link"
                                    to="docs/Developers/Overview"
                                >
                                    <div className="card">
                                        <div className="card__header">
                                            <h3>
                                                <Translate description="Overview">
                                                    ◼️ Create an SNIP20 Token
                                                </Translate>
                                            </h3>
                                        </div>
                                        <div className="card__body">
                                            <p>
                                                <Translate description="snip-20">
                                                    Launch your own SNIP20 token, IDEP's equivalent of
                                                    ERC-20 with added privacy.
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={clsx("col col--4", styles.feature)}>
                                <Link className="navbar__link" to="docs/Developers/Overview">
                                    <div className="card">
                                        <div className="card__header">
                                            <h3>
                                                <Translate description="Developers-Overview">
                                                    🌉 Integrate
                                                </Translate>
                                            </h3>
                                        </div>
                                        <div className="card__body">
                                            <p>
                                                <Translate description="Developers-Overview">
                                                    Ready to integrate IDEP? Follow our detailed guide
                                                    for best practices.
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={clsx("col col--4", styles.feature)}>
                                <Link className="navbar__link" to="docs/Wallets/wallet-guide">
                                    <div className="card">
                                        <div className="card__header">
                                            <h3>
                                                <Translate description="manage-wallet">
                                                    📲 Wallet Management
                                                </Translate>
                                            </h3>
                                        </div>
                                        <div className="card__body">
                                            <p>
                                                <Translate description="wallet-options">
                                                    Create a wallet, check your balance, and learn about
                                                    wallet options.
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={clsx("col col--4", styles.feature)}>
                                <Link className="navbar__link" to="blog/">
                                    <div className="card">
                                        <div className="card__header">
                                            <h3>
                                                <Translate description="learn-how">
                                                    📝 IDEP Blog
                                                </Translate>
                                            </h3>
                                        </div>
                                        <div className="card__body">
                                            <p>
                                                <Translate description="Blog">
                                                    IDEP Network Official Blog for various topics and discussions.
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Home;