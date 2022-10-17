import { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout"

export default function Location() {

    const { kakao } = window;
    const container = useRef(null);
    const [Location, setLocation] = useState(null);

    const [Traffic, setTraffic] = useState(false);
    // Traffic 토글 기능 구현을 위한 state을 추가, 불림값을 부여한다. 스위치가 가능한 불린값을 주는것

    const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    const imageSrc = `${process.env.PUBLIC_URL}/img/marker1.png`;
    const imageSize = new kakao.maps.Size(232, 99);
    const imageOption = { offset: new kakao.maps.Point(116, 99) };
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });



    useEffect(() => {

        const map_instance = new kakao.maps.Map(container.current, option);

        marker.setMap(map_instance);
        setLocation(map_instance);
    }, []);


    //트래픽 토글전용 useEffect  => 
    useEffect(() => {
        if (!Location) return;
        //Location state의 값은 두번째 호출부터 값이 담겨 사이클이 돌아가므로 처음 값이 존재하지 않는 초기 오류방지를 위해 조건문 처리함

        //트레픽값에 따라서 생성과 삭제로 나누어서 코드를 제공, 구현
        Traffic
            ? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
            : Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    }, [Traffic]); //<--- traffic state의 값이 변경될때 마다 실행이 되는 구문





    return (
        <Layout name={"Location"}>
            <div id="map" ref={container}></div>

            {/* 기존의 두개의 버튼에서 한개의 토글버튼으로 바꿈
    버튼 클릭시 트래픽값을 반전처리 => !Traffic
*/}
            <button onClick={() => { setTraffic(!Traffic) }
            }>
                {/* Traffic의 값에 따라서 버튼의 내용도 변경 */}
                {Traffic ? 'Traffic OFF' : 'Traffic ON'}
            </button>
        </Layout>
    );
}