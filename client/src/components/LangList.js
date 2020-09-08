import React from 'react';
import './langlist.scss';
import CloseIcon from '@material-ui/icons/Close';
import EN from './svg_variable';
import {PL, RU, HE} from './svg_variable';
import { useTranslation } from 'react-i18next';

function LangList() {
    const { t, i18n } = useTranslation(); /* Calling the translate hook */

    /* UI of language list */

    function enableList() {
        if ((document.querySelector('.mpt_btn').classList.contains('mpt_btn_activ')) === false){
            document.querySelector('.lang_list').classList.add('lang_active');
            document.querySelector('.mpt_btn').classList.add('mpt_btn_activ');
        }
    };

    function closeList() {
        if (document.querySelector('.mpt_btn').classList.contains('mpt_btn_activ')){
            document.querySelector('.lang_list').classList.remove('lang_active');
            document.querySelector('.mpt_btn').classList.remove('mpt_btn_activ');
        }
    };

    /* Picking the lang, the parametr(lang) should contain string with same name of 'dictionary'(localization file) */

    function pickLang(lang) {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='lang_list'>
            <button className="mpt_btn" onClick={enableList}></button>
            <div className='selected_v'>{t('lnag_ico.1')}</div>
            <button id='ru' onClick={() => { pickLang('ru')}}>
                {/* ID used for end to end test; anonimus function causes no bugs || At start used closeList also for closing after picking lang, but for UI test it's would be too long*/}
                <RU/> {/* Created jsx file-library for svg files - used this because I couldn't find and generate font for this situation, but when found the way I missed this poin */}
            </button>
            <button id='pl' onClick={() => { pickLang('pl')}}>
                <PL/>
            </button>
            <button id='he' onClick={() => { pickLang('he')}}>
                <HE/>
            </button>
            <button id='en' onClick={() => { pickLang('en')}}>
                <EN/>
            </button>
            <button className='close_btn' onClick={closeList}><CloseIcon/></button>
        </div>
    )
}

export default LangList