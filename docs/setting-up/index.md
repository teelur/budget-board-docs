# Setting Up

## Create your login

When you first connect to Budget Board, create an account by clicking `Register Here` at the bottom of the login box.

:::note
If you've configured an email sender in your compose file, check your email for a confirmation link before logging in.
:::

## Add accounts

After creating your login, set up the accounts you want to track. You can add accounts in several ways.

### Sync via SimpleFIN

See the [SimpleFIN Sync](../features/importing-data/simplefin-sync#getting-started) page for more details.

### Manually create accounts

See the [Accounts](../features/accounts#creating-accounts) page for details.

## Add transactions

Now that your accounts exist, add transactions.

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

Categories are organized as parents (broad areas, e.g., Food & Dining) and children (more specific, e.g., Groceries, Restaurants).

### Custom categories

Budget Board includes default categories. To add custom categories, open `Transactions Settings` (gear icon on the Transactions page). A custom category can be a parent or a child—if it’s a child, specify its parent.

### Assigning categories

#### Manually

Open a transaction on the Transactions page and select a category from the dropdown.

#### Automatic rules

Create rules in `Transactions Settings` under Automatic Rules to categorize transactions based on conditions. Rules are applied during sync.

:::tip
Automatic rules are helpful for recurring transactions that always use the same category (for example, monthly utilities or rent).
:::

## Create budgets

After you have account and transaction data, set income and expense targets. See the [Budgets](../features/budgets.mdx) page for details.

## Set goals

Create goals to track savings targets or paying off debt. See the [Goals](../features/goals.mdx) page for details.
