import { useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Member() {


    const initVal = {
        userid: '',
        email: '',
    };

    const [Val, setVal] = useState(initVal);

    const [Err, setErr] = useState({});

    const check = (value) => {
        const errs = {};

        if (value.userid.length < 5) {
            errs.userid = '아이디를 5글자 이상 입력하세요';
        }
        //이메일 인증은 8글자 이상, @있어야한다
        if (value.email.length < 8 || !/@/.test(Val.email)) {
            errs.email = "이메일은 8글자 이상 @를 포함하세요";
        }

        return errs;
    };

    const handleChange = (e) => {
        //순서 2 - 입력하고 있는 인풋요소의 네임, 벨류값을 변수로 비구조화 할당
        const { name, value } = e.target;
        //순서 3 - 비구조화 할당으로 받은 값을 Val state에 저장하고 
        //순서 4 -setVal함수가 렌더링해서 우리가 볼 수 있도록 함
        setVal({ ...Val, [name]: value });
    }

    const handleSubmit = (e) => {
        //순서 6 일단 서버전송은 막아준다
        e.preventDefault();
        //순서 7 Val state값을 인수로 전달해서 check함수에서 인증검사 시작 <={ check(Val)}
        setErr(check(Val));
        //순서 8 인증검사 결과 errs가 존재한다면 반환된 에러 객체를 Err state에 옮겨 담음
    };

    useEffect(() => {
        console.log(Err);
    }, [Err]);


    return (
        <Layout name={'Member'}>
            {/* 순서 5 전송버튼 클릭시 핸들서브밋함수를 호출 */}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend className='h'>회원가입 폼 양식</legend>
                    <table border='1'>
                        <caption className='h'>회원가입 정보입력</caption>
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
                                        //순서1 - 인풋에 값을 입력시 핸들체인지 함수가 호출
                                        onChange={handleChange}
                                    />
                                    {/* 순서 9 만약 에러객체가 있다면 화면에 출력 */}
                                    <span className='err'>{Err.userid}</span>
                                </td>
                            </tr>
                            {/* email */}
                            <tr>
                                <th scope='row'>
                                    <label htmlFor="email">E-MAIL</label>
                                </th>
                                <td>
                                    <input type="text"
                                        id='email'
                                        name='email'
                                        placeholder='이메일 주소를 입력하세요'
                                        value={Val.email}
                                        onChange={handleChange}
                                    />
                                    <span className='err'>{Err.email}</span>
                                </td>
                            </tr>

                            {/* btn set */}
                            <tr>
                                <th colSpan='2'>
                                    <input type="reset" value="CANCLE" />
                                    <input type="submit" value="SEND" />
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