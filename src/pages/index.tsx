import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { BarChart2, Globe, RefreshCw, ShieldCheck, Wallet } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  const quickStartUrl = useBaseUrl("docs/quick-start-guide");
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
          <Link className={styles.buttonPrimary} to={quickStartUrl}>
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

type FeatureItem = {
  title: string;
  icon: React.ReactNode;
  items: { label: string; description: string }[];
};

const FEATURES: FeatureItem[] = [
  {
    title: "Manage Finances",
    icon: <Wallet size={28} />,
    items: [
      {
        label: "Accounts & Assets",
        description:
          "Manage financial accounts (checking, savings, credit cards) and assets (property, valuables) in one place.",
      },
      {
        label: "Transactions",
        description:
          "Record and categorize transactions to keep track of your spending habits.",
      },
      {
        label: "Budgeting",
        description:
          "Set monthly budgets for different categories and track your spending against them.",
      },
    ],
  },
  {
    title: "Data Import & Automation",
    icon: <RefreshCw size={28} />,
    items: [
      {
        label: "Transaction CSV Import",
        description: "Import transactions in bulk using CSV files.",
      },
      {
        label: "Sync Providers",
        description:
          "Integrate with financial institutions through SimpleFIN and LunchFlow for automatic syncing.",
      },
      {
        label: "Auto-Categorization",
        description:
          "Train a machine learning model on your transactions to automatically predict categories.",
      },
      {
        label: "Automatic Rules",
        description:
          "Create rules to automatically update transactions based on description, amount, or date.",
      },
    ],
  },
  {
    title: "Analytics & Insights",
    icon: <BarChart2 size={28} />,
    items: [
      {
        label: "Financial Goals",
        description:
          "Set and track progress towards goals like saving for a house or paying off debt.",
      },
      {
        label: "Customizable Trends Charts",
        description:
          "Visualize spending trends with charts filterable by date range, account, and category.",
      },
    ],
  },
  {
    title: "Security",
    icon: <ShieldCheck size={28} />,
    items: [
      {
        label: "User Authentication",
        description:
          "Authenticate locally with two-factor authentication (2FA), or bring your own OIDC provider.",
      },
    ],
  },
  {
    title: "Internationalization",
    icon: <Globe size={28} />,
    items: [
      {
        label: "Multiple Languages",
        description:
          "Selectable languages include English, German, French, and Simplified Chinese.",
      },
      {
        label: "Localized Formats",
        description:
          "Dates and numbers are displayed according to the selected language and locale.",
      },
    ],
  },
];

function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featureGrid}>
          {FEATURES.map((group) => (
            <div key={group.title} className={styles.featureCard}>
              <div className={styles.featureCardHeader}>
                <span className={styles.featureIcon}>{group.icon}</span>
                <h3 className={styles.featureCardTitle}>{group.title}</h3>
              </div>
              <ul className={styles.featureList}>
                {group.items.map((item) => (
                  <li key={item.label} className={styles.featureListItem}>
                    <span className={styles.featureLabel}>{item.label}</span>
                    <span className={styles.featureDesc}>
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SCREENSHOTS: { src: string; alt: string }[] = [
  {
    src: "https://raw.githubusercontent.com/teelur/budget-board/main/img/budget-board-dashboard.png",
    alt: "Dashboard",
  },
  {
    src: "https://raw.githubusercontent.com/teelur/budget-board/main/img/budget-board-accounts.png",
    alt: "Accounts",
  },
  {
    src: "https://raw.githubusercontent.com/teelur/budget-board/main/img/budget-board-transactions.png",
    alt: "Transactions",
  },
  {
    src: "https://raw.githubusercontent.com/teelur/budget-board/main/img/budget-board-budgets.png",
    alt: "Budgets",
  },
  {
    src: "https://raw.githubusercontent.com/teelur/budget-board/main/img/budget-board-goals.png",
    alt: "Goals",
  },
  {
    src: "https://raw.githubusercontent.com/teelur/budget-board/main/img/budget-board-assets.png",
    alt: "Assets",
  },
  {
    src: "https://raw.githubusercontent.com/teelur/budget-board/main/img/budget-board-trends.png",
    alt: "Trends",
  },
  {
    src: "https://raw.githubusercontent.com/teelur/budget-board/main/img/budget-board-external-accounts.png",
    alt: "External Accounts",
  },
];

type LightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

function Lightbox({ src, alt, onClose }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className={styles.lightboxOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        className={styles.lightboxClose}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        className={styles.lightboxImg}
        onClick={(e) => e.stopPropagation()}
      />
      <span className={styles.lightboxLabel}>{alt}</span>
    </div>
  );
}

function Screenshots() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(
    null,
  );

  return (
    <section className={styles.screenshotsSection}>
      {active && (
        <Lightbox
          src={active.src}
          alt={active.alt}
          onClose={() => setActive(null)}
        />
      )}
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Screenshots</h2>
        <div className={styles.screenshotScroll}>
          {SCREENSHOTS.map((s) => (
            <button
              key={s.alt}
              type="button"
              className={styles.screenshotItem}
              onClick={() => setActive(s)}
              aria-label={`View ${s.alt} screenshot`}
            >
              <img
                src={s.src}
                alt={s.alt}
                className={styles.screenshotImg}
                loading="lazy"
              />
              <span className={styles.screenshotLabel}>{s.alt}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout description="A simple app for tracking monthly spending and working towards financial goals.">
      <Hero />
      <main>
        <Features />
        <Screenshots />
      </main>
    </Layout>
  );
}
