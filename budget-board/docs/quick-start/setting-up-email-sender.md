# Configuring the Email Sender

There are settings in the compose overrides file to set up an email sender so that users can reset their passwords. This is technically optional, but _highly_ recommended.

You will need an SMTP server to send the emails. You can configure this in any way you'd like (self-hosted service, paid cloud service, etc.), but an easy way to do this for a small set of users is to create a Gmail account.

If you do want to use a Gmail account, there are many articles online about how to configure a Google account to get Gmail SMTP access.

:::warning
If you choose not to configure an SMTP server, then users will have no convenient way to recover a lost password. You will have to edit the database manually and update it with a new hashed password.
