import styles from './note.module.css';
import { useParams } from 'react-router-dom';

import AddNotes from "./addNote";
import NoteHeader from "./header";
import NoteContent from "./noteContent";
import LeftSidebar from '../../components/LeftSide/LeftSidebar';
import { useEffect, useState } from 'react';

const NoteScreen = () => {
    const param = useParams();

    const [allNotes, setAllNotes] = useState([]);
    
    useEffect(() => {
        if (param?.id) {
            const currentNotes = JSON.parse(localStorage.getItem(`note-${param?.id}`));
    
            if (currentNotes && currentNotes?.length > 0) {
                setAllNotes(currentNotes);
            }
        }

        return () => {
            setAllNotes([]);
        }
    }, [param?.id])
    
    return (
        <div className={`d-flex`}>
            <div className={styles?.['left-sidebar']}>
                <LeftSidebar id={parseInt(param?.id)} />
            </div>

            <div className={styles?.['notes-section']}>
                <NoteHeader id={param?.id} />
                <NoteContent id={param?.id} allNotes={allNotes} />
                <AddNotes id={param?.id} setAllNotes={setAllNotes} />
            </div>
        </div>
    );
};

export default NoteScreen;