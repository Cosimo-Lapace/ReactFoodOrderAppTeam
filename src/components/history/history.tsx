import { useContext } from "react";

const History = () => {

    const { history } = useContext<any>(any);

    return (
        <div>
            <h1>History</h1>
        </div>
    )
}

export default History;