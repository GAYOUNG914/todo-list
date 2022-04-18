import React from 'react';
import ItemRow from './ItemRow';
import '../App.scss';

function ItemSection(props){
    // console.log(props)//props 를 객체로 받음 ->구조 분해 할당 사용해서 데이터를 각각 사용 가능하게 해야함
    //구조 분해 할당 사용 :  좌측 구조를 분해해서 props에 할당해서 사용.
    const {list, onRemove} = props;

    // console.log(list)

    

    const todolistOnebyOne = list.map( i =>{
        // console.log(i)
        // return <ItemRow textarea={i.title} key={i.id} data={data}></ItemRow>;
        return <ItemRow list={i} textarea={i.title} key={i.id} removeList={onRemove}></ItemRow>;
    });
    



    return(
        <div className="item-section">
            {todolistOnebyOne}
        </div>
    )
}

export default ItemSection;