import { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout"

export default function Location() {

    const { kakao } = window;
    //윈도우 객체에 등록되어 있는 카카오키를 변수명으로 비구조화할당을 한것
    //윈도우 객체가 카카오 객체를 사용할 수 있도록 하는코드
    //const kakao = (window).kakao;


    //var container = document.getElementById('map');
    //리얼돔에서 참조하는 방법으로 해당방법은 가상돔인 리액트에서는 사용할 수 없다.
    //그래서 리액트에서는 useRef라는 훅을 이용해서 가상으로 생성된 DOM을 참조할 수 있다.
    const container = useRef(null);
    //useRef를 이용해서 가상돔을 참조할 변수로 컨테이너를 생성한 뒤, null값으로 빈 구역을 만들어둠


    const [Location, setLocation] = useState(null);
    //useEffct에서 만들어진 지도 인스턴스를 담을 state를 생성하는것

    const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    //마커위치 인스턴스 생성
    const imageSrc = `${process.env.PUBLIC_URL}/img/marker1.png`;
    const imageSize = new kakao.maps.Size(232, 99);
    const imageOption = { offset: new kakao.maps.Point(116, 99) };
    //마커 이미지 변경에 필요한 정보값 3개를 등록

    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
    );

    const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });
    //위치 인스턴스 값을 인수로 전달해서 다시 마커 인스턴스 생성


    useEffect(() => {
        //지도 인스턴스 최종 생성
        const map_instance = new kakao.maps.Map(container.current, option);
        //지도 인스턴스를 활용해서 마커를 생성하는 코드
        marker.setMap(map_instance);
        setLocation(map_instance);
    }, []);






    return (
        <Layout name={"Location"}>
            <div id="map" ref={container}></div>

            <button onClick={() => { Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) }
            }>
                Traffic On
            </button>

            <button onClick={() => { Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) }
            }>
                Traffic Off
            </button>
        </Layout>
    );
}