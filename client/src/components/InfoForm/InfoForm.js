import Dropdown from "../Utility/Dropdown/Dropdown"
import CoursesInput from "../CoursesInput/CoursesInput"
import data from "../../data.json"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Form() {
    const [courses, setCourses] = useState({})
    const navigate = useNavigate()

    const faculties = data.faculties
    const programs = data.programs
    const years = data.years

    const submitHandler = (event) => {
        event.preventDefault()
        navigate('/dashboard', {
            state: {
                faculty: event.target[0].textContent.toLowerCase(),
                program: event.target[1].textContent.toLowerCase(),
                year: event.target[2].textContent,
                courses: courses
            }
        })
    }

    return (
        <div>
            <form id="info-form" onSubmit={submitHandler} className="d-flex flex-column align-items-center">
                <Dropdown dropdownText="Choose Your Faculty" dropdownData={faculties}/>
                <Dropdown dropdownText="Choose Your Program" dropdownData={programs}/>
                <Dropdown dropdownText="Choose Your Year Level" dropdownData={years}/>
                <CoursesInput formId="info-form" setCourses={setCourses} />
                <button className="btn btn-primary d-block" type="submit" form="info-form">submit</button>
            </form>
        </div>
    )
}

export default Form