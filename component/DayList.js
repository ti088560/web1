// Day N  버튼을 표시
// 누르면 URL을 "/day/n"으로 이동

import { useEffect, useState } from 'react';
// useEffect는 상태값이 변경되어서 다시 렌더링이 된 다음에 호출됨.
// 따라서 useEffect(함수); 함수에는 불필요한 실행이 생길수 있는데,
// useEffect( 함수, 의존성 배열 ); 처럼 두번째 값에 의존성 배열을 넣으면     그 배열이 변경될 때마다 실행됨 (한번만 실행하려면 빈배열 [] ㄱㄱ)
import { Link } from 'react-router-dom';
// 리액트 라우터는 html에서 쓰는 <a>태그 대신 <Link>를 사용함.

//import dummy from '../db/data.json'

export default function DayList() {
    const [days, setDays] = useState([]);
    // fetch는 웹브라우저에서 서버와 데이터를 주고받는 것을 이어주는 역할을 함 (비동기적으로 처리)
    // fetch( 요청 보낼 서버의 url )
    // then *********************************************************************?
    useEffect(() => {
        fetch('https://localhost:3001/days')
        .then(res => {
            return res.json()
        })
    }, []);

    return (<>
        <ul className='list_day'>
            {days.map(day => /*-- map() 괄호안에 함수 넣으면 data.days의 모든 day=1,2,3을 넣어 실행함 (3번 반복함) --*/(
                <li key={day.id} /*-- key는 일단 필요하다는 것만 알고, 보통은 id를 넣음. --*/>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>    /*-- `               `<-- 백틱은 문자열 format할때 ${}와 함께 사용됨 --*/
            ))}
        </ul>
    </>
    );
}
