## Admin Routes
POST /admin/cities
POST /admin/venues
POST /admin/invite

## Stripe
POST /stripe/connect
GET /stripe/status/:vendorId
POST /stripe/payout

## Booking
POST /booking/create
PATCH /booking/:id/status
GET /booking/:id

## Check-in
POST /checkin/scan
GET /checkin/status/:bookingId
