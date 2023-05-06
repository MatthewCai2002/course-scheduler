import { useState } from "react"

function Dropdown(props) {
    const [dropdownText, setDropdownText] = useState(props.dropdownText)
    
    const selectHandler = (event) => {
        setDropdownText(event.target.text)
    }

    const dropdownItems = props.dropdownData.map((str, index) => 
        <a key={index} className="dropdown-item" href="#" onClick={selectHandler}>
            {str}
        </a>
    )

    return (
        <div className="dropdown w-75 d-flex justify-content-center mb-2">
            <button 
                id="dropdown-menu-btn" 
                data-bs-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false" 
                type="button" 
                className="btn btn-outline-primary w-100 dropdown-toggle"
            >
                {dropdownText}
            </button>
            <div className="dropdown-menu w-100" aria-labelledby="dropdown-menu-button">
                {dropdownItems}
            </div>
        </div>
        
    )
}

export default Dropdown