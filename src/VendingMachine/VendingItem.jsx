import { Link, useParams } from "react-router-dom";
import "./VendingItem.css"

const VendingItem = () => {
    const params = useParams();
    let result;

    const success = () => {
        const rand = Math.floor(Math.random() * 3);
        return rand === 1;
    };

    const isSuccessful = success();

    if (isSuccessful) {
        result = params.name;
    } else {
        result = "Radroach";
    }

    return (
        <>
            {result === "nuka-cola" ? (
                <div className="VendingItem bottle-cap">
                    <h3>You got a Nuka Cola and a bottle cap!</h3>
                    <Link to={"/"}>Go Back</Link>
                </div>
            ) : result === "blamco-mac-&-cheese" ? (
                <div className="VendingItem cheese">
                    <h3>You got some BlamCo Mac & Cheese</h3>
                    <Link to={"/"}>Go Back</Link>
                </div>
            ) : (
                <div className="VendingItem radroach">
                    <h3>Holy shit a Radroach appeared, you ran away and lost all your caps!</h3>
                    <Link to={"/"}>Go Back</Link>
                </div>
            )}


        </>
    );
};

export default VendingItem;
