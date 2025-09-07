---
sidebar_position: 2
---

# Configuration

The `compose.yml` file contains all of the configuration that is required for every deployment of Budget Board. For any custom configuration specific to your instance, you can use the `compose.override.yml` file.

## Server

The following settings apply to the server component of Budget Board.

| Option                | Details                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| POSTGRES_HOST         | The host for the PostgreSQL database. You shouldn't need to edit this unless you are hosting your own PostgreSQL database.                                                                 |
| POSTGRES_PORT         | The port for the PostgreSQL database. If not included in the override file, will default to `5432`.                                                                                        |
| POSTGRES_DATABASE     | The PostgreSQL database name. This should match the variable `POSTGRES_DB` under the budget-board-db container.                                                                            |
| POSTGRES_USER         | The PostgreSQL database user that budget board will use to connect to and interact with the database. This should match the variable of the same name under the budget-board-db container. |
| POSTGRES_PASSWORD     | The user password. This should match the variable of the same name under the budget-board-db container.                                                                                    |
| AUTO_UPDATE_DB        | Setting this to true will automatically update the database when the schema changes. Otherwise, you will need to update it manually.                                                       |
| EMAIL_SENDER          | The email address that will send emails for verification, password resets, etc. See Additional Details for more information about setting this up.                                         |
| EMAIL_SENDER_PASSWORD | The password of the email that will send emails for verification, password resets, etc.                                                                                                    |
| EMAIL_SMTP_HOST       | The host server that will send the email.                                                                                                                                                  |
| DISABLE_AUTO_SYNC     | Set true if you would like to disable the SimpleFIN auto-sync feature.                                                                                                                     |

## Database

The following settings are required by the PostgreSQL container used by Budget Board.

| Option            | Details                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POSTGRES_USER     | The PostgreSQL database user that will be used to connect to and interact with the database. This should match the variable of the same name under the budget-board-server container. |
| POSTGRES_PASSWORD | The user password. This should match the variable of the same name under the budget-board-server container.                                                                           |
| POSTGRES_DATABASE | The PostgreSQL database name. This should match `POSTGRES_DB` in the budget-board-server container.                                                                                   |
