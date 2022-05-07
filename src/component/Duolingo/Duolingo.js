import React, { useState } from 'react'
import './Duolingo.css'

const Duolingo = () => {

    const [board, setBoard] = useState([
        {id: 1, title: 'Сделать', items: [{id: 1, title: 'Пойти в магазин'}, {id: 2, title: 'Помыть посуду'}, {id: 3, title: 'Пропылесосить пол'}]}, 
        {id: 2, title: 'Проверить', items: [{id: 4, title: 'Выгулить собаку'}, {id: 5, title: 'Вымыть окна'}, {id: 6, title: 'Протереть пыль'}]}
    ])

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)


    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }
    
    function dragStartHandler(e, board, item) {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none' 
    }

    function dropHandler(e, board, item) {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoard(board.map(b => {
            if(b.id === board.id) {
                return board
            }
            if(b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    function dragOverHandler(e) {
        e.preventDefault()
        if(e.target.className === 'item') {
            e.target.style.boxShadow = '0 4px 3px gray'
        }
    }

  return (
    <div className='drag_wrapper'>
        {board.map(board => 
            <div className='drag_board'>
                <div className='drag_title'>{board.title}</div>
                {board.items.map(item => 
                    <div
                        onDragOver={(e) => dragOverHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragStart={(e) => dragStartHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDrop={(e) => dropHandler(e, board,item)}
                        draggable={true}
                        className='drag_item item'
                     >
                        {item.title}
                    </div>)}
            </div>)}
    </div>
  )
}

export default Duolingo