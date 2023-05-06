import { useState } from "react"

function CoursesInput(props) {
    const [inputs, setInputs] = useState(5)

    const addRowsHandler = () => {
        setInputs(inputs + 5)
    }

    const addCourseHandler = (event) => {
        props.setCourses((prevState) => {
            return {
                ...prevState,
                [event.target.id]: event.target.value
            }
        })
    }

    let rows = []
    for (let i = 0; i < inputs; i++) {
        rows.push(
            <tr key={i}>
                <th scope="row" ><label htmlFor={i}>{i + 1}</label></th>
                <td><input form={props.formId} id={i} type="text" onChange={addCourseHandler}/></td>
            </tr>
        )
    }

    return (
        <div className="d-flex flex-column align-items-center"> 
            <table className="table w-25" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Course Abbreviation and Number, No space</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <button className="btn btn-primary d-block mb-3" type="button" onClick={addRowsHandler}>Add More Courses</button>
        </div>
    )
}

export default CoursesInput