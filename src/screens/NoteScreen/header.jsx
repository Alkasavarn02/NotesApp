/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from './note.module.css';
import { getInitials } from '../../utils/helper';


const NoteHeader = ({ id }) => {
    
    const [currentNote, setCurrentNote] = useState();

    useEffect(() => {
        const availableNotes = JSON.parse(localStorage.getItem("notesList"));

        const tempCurrentNote = availableNotes?.find((note) => note?.id === parseInt(id));
        setCurrentNote(tempCurrentNote);
        
    }, [id]);
    

    return (
        <header className={`${styles?.['notes-header']} d-flex`}>
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