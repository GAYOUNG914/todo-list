import React,{useState} from 'react';
import ItemSection from './ItemSection';
import Footer from './Footer';
import '../App.scss';



const todolist = []

function TodoListWrap(){
    const [newList, setNewList] = useState(todolist);
    
    const data = (item)=>{
        const addData ={
            id:item.id,
            title:item.title,
        }
        // console.log(addData);
        let todolist2 = [...newList, addData];
        // console.log(todolist2);// todolist를 스프레드 연산자로 뿌려주고, addData를 추가한다

        setNewList(todolist2)
        //변수 todolist의 상태 값을 만들어둔 todolist2로 useState로 바꾸기

    };

    const removeList = (Id)=>{
        // console.log('눌렀음')
        setNewList(newList.filter(
            (listId)=>listId.Id !== Id //누른 리스트의 id와, newList 모든 리스트 중 다른 id 값을 가진 객채로만 새로운 배열을 만들어 newList 상태변화시켜주기.
            ));
            console.log(Id);
    }


    

    return(
        <div  className="todo-wrap">
            <ItemSection list={newList} onRemove={removeList}></ItemSection>
            <Footer data={data}></Footer>
        </div>
    )
}

export default TodoListWrap;