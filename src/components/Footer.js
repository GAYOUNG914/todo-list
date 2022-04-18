import React, {useLayoutEffect, useState} from 'react';
import '../App.scss';



function Footer(props){
    // console.log(data);
    const [text, setText] = useState('');//변수 text의 초기값은 빈 값. 변수 text의 상태 값을 바꾸려면 setText('이 값이 되고싶어요')를 쓰면 된다.
    const {data} = props; //버튼 클릭하면 input의 속성을 받아와야함
    
    const onchangeInput = e =>{//value의 상태가 변화하면 인자 event를 받아온다
        setText(e.target.value);//text의 상태 값음 e.target.value로 바꾸고 싶음
        // console.log(e.target.value);
    }

    // const loopFunction = ()=>{
    //     while(true) {
    //         let i= 0;
    //         return i++
    //     }
    // }

    const buttonClicked = (e)=>{
        data({//data 함수에 객체로 된 인자 넣어주기
            id:+new Date(),
            // id:loopFunction,
            title: text, // 인풋의 속성
        })
        setText(''); //submit 버튼 클릭 후 인풋 창 비워줌

    }
    // console.log(React.useRef())
    const inputRef = React.useRef(null);
    useLayoutEffect(()=>{
        // console.log(inputRef.current);//input tag 의 변화를 감지하면 dom의 인풋태그 자체를 가짐
        if(inputRef.current !== null) inputRef.current.focus();
    })

    const handleKeyPress = (e) =>{
        if(e.key ==="Enter" && text !== ''){
            buttonClicked();
        }
    }

    return(
        <div className="footer">
            <div className="textArea">
                <input 
                type="text"
                name="todoItem"
                value={text} // 인풋의 속성. 상태가 변화해야하는 속성임. state 사용.
                placeholder="여기에 할 일 입력"
                onChange={onchangeInput}//value의 상태 변화를 감지할 수 있는 속성onchange
                onKeyPress={handleKeyPress}//엔터누르면 button onclick 이벤트 실행한것과 같게 행동
                ref = {inputRef}
                ></input>
            </div>
            <div className="buttonArea">
                <button type="submit" onClick={buttonClicked} disabled={!text} ></button>
            </div>
        </div>
    )
};
//빈값에 엔터쳤을 떄 실행 안되게 하고싶음...

export default Footer;