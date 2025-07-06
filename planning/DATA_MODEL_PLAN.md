### User
- id, email, firstName, lastName, phoneNumber, dateOfBirth, streamChatToken

### Booking
- id, user_id, vendor_id, status
- payment_method (in_app | in_person)
- tax, total, refund_status

### Vendor
- id, name, stripe_account_id
- payout_status, tax_settings

### Admin
- id, email, invited, role, venues[]

### Venue
- id, name, city, admin_id(s), timezone

### Payment
- id, booking_id, payment_intent_id
- fee_breakdown, net_amount
