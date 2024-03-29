import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {

  const [inputList, setInputList] = useState('')
  const [items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList('')
  }

  const deleteItems = (id) => {
    console.log('Deleted')

    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        console.log(arrElement)
        return index !== id
      })
    })
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          {/* <br /> */}
          <input onChange={itemEvent} type='text' value={inputList} placeholder='Add a items' />
          <button onClick={listOfItems}>+</button>

          <ol>

            {items.map((itemVal, index) => {
              return <TodoList
                key={index}
                id={index}
                text={itemVal}
                onSelect={(deleteItems)}
              />
            })}

          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
