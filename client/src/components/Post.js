import React from 'react';
import './post.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Post({description, hashtag, key}) {

    async function deletNote(id) {
        try {
            const res = await fetch(`http://localhost:5000/notes/${id}`, {
                method: "DELETE"
            });

            console.log(res);
        } catch (error) {
            console.error(error.message);
        };
    };

    return (
        <div className='post'>
            <div className='post_top'>
                <div className="hashtag_on">{hashtag}</div>
            </div>
            <div className='post_bot'>
                <div className='post_mes'>
                    <p>{description}</p>
                </div>
                <div className='options'>
                    <div className='mpt'></div>
                    <button type='submit'><EditIcon fontSize='large'/></button>
                    <button type='submit' onClick={() => deletNote(key)}><DeleteIcon fontSize='large'/></button>
                </div>
            </div>
        </div>
    )
}

export default Post