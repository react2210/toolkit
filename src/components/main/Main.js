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
        pos.current = [];
        const secs = main.current.querySelectorAll('.myScroll');
        for (const sec of secs) pos.current.push(sec.offsetTop);
        console.log(pos.current);
    }

    useEffect(() => {
        getPos();
        //리사이즈 이벤트가 발생하면 스크롤 값을 다시 불러온다
        window.addEventListener('resize', getPos);

        return () => window.removeEventListener("resize", getPos);
    }, []);


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