import './Note.css'
import React from 'react';
import delIcon from './remove.svg'
import edit from './edit.svg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const Note = ({id, title, subtitle, body}) => {

    const dispatch = useDispatch()

    const deleteNote = () => {
        dispatch({
            type:"DELETENOTE",
            payload : id
        })
    }

    const modifyNote = () => {
        dispatch({
            type:'VIEWNOTE',
            payload:{
                title: title,
                subtitle: subtitle,
                body: body,
                id: id,
            }
        })
    }

    return (
        <li className='txt-note-prev'>
            <div className="bloc-note-left">
                <p>{title}</p>
                <p>{subtitle}</p>
            </div>
            <div className="bloc-note-right">
                <button onClick={deleteNote} >
                    <img src={delIcon} alt="delete-icon" />
                </button>
                <Link to="/edit">
                    <button onClick={modifyNote} >
                        <img src={edit} alt="edit-icon" />
                    </button>
                </Link>
            </div>
        </li>
    );
};

export default Note;