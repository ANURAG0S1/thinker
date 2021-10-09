import { useEffect, useState } from 'react';
import axios from 'axios'
import Postform from '../components/Postform';
import Post from '../components/Post';

function Homefeed() {
    const [data, setdata] = useState([]);
    async function getdata() {
        setdata(null);
        const res = await axios.get('http://localhost:5000/post/all', {
            username: 'anurag',
            password: 'nowq',
        });
        console.log(res.data, 'servrerdat');
        setdata(res.data);
    }
    useEffect(async () => {
        getdata();
        return true;
    }, []);
    return (
        <div>
            <Postform />
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>

                {data
                    ? data.map((e, i) => {
                        return <Post data={e} key={i}></Post>;
                    })
                    : ''}
            </div>
        </div>
    )
}

export default Homefeed
