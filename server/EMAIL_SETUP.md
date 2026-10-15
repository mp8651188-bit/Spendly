Email/password signup and login require a working verification email service.
Google sign-in verifies users separately and does not use this mail service.

Add these values to server/.env and restart the backend:

```dotenv
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=your_sender@gmail.com
EMAIL_PASS=your_google_app_password
EMAIL_FROM=your_sender@gmail.com
BCRYPT_SALT=10
ALLOWED_ADMIN_EMAILS=approved_admin@example.com
```

Enable Google 2-Step Verification and generate a Google app password for Spendly.
Use that app password, not your normal Gmail password. EMAIL_FROM should match
EMAIL_USER. All active email flows use Gmail SMTP through services/mailService.js
and config/emailConfig.js. Brevo is not required. Keep the app password private.

After email is configured, an existing unverified user can log in again to
receive a fresh verification link. Follow that link before logging in.

ALLOWED_ADMIN_EMAILS is a comma-separated list of emails automatically approved
for NEW admin requests. Other requests are saved as pending. Changing this
list does not approve requests already saved in the database. Those requests
require administrator review and provisioning of a unique security key;
submitting the form again does not approve them.
