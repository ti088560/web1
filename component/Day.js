// Day.js 컴포넌트는 Day N을 누르면 
// (   Link로 변경했던 URL을 useParams로 체크하고   )
// 해당 날짜 단어들을 그래프로 표시 
// (   컴포넌트 : UI의 구성요소   )

import Word from './Word';
import dummy from '../db/data.json';
// 더미로 data.json의 객체 데이터 받아오기
import { useParams } from 'react-router-dom';
// 라우터의 useParams는 URL을 포함된 값을 얻을 수 있음. (동적인 경로를 처리할때 유리)

//      useParams로 가져올 수 있는 값
//   useParams는 URL에서 동적 파라미터를 객체 형태로 반환합니다.
//  만약 경로가 /user/:id/:name과 같다면, useParams는 { id: "123", name: "John" }와 같은 객체를 반환합니다.




export default function Day() {
    // 변수는 리턴 밖에 미리 지정
    const day = useParams().day;
    const wordList = dummy.words.filter((word) => (word.day === Number(day)));
    // filter는 조건에 해당하는 값만 걸려줌,    (해당 day 값들만 wordlist 안에 들어감)
    // === 연산자는 변수 형태도 일치하는지 확인                     따라서  ^  여기에서 word.day는 숫자형이고 day는 문자열이기 때문에, 자료형을 맞춰줘야 함.
    //   useParams()는 day1 누르면("day/:day") {day: "1"}를 리턴함

    return (
    <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map((word) => (
                    <Word word={word} key={word.id} /*-- 버튼 작동을 위해 Word 컴포넌트 생성 --*/ />
                ))}
            </tbody>
        </table>
    </>
    );
}
