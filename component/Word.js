import { useState } from "react";
// useState는 변경되는 데이터를 관리하는데 사용됨. useState()는 배열을 반환

export default function Word({word}) {
    const [isShow, setIsShow] = useState(false);
//  const [ 현재 상태 , 상태 업데이트 함수 ] = useState( 초깃값 );
    const [isDone, setIsDone] = useState(word.isDone);

    // function toggleShow() {
    //     setIsShow(!isShow);
    // }
    // function toggleDone() {
    //     setIsDone(!isDone);
    // }


    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type='checkbox' checked={isDone} onChange={() => {setIsDone(!isDone)}} />
            </td>
            <td>{word.eng /* {}는 필수 */}</td>
            <td>{isShow && word.kor /*-- && 논리연산자는 ( false && a ) 형태일 때는 false를 반환하고, ( true && a ) 일 때는 변수 a를 반환한다. --*/}</td>
            <td>
                <button onClick={() => {setIsShow(!isShow)}}>뜻 {isShow ? "숨기기" : "보기"}</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
}
