import React from 'react';
import './header.scss';
import SearchIcon from '@material-ui/icons/Search';
import LangList from './LangList';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation(); /* variable of translate hook, actualy you can asign any, but I used from documentation */

    /*const [notes, setNotes] = useState([]);
    const [search] = useState([]);

    function sortingNotes() {
        const matchedNotes = notes.filter((note) => {
            return (
                note.hashtag.toLowerCase().includes(search)
            );
        });
        setNotes(matchedNotes);
    } -- wish to include sorting by hash - but many rerenders...*/

    return (
        <div className='header'>
            <div className='header_left'>
                <div className='logo'></div>
            </div>
            <div className='header_center'>
                <form className="FIN">
                    <button type="submit">
                        <SearchIcon color='secondary' style={{ fontSize: 30 }}/>
                    </button>
                    <input placeholder={t('lnag_ico.2')} />
                </form>
            </div>
            <div className='header_right'>
                <LangList/>
                <div className='nik'><p></p></div>{/* No usage - suggested for user name but there is no authorization... recruiter said - that won't make any bonus... */}
            </div>
        </div>
    )
}

export default Header