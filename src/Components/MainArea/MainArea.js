import { useState, useEffect, useRef } from 'react';
import './MainArea.css'
import { useDispatch, useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid'

function MainArea() {

    const [inpInfo, setInpInfo] = useState({
        title:"",
        subtitle: "",
        body:""
    })
    const [inpModify, setInpModify] = useState({
        title:"",
        subtitle: "",
        body:""
    })
    const selected = useSelector(state => state.selectedReducer.selectedNote)
    
    useEffect(()=> {
        setInpModify(selected)
    }, [selected])

    const [validation, setValidation] = useState(true)

    const allInput = useRef([])

    const addInput = el => {
        if(el && !allInput.current.includes(el)){
            allInput.current.push(el)
        }
    }

    const updateInputs = (e) => {
        const actualInput = e.target.getAttribute('id')

        if(selected.toggle){
            const newObjState = {...inpModify, [actualInput]: e.target.value }
            setInpModify(newObjState)
        } else if(selected.toggle === false){
            const newObjState = {...inpInfo, [actualInput]: e.target.value }
            setInpInfo(newObjState)
        }

    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inpInfo.title.length < 1){
            setValidation(false)
            return
        }
        setValidation(true)
        dispatch({
            type:"ADDNOTE",
            payload: {
                ...inpInfo,
                id: uuidv4()
            }
        })
        setInpInfo({
            title:"",
            subtitle: "",
            body:""
        })
    }

    return (
        <div className='container-content'>
            <h2>Votre plume</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Le Titre</label>
                <input 
                    onChange={updateInputs}
                    value={inpModify.toggle ? inpModify.title : inpInfo.title}
                    ref={addInput}
                    type="text"
                    id="title"
                />
                {!validation && (
                    <span style={{color:"red"}} className="info-validation">
                        Veuillez renseigner un titre
                    </span>
                )}
                <label htmlFor="subtitle">Sous-titre</label>
                <input 
                    onChange={updateInputs}
                    value={inpModify.toggle ? inpModify.subtitle : inpInfo.subtitle}
                    ref={addInput}
                    type="text"
                    id="subtitle"
                />
                
                <label htmlFor="body">Votre Texte</label>
                <textarea 
                    onChange={updateInputs}
                    value={inpModify.toggle ? inpModify.body : inpInfo.body}
                    ref={addInput}
                    placeholder='Votre texte ...'
                    id="body" 
                >
                </textarea>
                
                <button>enregistrer</button>
            </form>
        </div>
    )
}

export default MainArea
