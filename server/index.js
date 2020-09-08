const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')

//recruiter said i can use postgres

//middleware
app.use(cors());
app.use(express.json()) // allows us to access the req.body

//routs

//get all notes

app.get('/notes', async (req, res) => {
    try {
        const allNotes = await pool.query("SELECT * FROM note ORDER BY n_id DESC"); //sort by 'latest' (descending order of id)

        res.json(allNotes.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//get a note {id}

app.get(`/notes/:id`, async (req, res) => {
    try {
        const {id} = req.params
        const note = await pool.query("SELECT * FROM note WHERE n_id = $1", [id]);

        res.json(note.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//post note
app.post('/notes', async (req, res) => {
    try {
        const {description, hashtag} = req.body;
        const newNote = await pool.query("INSERT INTO note (description, hashtag) VALUES ($1, $2) RETURNING *", [description, hashtag]);

        res.json(newNote.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//delete the note {id}

app.delete(`/notes/:id`, async (req, res) => {
    try {
        const {id} = req.params;
        const deleteNote = await pool.query("DELETE FROM note WHERE n_id = $1", [id]);

        res.json('Note was deleted');
    } catch (error) {
        console.error(error.message);
    }
})

//put note {id}

app.put('/notes/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {description, hashtag} = req.body;
        const putNote = await pool.query('UPDATE note SET description = $1, hashtag = $2 WHERE n_id = $3', [description, hashtag, id]);

        res.json(putNote.rows);
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
    console.log('Server is starting on port 5000');
});