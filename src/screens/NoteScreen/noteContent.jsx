/* eslint-disable react/prop-types */
import NoteCard from '../../components/NoteCard/card';
import styles from './note.module.css';

const NoteContent = ({ allNotes }) => {
    return (
        <section className={styles?.['note-content']}>

            {
                allNotes?.length > 0
                ? allNotes?.map((note) => {
                    return (
                        <NoteCard key={note?.id} cardData={note} />
                    );
                })
                : null
            }
        </section>
    );
};

export default NoteContent;