// 맨 위 헤더를 표시
// "토익영단어(고급)"를 누르면 처음으로 돌아감


import { Link } from 'react-router-dom';

// App.js에서 import 할 함수 Header를 지정.
// 함수 앞에 export default를 작성하면 코드가 짧아짐
export default function Header() {
    return (/*-- 리턴 값 안에 함수를 작성 --*/
        <div className="header">
            <h1>
                <Link to="/" /*-- 첨으로 돌아가기 --*/ > 토익 영단어(고급) </Link>
            </h1>
            <div className="menu">
                <a href="#x" className="link">
                    단어 추가
                </a>
                <a href="#x" className="link">
                    Day 추가
                </a>
            </div>
        </div>
    );
}
