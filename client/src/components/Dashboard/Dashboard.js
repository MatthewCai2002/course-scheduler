import { Link } from "react-router-dom"
import InfoForm from "../InfoForm/InfoForm"

function Dashboard() {
    return (
        <div>
            <h1> my dashboard </h1>
            <Link to="/" element={<InfoForm />}>back</Link>
        </div>
    )
}

export default Dashboard