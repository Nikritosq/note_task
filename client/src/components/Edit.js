import React from 'react';
import { Fragment, useState } from 'react';
import './edit.scss';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import EditIcon from '@material-ui/icons/Edit';

const EditNote = ({note}) => {

    const [description, setDescription] = useState(note.description);
    const [hashtag, setHashtag] = useState(note.hashtag);

    /* Getting specific modal up  */

    /* had describe the behavior by two functions in case I use two different components: button on Feed.notes.map ... and separete Edit modal pop-up */

    function visibleModal() {
        if (document.querySelector(`#id${note.n_id}`).classList.contains('forward') === false){
            document.querySelector(`#id${note.n_id}`).classList.add('forward');
        }
    };

    function invisModal() {
        if (document.querySelector(`#id${note.n_id}`).classList.contains('forward')){
            document.querySelector(`#id${note.n_id}`).classList.remove('forward');
        }
    };

    /* PUT{id} */

    const handleUpdate = async id => {
        try {
            const body = {description, hashtag};
            const response = await fetch(`http://localhost:5000/notes/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (error) {
            console.error(error.message);
        };
    };

    /* Also clearing hashtag input, but haven't added 'same' UI to other components like thrash can */

    function clearHashtag() {
        setHashtag('');
        if (document.querySelector(`#edit${note.n_id}`).classList.contains('cross_active')){
            document.querySelector(`#edit${note.n_id}`).classList.remove('cross_active');
            document.querySelector(`#hash_i${note.n_id}`).classList.remove('hash_active');
        }
        else {
            document.querySelector(`#edit${note.n_id}`).classList.add('cross_active');
            document.querySelector(`#hash_i${note.n_id}`).classList.add('hash_active');
        }
    };

    return (
        <Fragment>
            <button 
                type='button'
                onClick={() => {setDescription(note.description); setHashtag(note.hashtag); visibleModal()}}
                >
                <EditIcon fontSize='large'/>
            </button>

            <div className="darkness" id={`id${note.n_id}`}>
                <div className='edit_field'>
                    <div className='ms_top'>
                        <form>
                            <div className='main_input'>
                                <input className='ms_input' onChange = {(e) => setDescription(e.target.value)} placeholder={`What's Next`} value = {description}/>
                            </div>
                            <div className='hash_input'>
                                <input className='hash_default hash_active' id={`hash_i${note.n_id}`} onChange = {(e) => setHashtag(e.target.value)} placeholder={`specify`} value = {hashtag}/>
                                <button className='cross cross_active' id={`edit${note.n_id}`} type="button" onClick = {clearHashtag}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z" fill="#f50057"/>
                                    </svg>
                                </button>
                            </div>
                            <button className='ms_hidden' type='submit' onClick={() => {handleUpdate(note.n_id); invisModal()}}></button>
                        </form>
                    </div>
                    <hr/>
                    <div className='ms_bot'>
                        <DeleteIcon fontSize='large'/>
                        <ImageIcon fontSize='large'/>
                        <button type='submit'><SendIcon fontSize='large' onClick={() => {handleUpdate(note.n_id); invisModal()}}/></button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EditNote