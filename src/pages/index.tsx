import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <img
          src="img/budgetBoardLogo.svg"
          alt="Budget Board Logo"
          className={styles.logo}
        />
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={styles.buttonPrimary} to="/docs">
            Get Started
          </Link>
          <Link
            className={styles.buttonSecondary}
            to="https://demo.budgetboard.net"
          >
            Live Demo
          </Link>
          <Link
            className={styles.buttonSecondary}
            to="https://github.com/teelur/budget-board"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="A simple app for tracking monthly spending and working towards financial goals.">
      <Hero />
    </Layout>
  );
}
