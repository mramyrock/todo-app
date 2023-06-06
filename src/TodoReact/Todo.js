import React, { useEffect, useState } from 'react'
import Photo from '../TodoReact/Images.js/main.png'

import './style.css'


//get the localStorage data back
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}
const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItemes] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, settoggleButton] = useState(false);


    // add the items function
    const addItem = (e) => {
        if (!inputdata) {
            alert('plz fil the data');
        } else if (inputdata && toggleButton){
            setItemes(
                items.map((curElem)=>{
                    if (curElem.id === isEditItem){
                    return { ...curElem , name:inputdata}
                }
                    return curElem;
                })
            );

            setInputData([]);
            setIsEditItem(null);
            settoggleButton(false);

        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItemes([...items, myNewInputData])
            setInputData("")
        }
    }

    // edit the items
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        })
        setInputData(item_todo_edited.name)
        setIsEditItem(index);
        settoggleButton(true)
    }


    // how to delete  items section 
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;

        });
        setItemes(updatedItems);
    }
    //remove all the elments
    const removeAll = () => {
        setItemes([]);
    }

    //adding  localStorage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items))
    },[items])





    return (
        <>
            <div className='main-div'>
                <div className='chid-div'>
                    <figure>
                        <img src={Photo} style={{ width: "100px", height: "100px"}} alt="imgError" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>

                    <div className='addItems'>
                        <input
                            type="text"
                            placeholder='✍ Add Item'
                            className='form-control'
                            // name='fname'
                            value={inputdata}
                            onChange={(event) => { setInputData(event.target.value) }}
                        />

                        {/* tenarry */}

                        {toggleButton ? (
                             
                        <i className="fa fa-edit add-btn" aria-hidden="true" onClick={addItem} ></i>
                        ) :(
                        <i className="fa fa-plus add-btn" aria-hidden="true" onClick={addItem} ></i>
                        )}
                    </div>

                    {/* shwo our items */}
                    <div className='showItems'>

                        {
                            items.map((curElem) => {
                                return (

                                    <div className='eachItm' key={(curElem.id)}>
                                        <h3>{curElem.name}</h3>

                                        <div className='todo-btn'>
                                            <i className="far fa-edit add-btn" aria-hidden="true"
                                                onClick={() => editItem(curElem.id)} ></i>
                                            <i className="far fa-trash-alt add-btn" aria-hidden="true"
                                                onClick={() => deleteItem(curElem.id)}> </i>
                                        </div>
                                    </div>
                                );
                            }
                            )
                        }



                    </div>

                    {/* Remove All Button */}
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo;
