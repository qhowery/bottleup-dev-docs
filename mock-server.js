const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/admin/cities', (req, res) => res.json({ message: 'City created', payload: req.body }));
app.post('/booking/create', (req, res) => res.json({ bookingId: 'booking_abc123', status: 'pending' }));
app.get('/checkin/status/:id', (req, res) => res.json({ status: 'confirmed' }));

app.listen(PORT, () => console.log(`Mock API running at http://localhost:${PORT}`));
