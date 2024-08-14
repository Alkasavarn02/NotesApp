/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from './note.module.css';
import { getInitials } from '../../utils/helper';

import LeftArrow from '../../assets/leftArrow.png'
import { useNavigate } from 'react-router-dom';


const NoteHeader = ({ id }) => {
    const navigate = useNavigate();
    const [currentNote, setCurrentNote] = useState();

    useEffect(() => {
        const availableNotes = JSON.parse(localStorage.getItem("notesList"));

        const tempCurrentNote = availableNotes?.find((note) => note?.id === parseInt(id));
        setCurrentNote(tempCurrentNote);
        
    }, [id]);
    

    return (
        <header className={`${styles?.['notes-header']} d-flex`}>
            <div
                className={styles?.['back-arrow']}
                onClick={() => {
                    navigate('/');
                }}    
            >
                <img src={LeftArrow} alt='Left Arrow' />
            </div>
            <span
                className={styles.icon}
                style={{ backgroundColor: currentNote?.iconColor }}
            >
                {
                    currentNote?.name
                    ? getInitials(currentNote?.name)
                    : null
                }
            </span>

            <span>{currentNote?.name}</span>
        </header>
    );
};

export default NoteHeader;