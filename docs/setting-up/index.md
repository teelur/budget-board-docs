# Setting Up

## Create your login

When you first connect to Budget Board, create a login account by selecting `Register Here` at the bottom of the login box.

:::note
If you configured an email sender in your compose file, check your email for a confirmation link before you can log in.
:::

## Add accounts

With your newly created login, the first thing you should do is set up all accounts you wish to track. This can be done in a few different ways.

### Sync via SimpleFIN

You can automatically sync your accounts with a service called [SimpleFIN Bridge](https://beta-bridge.simplefin.org/).

After you set up your SimpleFIN account, click the `New Connection` button to generate an access token.

Once you have an access token, navigate to the Settings page in Budget Board and paste it into the `Link SimpleFIN` section. Click `Save Changes`. If successful, the section will be marked `Linked`.

Then click `Sync` in the top-right corner to import your accounts.

### Manually create accounts

See the [Accounts](../features/accounts#creating-accounts) page for more details.

## Add transactions

Now that your accounts exist, you can add transactions.

### Sync via SimpleFIN

If you set up SimpleFIN as described above, transactions will be added automatically to their respective accounts when you run a sync.

### Import via CSV

If you have many transactions to add, use a CSV file to import them in bulk.

See [Import via CSV](features/importing-data#import-via-csv) for details.

### Manually create transactions

Create transactions manually by navigating to the Transactions page and clicking the `+` button in the top-right corner.

Fill out the required fields and click `Submit` to create the transaction.

:::tip
Useful for one-off transactions, such as a single cash purchase.
:::

## Categorize transactions

Now that your accounts have transactions, you'll need to categorize them.

### Category hierarchy

Categories in Budget Board are structured with parent categories representing broad areas of spending (for example: Shopping, Entertainment, Food & Dining).

Each parent category can have child categories to break spending into more specific areas. For example, the Food & Dining parent category includes child categories such as Alcohol & Bars, Coffee Shops, Food Delivery, Groceries, and Restaurants.

### Custom categories

Budget Board provides a default set of transaction categories to get you started.

If you need additional categories, create custom categories on the Transactions page by clicking the gear button in the top-right corner to open `Transactions Settings`.

A custom category can be a parent or a child; if it's a child category, specify its parent.

### Assigning categories

With the necessary categories in place, assign categories to your transactions.

#### Manually assigning categories

Manually categorize a transaction by navigating to the Transactions page, opening the transaction, and selecting a category from the drop-down menu.

#### Automatic rules

To automatically categorize transactions, create rules that apply a category when a transaction matches specified conditions.

Open `Transactions Settings` (gear icon on the Transactions page) and add rules under the Automatic Rules section. Rules are applied during sync.

:::tip
Automatic rules are helpful for recurring transactions that always use the same category, for example, monthly utilities or rent.
:::

## Create budgets

Once you have some account and transaction data populated, you can start setting income and expense targets.

See the [Budgets](../features/budgets.mdx) page for more details.

## Set goals

TODO
