import React from 'react';
import '../App.scss';

function ItemRow (props){
    const {list, removeList} = props;
    const {id} = list; //props로 받아온 list(객체)의 id값만 받아오기

    return(
        <div className="itemRow">
            <span className="textArea" >{props.textarea}
            </span>
            <button type="button" onClick={() => removeList(id)}>
            </button>
        </div>
    )
}

export default ItemRow;