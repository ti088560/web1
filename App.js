import Header from "./component/Header";
// <Header>같은거 쓰려면 mport 필수
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// router : 경로 설정 가능
/*-- <Header /> <--가독성 굳 --*/

function App() {
  return (/*-- 리턴을 크게 하나로 묶어줘야 함 --*/
    <BrowserRouter>
      <div className="App" /*-- className은 HTML에 CSS를 적용하기 위해 사용됨. --*/>
        <Header /*-- header는 경로가 바뀌어도 그대로 있기에 routes 안에 들어가지 않음. --*/ />
        <Routes /*-- Routes는 Route의 경로를 순서대로 확인하고, URL이 일치하는 첫번째 경로를 렌더링함.    ....    --*/>
          <Route path='/' element={<DayList />} /*-- path에 '/'만 쓰면 처음 경로로 돌아감. --*/ />
          <Route path='/day/:day' element={<Day />} /*-- "/:day" -->>> day라는 변수의 값(1 or 2 or 3)->(/day/1 or /day/2 or /day/3)  따라서 만약 "/:id"를 하면 id값이 들어감 --*/ />
          <Route path='*' element={<EmptyPage />} /*--   path='*'은 아무 경로를 의미                  .... 따라서 빈페이지 처리를 맨 뒤에 적는 이유가 그것임.  --*//>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
/*-- export default로는 다양한 형태(클래스, 함수, 객체, 배열 ..)를 내보낼수 있다. --*/
