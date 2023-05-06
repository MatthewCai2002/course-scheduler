import Dropdown from "../Utility/Dropdown/Dropdown"
import CoursesInput from "../CoursesInput/CoursesInput"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Form() {
    const [courses, setCourses] = useState({})
    const [dropdownData, setDropdownData] = useState({ faculty: "", program: "", year: 0 })
    const navigate = useNavigate()

    const faculties = ["Science", "Applied Science", "Arts"]
    const programs = ["Computer Science", "Biology", "Chemistry"]
    const years = [1,2,3,4,5,6,7]

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(event)
        setDropdownData((prev) => {
            return {
                ...prev,
                faculty: event.target[0].textContent,
                program: event.target[1].textContent,
                year: event.target[2].textContent
            }
        })

        navigate('/dashboard')
    }

    return (
        <div>
            <form id="info-form" onSubmit={submitHandler} className="d-flex flex-column align-items-center">
                <Dropdown dropdownText="Choose Your Faculty" dropdownData={faculties}/>
                <Dropdown dropdownText="Choose Your Program" dropdownData={programs}/>
                <Dropdown dropdownText="Choose Your Year Level" dropdownData={years}/>
                <CoursesInput formId="info-form" setCourses={setCourses} />
                <button className="btn btn-primary d-block" type="submit" form="info-form">submit</button>
                <p>
                    Faculty: {dropdownData.faculty}, Program: {dropdownData.program}, Year: {dropdownData.year}
                </p>
            </form>
        </div>
    )
}

export default Form