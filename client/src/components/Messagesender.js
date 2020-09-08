import React from 'react';
import { useState } from 'react';
import './messagesender.scss';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import { useTranslation } from 'react-i18next';

function MessageSender() {
    const { t } = useTranslation();

    const [description, setDescription] = useState('');
    const [hashtag, setHashtag] = useState('default');

    /* POST */

    const handleSubmit = async e => {
        e.preventDefault();
        /* Some sort of validation */
        if (description === '') {
            document.querySelector('.ms_input').placeholder=`${t('lnag_ico.5')}`; /* input placeholder get's 'There should be a text!': changingon language */
        }
        else {
            try {
                const body = {description, hashtag};
                const response = await fetch('http://localhost:5000/notes', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body) /* body is an array of objects; we convert it into json file; stringify - for less file weight (putting all data in a row/ not pretty) */
                });
                /* console.log(response);  Just returning to console data what was sended, but commended since i refresh the page */
                window.location.reload(true);
            } catch (error) {
                console.error(error.message);
            };
            
            document.querySelector('.ms_input').placeholder=`${t('lnag_ico.3')}`; /* Set input placeholder to default value 'What's next' */
            setDescription('');
            setHashtag('');
        }
    };

    /* Delete button on Message sender - just clear input */

    const handleInputClear = c => {
        c.preventDefault();

        setDescription('');
    }

    /* UI for Hashtag input: if no needed to specify the value will be sent to hashtag column 'default'; on opening this field there is empty input... */

    function preventCross() {
        if (document.querySelector('.cross').classList.contains('cross_active')){
            document.querySelector('.cross').classList.remove('cross_active');
            document.querySelector('.hash_default').classList.remove('hash_active');
            setHashtag('default');
        }
        else {
            document.querySelector('.cross').classList.add('cross_active');
            document.querySelector('.hash_default').classList.add('hash_active');
            setHashtag('');
        }
    }

    return (
        <div className='messagesender'>
            <div className='ms_top'>
                <form onSubmit={handleSubmit}>
                    <div className='main_input'>
                        <input 
                            value = {description}
                            onChange = {(e) => setDescription(e.target.value)}
                            className='ms_input'
                            placeholder={t('lnag_ico.3')}
                        />
                    </div>
                    <div className='hash_input'>
                        <input value = {hashtag} onChange = {(e) => setHashtag(e.target.value)} className='hash_default' placeholder={t('lnag_ico.4')}/>
                        <button className='cross' onClick={preventCross} type="button">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z" fill="#f50057"/>
                            </svg>
                        </button>
                    </div>
                    <button className='ms_hidden' onClick={handleSubmit} type='submit'></button>
                </form>
            </div>
            <hr/>
            <div className='ms_bot'>
                <DeleteIcon fontSize='large' onClick={handleInputClear}/>
                <ImageIcon fontSize='large'/>
                <button onClick={handleSubmit} type='submit'><SendIcon fontSize='large'/></button>
            </div>
        </div>
    )
}

export default MessageSender