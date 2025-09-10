# Setting Up

## Create Your Login

When you first connect to Budget Board, you will need to create a login account. Select `Register Here` at the bottom of the login box to create a new login account.

:::note
If you configured an email sender in your compose file, you will need to check your email for a confirmation link before you can login.
:::

## Add Accounts

With your newly created login, the first thing you should do is setup all of your accounts you wish to track. This can be done in a few different ways.

### Sync via SimpleFIN

You can automatically sync your accounts with a service called [SimpleFIN Bridge](https://beta-bridge.simplefin.org/).

After you setup your SimpleFIN account, you can click the `New Connection` button to generate an access token.

Once you have an access token, navigate to the Settings page in Budget Board and enter the access token under the `Link SimpleFIN` section. Click `Save Changes`, and if successful, the section should be marked as `Linked`.

Click `Sync` in the top right corner to sync your accounts.

### Manually Create Accounts

Navigate to the `Accounts Configuration` screen by clicking on the gear button in the Accounts card on the Dashboard.

Click on the `Create Account` button and fill out the dialog to create the account.

Fill out each of the fields for the account:

- **Category**: The type of account. Used to group account balances during calculations.
- **Interest Rate**: The interest rate of the account. Used for goal completion predictions.
- **Hide Account**: Visually hide the account. An option if you don't want to delete the account.
- **Hide Transactions**: Hides the transactions associated with the account. Useful for accounts like savings accounts or loans where you are just interested in the balance of the account.

## Add Transactions

Now that you have your accounts created, you can add transactions to them.

### Sync via SimpleFIN

If you already setup SimpleFIN in the previous section, your transactions should automatically get added to their respective accounts on sync.

### Import via CSV

If you have many transactions that you want to add to Budget Board, you can use a CSV file to mass import.

See [Import via CSV](features/importing-data#import-via-csv) for more details.

### Manually Create Transactions

Transactions can be manually created by navigating to the Transactions page and clicking the `+` button in the top right corner.

Fill out the required fields and click `Submit` to create the transaction.

:::tip
This is useful for creating one-off transactions like a single cash transaction.
:::

## Categorize Transactions

Now that you have populated your accounts with transactions, you will need to categorize them.

### Category Heirarchy

Categories in Budget Board are structured such that there are parent categories that represent general areas of spending (i.e. Shopping, Entertainment, Food & Dining, etc.).

Each parent category may have a set of child categories that break down spending into more specific areas. For example, the Food & Dining category has child categories: Alcohol & Bars, Coffee Shops, Food Delivery, Groceries, and Restaurants.

### Custom Categories

Budget Board has a default set of transaction categories that can be used to get you started.

If there are any categories that are missing, you can create custom categories by navigating to the Transactions page and clicking on the gear button in the top right corner to open the `Transactions Settings` screen.

A custom category can be designated as a parent category or a child category. If the category is a child category, you will need to specify its parent.

### Assigning Categories

Now that you have the necesary categories, you can start assigning categories to your transactions.

#### Manually Assinging Categories

You can manually categorize transactions by navigating to the Transactions page and clicking on the transaction to edit it. Select the category drop-down to assign a category to the transaction.

#### Automatic Rules

If you would like to automatically categorize your transactions, you can create rules that will apply a category to transactions that match a given set of conditions.

Navigate to the Transactions page and select the gear icon in the top right corner to bring up the `Transactions Settings` screen. Rules can be created under the Automatic Rules section. These rules will be applied when a sync is performed.

:::tip
Automatic rules are helpful for reoccuring transactions that will always have the same category. For example, paying monthly utilities or rent.
:::

## Create Budgets

TODO

## Set Goals

TODO
