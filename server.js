const express = require('express');

const app = express();
app.use(express.json());

const events = [];
let eventId = 1;

app.get('/', (req, res) => {
    res.send('Welcome to the Event Management API');
});

app.post('/api/events', (req, res) => {
    const {eventName, date, location, description} = req.body;
    if (!eventName || !date || !location) {
        return res.status(400).json({error: 'Missing required fields'});
    }
    const newEvent = {
        id: eventId++,
        eventName: eventName,
        date: date,
        location: location,
        description: description || ''
    }

    events.push(newEvent);
    res.status(201).json(newEvent);
});

app.get('/api/events', (req, res) => {
    res.json(events);
});

app.get('/api/events/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const event = events.find(e => e.id === id);
    if (!event) {
        return res.status(404).json({error: 'Event not found'});
    }   
    res.json(event);
});

app.put('/api/events/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const event = events.find(e => e.id === id);
    if (!event) {
        return res.status(404).json({error: 'Event not found'});
    }
    const {date, location, description} = req.body;
    if (date) event.date = date;
    if (location) event.location = location;
    if (description) event.description = description;
    res.json(event);
});

app.delete('/api/events/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const eventIndex = events.findIndex(e => e.id === id);
    if (eventIndex === -1) {
        return res.status(404).json({error: 'Event not found'});
    }
    events.splice(eventIndex, 1);
    res.status(200).send({message: 'Event deleted successfully'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});


    