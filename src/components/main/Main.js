import { useEffect, useRef } from "react";
import Header from "../common/Header";
import News from "./News";
import Pics from "./Pics";
import Vids from "./Vids";
import Visual from "./Visual";


function Main() {
    const main = useRef(null);
    const pos = useRef([]);

    const getPos = () => {
        const secs = main.current.querySelectorAll('.myScroll');
        for (const sec of secs) pos.current.push(sec.offsetTop);
        console.log(pos.current);
    }

    useEffect(() => {
        getPos();
    }, []);


    /*
    리액트를 사용하는 프로젝트에서도 간혹 리얼돔을 직접 선택해야 하는 상황이 종종 발생한다
    예) input에 focus를 주거나, 지금과 같은 스크롤 위치알아내기, 특정 DOM의 크기를 측정할때

    왜 리액트에서 쿼리셀렉터를 지양하라고 하는가??

    이유는 리얼돔보다 가상돔의 참조값이 리액트에게는 더 신뢰할만한 값이기 때문이다
    그래서 Ref를 이용해서 참조한다

    그러면 쿼리셀렉터는 사용하면 안되는것일까?? 아니다~
document.querySelector - 명령형 ( a - > c  : a -> b > b.3 -> c)

main.current.querySelector - 선언형 (a-> c 가는 길은 너가 정해) 리액트는 선언형을 추구합니다

    ref~가 있는데 왜 쿼리셀렉터??
    ref도 남발하면 문제되요

    결론은 ref든 쿼리셀렉터든 리액트의 생명주기 싸이클에 영향을 주면 안된다~
    



    */






    return (
        <main ref={main}>
            <Header type={'main'} />
            <Visual />
            <News />
            <Pics />
            <Vids />
        </main>
    );
}

export default Main;