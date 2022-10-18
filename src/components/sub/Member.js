import { useState } from 'react';
import Layout from '../common/Layout';

function Member() {

    //userid 의 입력값이 담길 초기 state를 객체로 지정
    const initVal = {
        userid: '',
    };
    //해당 객체값을 state에 초기값으로 저장
    const [Val, setVal] = useState(initVal);


    const handleChange = (e) => {
        const { name, value } = e.target;
        //es5에서는 객체에서 키값을 변수로 지정할 수 없었다
        //es6에서 객체의 키값을 변수로 치환하고자 한다면 키 변수명을 []로 감싸준다
        setVal({ ...Val, [name]: value });
    }


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

                                        value={Val.userid}
                                        onChange={(e) => { handleChange }}
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