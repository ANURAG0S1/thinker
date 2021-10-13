import { useEffect, useState } from 'react';
import axios from 'axios'
import Postform from '../components/Postform';
import Post from '../components/Post';
import loading from './../assets/img/loading.gif'


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
            <Postform refreshHandler={getdata} />
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>

                {data
                    ? data.map((e, i) => {
                        return <Post data={e} key={i}></Post>;
                    })
                    : <div style={{
                        height: "60vh", width: "100%", display: "flex",
                        justifyContent: "center", alignItems: "center"
                    }}> <img src={loading} height="100" width="100" alt="" />
                    </div>}
            </div>
        </div>
    )
}

export default Homefeed
