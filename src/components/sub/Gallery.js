import Layout from "../common/Layout";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Masonry from 'react-masonry-component';


export default function Gallery() {
    const key = '4612601b324a2fe5a1f5f7402bf8d87a';
    const method_interest = "flickr.interestingness.getList";
    const method_search = "flickr.photos.search";
    const num = 20;
    const interest_url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
    const search_url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${'바다'}`;
    const masonryOptions = { transitionDuration: '0.5s' };

    const [Items, setItems] = useState([]);
    const frame = useRef(null);
    const getFlickr = async (url) => {
        const result = await axios.get(url);
        setItems(result.data.photos.photo);
        frame.current.classList.add('on');
    };

    useEffect(() => getFlickr(interest_url), []);
    //함수의 정의 형태로 콜백함수가 들어와야 한다, 함수를 단순 호출하는 형태는 읽어들일 수 없다
    useEffect(() => {
        getFlickr(interest_url);
    }, [Items])

    //

    return (
        <Layout name={'Gallery'}>
            <button
                onClick={() => {
                    frame.current.classList.remove('on');
                    getFlickr(interest_url);
                }}
            >
                Interest Gallery
            </button>
            <button
                onClick={() => {
                    frame.current.classList.remove('on');
                    getFlickr(search_url);
                }}
            >
                Search Gallery
            </button>
            <div className="frame" ref={frame}>
                <Masonry elementType={'div'} options={masonryOptions}>


                    {Items.map((item, idx) => {
                        return (
                            <article key={idx}>
                                <div className="inner">
                                    <div className="pic">
                                        <img
                                            src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                                            alt={item.title} />
                                    </div>
                                    <h2>{item.title}</h2>
                                </div>
                            </article>
                        )
                    })}
                </Masonry>
            </div>
        </Layout>
    );
}

/*
? 형태는 쿼리스트링하는 형태의 방법이다
쿼리스트링은 ??

사용자가 입력 데이터를 전달하는 방법중의 하나로 url주소에 미리 협의된 데이터를 파라미터를 통해 넘기는 것을 말한다
파라미터는 물음표 뒤에 = 으로 연결된 key value 부분을 말한다
url에 붙여서 추가적인 정보를 서버측에 전달하는 내용이다
클라이언트가 어떤 특정 리소스에 접근하고 싶어하는지의 정보를 담는것

형식(방법)
- 정해진 엔드포인트 주소이후에 ?를 쓰는것으로 쿼리스트링이 시작함을 알린다
- parameter = value 로 필요한 파라미터의 값을 적는다
- 파라미터가 여러개일경우 &를 붙여서 여러개의 파라미터를 넘길수 있다
- 엔드포인트주소/추가적인주소 ? 파라미터=값&파라미터=값

*/