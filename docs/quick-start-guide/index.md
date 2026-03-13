# Quick Start Guide

This guide will walk you through the process of getting started with Budget Board, from deployment to creating your first budgets and goals.

## Deploy Budget Board

The first step is to deploy Budget Board. Budget Board uses Docker for deployment and instructions can be found on the [Deploy](../deploy/index.mdx) page.

## Create your Login

Once you have deployed the app, you can create a user account to log in. Depending on your configuration, you can either create an account with a local username and password or log in with OpenID Connect (OIDC) if you've set that up.

### Local Login

When you first connect to Budget Board, create a user account by clicking `Register Here` at the bottom of the login box and filling out the form.

:::tip
If you've configured an email sender in your compose file, check your email for a confirmation link before logging in.
:::

### OIDC Login

If you've set up OpenID Connect (OIDC) authentication, log in using the `Login with OIDC` button. This redirects you to your identity provider for authentication. After successful authentication, you'll be redirected back to Budget Board and a user account will be created automatically.

## Add Accounts

Now that you have set up your user account, the next step is to start creating your financial accounts. You will need to create an account for each financial account you wish to track in Budget Board (for example, checking account, credit card, cash, etc.). Each account will have its own balance and transaction history.

See the [Accounts](../features/accounts.mdx) page for details on how to add accounts.

:::tip
If you would like to sync data from an external provider like SimpleFIN or LunchFlow, we will set up that connection later. You will still need to create accounts for them here, and we will link them to the external provider later.
:::

## Add Assets

Track non-account-based assets like property or vehicles. See the [Assets](../features/assets.mdx) page for details.

## Add Transactions

Now that your financial accounts have been added, you can add transactions. There are a few different ways to add transactions.

### Sync via External Providers

When an account is linked to an external provider (e.g., SimpleFIN, LunchFlow, etc.), transactions will be added automatically during the sync process.

### Import via CSV

If your bank provides transaction data in CSV format or you are migrating from another application, you can import transaction data via CSV. See [Import via CSV](../features/importing-data/csv-import) for details.

### Manually Create Transactions

If you would like to manually log your transactions, you can navigate to the Transactions page and click the `+` button in the top right. Fill out the required fields and click `Submit`.

:::tip
Useful for one-off transactions, such as a single cash purchase.
:::

## Categorize Transactions

Once you have added some transactions, you will now want to categorize them. Categorizing transactions allows you to set budgets per category and track your spending in each category against those budgets.

See the [Transactions](../features/transactions/index.mdx#transaction-categorization) page for details on categorizing transactions.

## Create Budgets

Now that you have account and transaction data added, you can set up budgets to track your monthly spending against your income.

See the [Budgets](../features/budgets.mdx) page for details.

## Set Goals

Now that you have budgets set up, you can set up your financial goals. Goals allow you to set targets for milestones like savings targets or paying off debt, and track your progress towards those targets over time.

See the [Goals](../features/goals.mdx) page for details.
