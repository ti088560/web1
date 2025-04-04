// 잘못된 경로로 돌아왔을때 처음으로 돌아가는 컴포넌트

import { Link } from "react-router-dom";

export default function EmptyPage() {
    return (
    <>  
        <h2>잘못된 접근</h2>
        <Link to='/'>돌아가기</Link>
    </>
    );
}