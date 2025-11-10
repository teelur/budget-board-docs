---
sidebar_position: 2
---

# Configuration

The `compose.yml` file contains the configuration required for every deployment of Budget Board. For custom configuration specific to your instance, use `compose.override.yml`.

## Server

The following settings apply to the server component of Budget Board.

| Option                | Details                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POSTGRES_HOST         | The host for the PostgreSQL database. You usually don't need to edit this unless you're hosting your own PostgreSQL database.                                              |
| POSTGRES_PORT         | The port for the PostgreSQL database. If not included in the override file, defaults to `5432`.                                                                            |
| POSTGRES_DATABASE     | The PostgreSQL database name. This should match the variable `POSTGRES_DB` under the `budget-board-db` container.                                                          |
| POSTGRES_USER         | The PostgreSQL database user that Budget Board will use to connect to the database. This should match the variable of the same name under the `budget-board-db` container. |
| POSTGRES_PASSWORD     | The database user's password. This should match the variable of the same name under the `budget-board-db` container.                                                       |
| AUTO_UPDATE_DB        | When `true`, the database will be automatically migrated when the schema changes. Otherwise, you'll need to update it manually.                                            |
| EMAIL_SENDER          | The email address used to send verification and password-reset emails. See Additional Details for more information about configuring this.                                 |
| EMAIL_SENDER_USERNAME | The username for the SMTP server used to send verification and password-reset emails. If not specified, this defaults to the EMAIL_SENDER value.                           |
| EMAIL_SENDER_PASSWORD | The password for the SMTP server used to send verification and password-reset emails.                                                                                      |
| EMAIL_SMTP_HOST       | The SMTP host used to send email.                                                                                                                                          |
| EMAIL_SMTP_PORT       | The port for the SMTP server.                                                                                                                                              |
| DISABLE_AUTO_SYNC     | Set to `true` to disable the SimpleFIN auto-sync feature.                                                                                                                  |
| DISABLE_AUTO_SYNC     | Set this to disable automatic syncs.                                                                                                                                       |
| SYNC_INTERVAL_HOURS   | The number of hours between automatic syncs. If not specified, this defaults to 8 hours.                                                                                   |

### Configuring the email sender

The compose override file contains settings to configure an email sender for password resets and account verification. This is optional but highly recommended.

You will need an SMTP server to send email. You can use a self-hosted service, a paid cloud service, or a provider such as Gmail for small deployments.

If you plan to use Gmail, consult Google's documentation for enabling SMTP access and generating app-specific credentials where required.

:::warning
If you don't configure an SMTP server, users have no convenient way to recover a lost password. You would need to edit the database directly to set a new hashed password.
:::

## Database

The following settings are required by the PostgreSQL container used by Budget Board.

| Option            | Details                                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POSTGRES_USER     | The PostgreSQL database user used to connect to the database. This should match the variable of the same name under the `budget-board-server` container. |
| POSTGRES_PASSWORD | The database user's password. This should match the variable of the same name under the `budget-board-server` container.                                 |
| POSTGRES_DATABASE | The PostgreSQL database name. This should match `POSTGRES_DB` in the `budget-board-server` container.                                                    |
