import { useState } from 'react';
import Layout from '../common/Layout';

function Member() {

    //userid 의 입력값이 담길 초기 state를 객체로 지정
    const initVal = {
        userid: '',
    };
    //해당 객체값을 state에 초기값으로 저장
    const [Val, setVal] = useState(initVal);





    return (
        <Layout name={'Member'}>
            <form action="">
                <fieldset>
                    <legend>회원가입 폼 양식</legend>
                    <table border='1'>
                        <caption>회원가입 정보입력</caption>
                        <tbody>
                            <tr>
                                <th scope='row'>
                                    <label htmlFor="userid">USER ID</label>
                                </th>
                                <td>
                                    <input type="text"
                                        placeholder='아이디를 입력하세요'
                                        name='userid'
                                        id='userid'
                                        //Val state에 있는 userid값을 input요소에 출력
                                        value={Val.userid}
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>

            </form>
        </Layout>

    );
}
export default Member;