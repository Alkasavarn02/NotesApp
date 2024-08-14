/* eslint-disable react/prop-types */
import styles from './note.module.css';
import DisableButton from '../../assets/send.png';
import ActiveButton from '../../assets/activeSend.png';
import { useState } from 'react';
import { formatDate, formatTime } from '../../utils/helper';

const AddNotes = ({ id, setAllNotes }) => {
    const [note, setNote] = useState('');

    const onAddNote = () => {
        const currentNotes = JSON.parse(localStorage.getItem(`note-${id}`));

        const newNote = {
            id: currentNotes && currentNotes?.length > 0 ? currentNotes?.length + 1 : 1,
            note,
            date: formatDate(new Date()),
            time: formatTime(new Date()),
        };

        const payload = currentNotes && currentNotes?.length > 0 ? [...currentNotes, newNote] : [ newNote ];

        localStorage.setItem(`note-${id}`, JSON.stringify(payload));

        setNote("");
        setAllNotes(payload)
    };

    return (
        <section className={styles?.['add-note']}>
            <div className={styles?.['text-area']}>
                <textarea
                    placeholder='Enter your text here...........'
                    value={note}
                    onChange={(event) => {
                        setNote(event?.target?.value)
                    }}
                ></textarea>
                <div className='text-end'>
                    <button
                        style={{ cursor: note?.trim() ? 'pointer' : 'not-allowed' }}
                        disabled={ !note?.trim() }
                        onClick={() => {
                            onAddNote();
                        }}
                    >
                        <img src={ note?.trim() ? ActiveButton : DisableButton} alt='Add Arrow' />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AddNotes;