import { useState } from "react";
import styles from "./inputPopup.module.css";
import ReactDom from "react-dom";
import { listOfColors } from "../../constants/extra";

function PopupModal ({ showModal, onClose }) {

    const [notesInfo, setNotesInfo] = useState({
        name: "",
        iconColor: null,
    });

    const onCreateGroup = () => {

        const availableNotes = JSON.parse(localStorage.getItem("notesList"));

        const newNote = {
            id: (availableNotes && availableNotes?.length > 0) ? availableNotes?.length + 1 : 1,
            name: notesInfo?.name,
            iconColor: notesInfo?.iconColor,
        };

        const tempNotes = (availableNotes && availableNotes?.length > 0) ? [...availableNotes, newNote] : [newNote];

        localStorage.setItem("notesList", JSON.stringify(tempNotes));

        setNotesInfo({
            name: "",
            iconColor: null
        });

        onClose();
    };

    return ReactDom.createPortal(
        <div
            id='modal-container'
            className={`${styles?.['popup-modal-container']} ${showModal ? 'd-flex' : 'd-none'}`}
            onClick={(e) => {
                if (e?.target?.id === 'modal-container') {
                    onClose();
                }
            }}
        >

            <div className={`${styles?.['popup-modal']}`}>
                
                <div className={styles.heading}>Create New group</div>

                <div className={`${styles?.['input-box']} d-flex`}>
                    <label htmlFor="input-modal" className={styles?.['label-heading']}>Group Name</label>
                    <input
                        type="text"
                        value={notesInfo?.name}
                        placeholder="Enter group name" id="input-modal"
                        onChange={(e) => {
                            setNotesInfo((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }}
                    />
                </div>

                <div className={`${styles?.['color-box']} d-flex`}>
                    <p className={styles?.['label-heading']}>Choose colour</p>

                    <ul type="none" className={`d-flex`}>
                        {
                            listOfColors.map((item,index) => {
                                return (
                                    <li
                                        style={{
                                            backgroundColor: item,
                                            border: notesInfo?.iconColor === item ? "2px solid #878787" : "0px"
                                        }}
                                        key={index}
                                        className={styles?.['color-select']}
                                        onClick={() => {
                                            setNotesInfo((prev) => {
                                                return {
                                                    ...prev,
                                                    iconColor: item,
                                                };
                                            })
                                        }}
                                    ></li>
                                );
                            })
                        }
                    </ul>
                </div>

                <div className={styles?.['create-button']}>
                    <button
                        onClick={onCreateGroup}
                        disabled={!(notesInfo.name && notesInfo?.iconColor)}
                        style={{
                            cursor: notesInfo.name && notesInfo?.iconColor ? "pointer" : "not-allowed"
                        }}
                    >
                        Create
                    </button>
                </div>
            </div> 
        </div>,
        document.getElementById("popupModal")
    )
}

export default PopupModal;