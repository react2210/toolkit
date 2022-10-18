import { useState } from 'react';
import Layout from '../common/Layout';

function Member() {

    //userid 의 입력값이 담길 초기 state를 객체로 지정
    const initVal = {
        userid: '',
    };
    //해당 객체값을 state에 초기값으로 저장
    const [Val, setVal] = useState(initVal);

    const [Err, setErr] = useState({});

    const check = (value) => {
        const errs = {};

        if (value.userid.length < 5) {
            errs.userid = '아이디를 5글자 이상 입력하세요';
        }
        return errs;
    };

    /*
    대입형 함수의 특징 : 함수 표현식이라고 하는데 이 함수의 특징은 호이스팅에 영향을 받지 않는다
    콜백으로 사용이 가능 ( 다른 함수의 인자로 넘길수 있음, 순서에 따라서 적용됨)
    클로저로 사용이 가능 - 클로저는 매우 어렵지만 자바스크립트의 중요한 개념
    클로저란 함수자신이 만들어진 환경(scope)을 기억해서 외부에서 호출되거나, 상위함수가 종료되더라도 해당 환경을 기억해서 접근할 수 있는 함수를 말한다 즉 메모리상에서 환경을 기억한다는 점에서 메모리를 점유하고 있어 메모리상으론 손해다 하지만 자바스크립의 강력한 기능으로 적극적으로 사용된다
    */
    const handleChange = (e) => {
        const { name, value } = e.target;
        //es5에서는 객체에서 키값을 변수로 지정할 수 없었다
        //es6에서 객체의 키값을 변수로 치환하고자 한다면 키 변수명을 []로 감싸준다
        //[name]  === 'userid'
        // setVal({ ...Val, userid: e.target.value });
        setVal({ ...Val, [name]: value });
    }

    const handleSubmit = (e) => {
        //일단 서버전송, 이동을 막아줘야한다 a태그가 아니어도 submit자체가 가지는 속성을 막는다
        e.preventDefault();
        //check함수에 인수로 Val값을 넣어서 
        setErr(check(Val));
    };


    return (
        <Layout name={'Member'}>
            <form action="">
                <fieldset>
                    <legend>회원가입 폼 양식</legend>
                    <table border='1'>
                        <caption>회원가입 정보입력</caption>
                        <tbody>
                            {/* userid */}
                            <tr>
                                <th scope='row'>
                                    <label htmlFor="userid">USER ID</label>
                                </th>
                                <td>
                                    <input type="text"
                                        placeholder='아이디를 입력하세요'
                                        name='userid'
                                        id='userid'

                                        value={Val.userid}
                                        onChange={(e) => { handleChange }}
                                    />
                                    {/* 혹시 에러가 있으면 Err정보값을 화면에 출력 */}
                                    <span className='err'>{Err.userid}</span>
                                </td>
                            </tr>


                            {/* btn set */}
                            <tr>
                                <th colSpan='2'>
                                    <input type="reset" value="" />
                                    <input type="submit" value="" />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>

            </form>
        </Layout>

    );
}
export default Member;