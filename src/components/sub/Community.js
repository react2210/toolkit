import { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";
export default function Community() {

    const dummyPosts = [
        { title: 'HELLO5', content: 'Here comes description in details' },
        { title: 'HELLO4', content: 'Here comes description in details' },
        { title: 'HELLO3', content: 'Here comes description in details' },
        { title: 'HELLO2', content: 'Here comes description in details' },
        { title: 'HELLO1', content: 'Here comes description in details' },
    ];

    const input = useRef(null);
    const textarea = useRef(null);
    const [Posts, setPosts] = useState(dummyPosts);

    const resetForm = () => {
        input.current.value = '';
        textarea.current.value = '';
    }

    //글저장 함수
    const createPost = () => {

        if (!input.current.value.trim() || !textarea.current.value.trim()) {
            resetForm();
            return alert('제목과 본문을 모두 입력하세요');
        }

        setPosts([
            ...Posts,
            {
                title: input.current.value,
                content: textarea.current.value
            },
        ]);
        resetForm();
    };

    //글 삭제함수
    const deletePost = (index) => {
        console.log(index);

        setPosts(Posts.filter((post, idx) => idx !== index));
        /*
        filter() 메서드는 자바스크립트 배열의 내장함수이다
        주어진 함수의 테스트를 통과하는 모든 요소를 모아 true면 요소를 유지하고 false면 버린다
        새로운 배열로 변환하기 때문에 전개연산자를 쓰지 않아도 불변성이 유지된다
        처리할 대상이 되는 배열.filter((처리할 요소값, 요소의 인데스)=>조건값 즉 테스트값) 
        
        글삭제함수로 들어온 index는 밑에 delete버튼을 클릭한 특정인덱스값이다
        idx는 filter안에서 반복을 돌리고있는 순번을 나타낸다
        idx !== index 는 
        filter는 조건이 참이면 유지하고 거짓이면 지우기때문에 지워야하는 인덱스가 반복을 돌리고있는 인덱스와 같은 값이 되면 false라는 요건을 충족시켜야한다
        */
    };

    //Posts의 값이 변경될때마다 콘솔출력해서 우리가 볼 수 있는 
    useEffect(() => {
        console.log(Posts);


    }, [Posts]);

    return (
        <Layout name={"Community"}>
            <div className="inputBox">
                <input type="text" placeholder="제목을 입력하세요" ref={input} />
                <br />
                <textarea cols="30" rows="5" placeholder="본문을 입력하세요" ref={textarea}></textarea>
                <br />
                <div className="btnSet">
                    <button onClick={resetForm}>CANCLE</button>
                    <button onClick={createPost}>WRITE</button>
                </div>

            </div>

            <div className="showBox">
                {Posts.map((post, idx) => {
                    return (
                        <article key={idx}>
                            <div className="txt">
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                            </div>

                            <div className="btnSet">
                                <button>EDIT</button>
                                <button onClick={() => deletePost(idx)}>DELELTE</button>
                            </div>
                        </article>
                    );

                })}
            </div>
        </Layout>
    );
}