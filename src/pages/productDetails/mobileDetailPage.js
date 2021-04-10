import React from 'react'
import {useParams, useHistory} from "react-router-dom";
import {mobileContext} from '../../context/mobileContext'

export default function MobileDetailPage() {
    const {id} = useParams();
    const history = useHistory();
    const {mobileData} = React.useContext(mobileContext)

    if (mobileData.length === 0) {
        return <h1>Loading...</h1>
    }
    else {
        const product = mobileData.find(single => {
            return single.id == id;
        });
        // const {}
        return (
            <div>
                Hello from mobile page
            </div>
        )
    }
}
