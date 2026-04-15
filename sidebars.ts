import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "doc",
      id: "overview/index",
      label: "Overview",
    },
    {
      type: "doc",
      id: "quick-start-guide/index",
      label: "Quick Start Guide",
    },
    {
      type: "category",
      label: "Deploy",
      link: { type: "doc", id: "deploy/index" },
      items: [
        {
          type: "category",
          label: "Configuration",
          link: { type: "doc", id: "deploy/configuration/index" },
          items: [
            "deploy/configuration/email-sender",
            "deploy/configuration/oidc-authentication",
            {
              type: "category",
              label: "Migration Guides",
              items: [
                "deploy/configuration/migration-guides/v2.x-to-v3.x-migration",
              ],
            },
          ],
        },
        "deploy/versions",
      ],
    },
    {
      type: "category",
      label: "Features",
      items: [
        {
          type: "category",
          label: "Importing Data",
          items: [
            {
              type: "category",
              label: "External Providers",
              link: {
                type: "doc",
                id: "features/importing-data/external-providers/index",
              },
              items: [
                "features/importing-data/external-providers/simplefin",
                "features/importing-data/external-providers/lunchflow",
              ],
            },
            "features/importing-data/csv-import",
          ],
        },
        "features/dashboard",
        "features/accounts",
        "features/assets",
        {
          type: "category",
          label: "Transactions",
          link: { type: "doc", id: "features/transactions/index" },
          items: [
            "features/transactions/automatic-rules",
            "features/transactions/auto-categorization",
          ],
        },
        "features/budgets",
        "features/goals",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      items: ["contributing/translations"],
    },
    {
      type: "category",
      label: "Release Notes",
      items: [
        "release-notes/release-v3.5.0",
        "release-notes/release-v3.4.0",
        "release-notes/release-v3.3.1",
        "release-notes/release-v3.3.0",
        "release-notes/release-v3.2.4",
        "release-notes/release-v3.2.3",
        "release-notes/release-v3.2.2",
        "release-notes/release-v3.2.1",
        "release-notes/release-v3.2.0",
        "release-notes/release-v3.1.6",
        "release-notes/release-v3.1.5",
        "release-notes/release-v3.1.4",
        "release-notes/release-v3.1.3",
        "release-notes/release-v3.1.2",
        "release-notes/release-v3.1.1",
        "release-notes/release-v3.1.0",
      ],
    },
  ],
};

export default sidebars;
