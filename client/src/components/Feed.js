import React from 'react';
import './feed.scss';
import MessageSender from './Messagesender';
import EditNote from './Edit'
import {useState, useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './post.scss';

function Feed() {
    const [notes, setNotes] = useState([]);

    /* Kinda messed up with my own API so i can't properly import data to 'Context API' for adding note after handleSubmit */

    /* DLETE{id} */

    async function deletNote(id) {
        try {
            const res = await fetch(`http://localhost:5000/notes/${id}`, {
                method: "DELETE"
            });
            console.log(res);

            setNotes(notes.filter(note => note.n_id !== id ));//Crutch of broken useState for a while
        } catch (error) {
            console.error(error.message);
        };
    };
    
    /* GET */

    async function getNotes(){
        const res = await fetch('http://localhost:5000/notes');

        const noteArray = await res.json();

        setNotes(noteArray);
    }

    useEffect(() => {
        getNotes()
    }, []);

    return (
        <div className='feed'>
            <MessageSender/>
            {notes.map(note => (
                <div className='post' key={note.n_id}>
                    <div className='post_top'>
                        <div className="hashtag_on">{note.hashtag}</div>
                    </div>
                    <div className='post_bot'>
                        <div className='post_mes'>
                            <p>{note.description}</p>
                        </div>
                        <div className='options'>
                            <div className='mpt'></div>
                            <EditNote note={note}/>
                            <button type='submit' onClick={() => deletNote(note.n_id)}><DeleteIcon fontSize='large'/></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Feed