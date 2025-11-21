# Setting Up

## Create your login

### Local Login

When you first connect to Budget Board, create a user account by clicking `Register Here` at the bottom of the login box.

:::note
If you've configured an email sender in your compose file, check your email for a confirmation link before logging in.
:::

### OIDC Login

If you've set up OpenID Connect (OIDC) authentication, log in using the `Login with OIDC` button. This redirects you to your identity provider for authentication. After successful authentication, you'll be redirected back to Budget Board and a user account will be created automatically.

## Add accounts

After creating your login, set up the financial accounts you want to track. You can add financial accounts in several ways.

### Sync via SimpleFIN

If you've set up SimpleFIN integration, your financial accounts will be added automatically when you run a sync.

See the [SimpleFIN Sync](../features/importing-data/simplefin-sync#getting-started) page for more details.

### Manually create accounts

Otherwise, you can create accounts manually on the Accounts page.

See the [Accounts](../features/accounts#creating-accounts) page for details.

## Add transactions

Now that your financial accounts have been added, you can add transactions.

### Sync via SimpleFIN

If you've linked SimpleFIN, transactions are imported automatically when you run a sync.

### Import via CSV

For bulk imports, use a CSV file. See [Import via CSV](../features/importing-data/csv-import) for details.

### Manually create transactions

Create transactions manually on the Transactions page by clicking the `+` button in the top-right. Fill out the required fields and click `Submit`.

:::tip
Useful for one-off transactions, such as a single cash purchase.
:::

## Categorize transactions

With transactions added, assign categories.

### Category hierarchy

Budget Board organizes categories hierarchically. Parent categories are broad areas (e.g., Food & Dining, Utilities, Shopping, etc.), while child categories are more specific (e.g., Groceries, Restaurants, Clothing, Hobbies, etc.).

### Custom categories

Budget Board includes default categories that cover common expenses. For more personalization, you can create your own custom categories.

To add custom categories, open `Transactions Settings` (gear icon on the Transactions page). You can create new parent categories or child categories under existing parents.

### Assigning categories

#### Manually

Click a transaction on the Transactions page and select a category from the dropdown.

#### Automatic rules

Create rules in `Transactions Settings` under Automatic Rules to categorize transactions based on conditions. Rules are applied during sync.

:::tip
Automatic rules are helpful for recurring transactions that always use the same category (for example, monthly utilities or rent).
:::

## Create budgets

After you have account and transaction data, set income and expense targets. See the [Budgets](../features/budgets.mdx) page for details.

## Add assets

Track non-account-based assets like property or vehicles. See the [Assets](../features/assets.mdx) page for details.

## Set goals

Create goals to track savings targets or paying off debt. See the [Goals](../features/goals.mdx) page for details.
