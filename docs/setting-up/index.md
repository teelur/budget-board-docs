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
