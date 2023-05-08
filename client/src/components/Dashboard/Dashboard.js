import InfoForm from "../InfoForm/InfoForm"
import { COURSES_URL, SERVER_URL } from "../Utility/constants"
import { Link, useLocation } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"

function Dashboard() {
    const [creditTotal, setCreditTotal] = useState(0)
    const [facultyReqs, setFacultyReqs] = useState({})
    const location = useLocation()

    const fetchFacultyReqs = useCallback(async () => {
        const response = await fetch(SERVER_URL + location.state.faculty).catch(error => {
            window.alert(`An error occurred: ${error}`)
            return
        })

        const reqs = await response.json()
        setFacultyReqs(reqs[0])

    }, [])

    const fetchCredit = useCallback(async (dept, code) => {
        const response = await fetch(COURSES_URL + `getCourseInfo/${dept}%20${code}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(error => {
            console.log(error)
            return 0
        })

        const responseJSON = await response.json()
        return responseJSON.cred
    }, [])

    const fetchCreditTotal = useCallback(async () => {
        const courses = location.state.courses
    
        let total = 0
        for (const [key, value] of Object.entries(courses)) {
            total += await fetchCredit(value[0].trim(), value[1].trim())
        }

        setCreditTotal(total)
    }, [])

    useEffect(() => {
        fetchCreditTotal()
        fetchFacultyReqs()
    }, [fetchFacultyReqs, fetchCreditTotal])

    
    return (
        <div>
            <h1> my dashboard </h1>
            <h2>Credit Total: {creditTotal} </h2>
            <h2>Credits Left: {facultyReqs['min-total-credit'] - creditTotal}</h2>
            <h2>Faculty Requirements:</h2>
            <ul>
                {Object.entries(facultyReqs).map(([key, value]) => {
                    return (
                        <li key={key}>
                            {key}: {value}
                        </li>
                    )
                })}
            </ul>
            <h2>Courses Taken:</h2>
            <ol>
                {Object.entries(location.state.courses).map(([key, value]) => {
                    return (
                        <li key={key}>
                            {value}
                        </li>
                    )
                })}
            </ol>

            
            <Link to="/" element={<InfoForm />}>back</Link>
        </div>
    )
}

export default Dashboard