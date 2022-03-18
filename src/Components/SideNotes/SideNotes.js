import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './SideNotes.css'
import Note from './Note/Note'

const SideNotes = () => {

    const {notes} = useSelector(state => state.notesReducer)
    console.log(notes)
    const [noteListe, setNoteListe] = useState(notes)

    useEffect(() => {
        setNoteListe(notes)
    }, [notes])

    const handleSubmit = e => e.preventDefault()
    
    if(noteListe === null ) {
        return <p>Chargement ...</p>
    }
    const handleFilter = (e) => {
        const stateCopy = [...notes]
        const filteredArr = stateCopy.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setNoteListe(filteredArr)
    }

    return (
        <div className='notes-display'>
            <h2>Mes Notes</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleFilter}
                    type="text" 
                    id='search-notes'
                    placeholder='Rechercher'
                />
            </form>
            <ul className="notes-list">
                {noteListe.map(item => 
                    <Note 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        body={item.body}
                    />
                
                )}
            </ul>
        </div>
    );
};

export default SideNotes;