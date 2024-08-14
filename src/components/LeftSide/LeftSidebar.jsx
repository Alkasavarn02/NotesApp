/* eslint-disable react/prop-types */
import styles from './leftSidebar.module.css';
import PopupModal from '../InputPopup/PopupModal';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { getInitials } from '../../utils/helper';

const LeftSidebar = ({ id }) => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        if (!showModal) {
            const availableNotes = JSON.parse(localStorage.getItem("notesList"));
            if (availableNotes && availableNotes?.length > 0) {
                setNotesList(availableNotes);
            }
        }
    }, [showModal])

    return (
        <>
            <h1 className={styles.heading}>Pocket Notes</h1>

            <div className={styles?.['notes-list']}>
                {
                    notesList?.length > 0
                    ? notesList?.map((note) => {
                        
                        return (
                            <div
                                className={`${styles.note} d-flex ${(id && id === note?.id ) ? styles?.['active-note'] : ''}`}
                                key={note.id}
                                onClick={() => {
                                    navigate(`/notes/${note.id}`)
                                }}
                            >
                                <span
                                    className={styles.icon}
                                    style={{ backgroundColor: note?.iconColor }}
                                >
                                    { getInitials(note?.name) }
                                </span>
                                <span>{note?.name}</span>
                            </div>

                        );
                    })
                    : null
                }
            </div>


            <button
                className={styles.addBtn}
                onClick={() => {
                    setShowModal(true);
                }}
            >
                +
            </button>

            <PopupModal
                showModal={showModal}
                onClose={() => {
                    setShowModal(false);
                }}
            />
        </>
    );
};

export default LeftSidebar;