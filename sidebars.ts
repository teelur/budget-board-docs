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
      type: "doc",
      id: "setting-up/index",
      label: "Setting Up",
    },
    {
      type: "category",
      label: "Features",
      items: [
        {
          type: "category",
          label: "Importing Data",
          items: [
            "features/importing-data/simplefin-sync",
            "features/importing-data/csv-import",
          ],
        },
        "features/accounts",
        "features/assets",
        "features/budgets",
        "features/goals",
      ],
    },
  ],
};

export default sidebars;
