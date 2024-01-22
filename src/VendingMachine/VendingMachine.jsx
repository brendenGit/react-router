import { Link } from "react-router-dom"
import "./VendingMachine.css"

const VendingMachine = ({ bottlecapCount }) => {

    return (
        <div className="VendingMachine">
            <div className="VendingMachine-Items">
                <h3 className="VendingMachine-Item">
                    <Link to="/vending-item/nuka-cola">
                        Nuka Cola
                    </Link>
                </h3>
                <h3 className="VendingMachine-Item">
                    <Link to="/vending-item/blamco-mac-&-cheese">
                        BlamCo Mac & Cheese
                    </Link>
                </h3>
                <h3>
                    {bottlecapCount}
                </h3>
            </div>
        </div>

    )
}

export default VendingMachine;