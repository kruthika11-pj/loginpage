import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {

    let [state, setState] = useState({
        Uname: "",
        pass: "",
        email: "",
        gender: "",
        trainer: "",
        courses: "",
        job: ""
    })

    let { Uname, pass, email, gender, trainer, courses, job } = state

    let handleChange = (e) => {

        let { name, value } = e.target

        setState({ ...state, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log({ ...state });

        } catch {
            console.log(err);

        }
    }
    return (
        <div id='form'>
            <h1><center>JSPIDERS PAGE</center></h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">USERNAME:</label>
                <input type="text" name="Uname" value={Uname} id="" onChange={handleChange} />


                <br />
                <label htmlFor="">PASSWORD:</label>
                <input type="text" name="pass" value={pass} id="" onChange={handleChange} />


                <br />
                <label htmlFor="">EMAIL:</label>
                <input type="email" name="email" value={email} onChange={handleChange} />


                <br />
                <label htmlFor="">GENDER:</label>
                MALE <input type="radio" name="gender" value="male" id="" onChange={handleChange} />
                FEMALE <input type="radio" name="gender" value="female" id="" onChange={handleChange} />


                <br />
                <label htmlFor="">TRAINERS:</label>
            
                <select name="trainer" value="(trainer)" id="" onChange={handleChange}>
                    <label htmlFor="">TRAINERS:</label>
                    <option value="DARSHAN">DARSHAN</option>
                    <option value="SHANKAR">SHANKAR</option>
                    <option value="AKSHAY">AKSHAY</option>

                </select>
                <br />


                <label htmlFor="">COURSES:</label>
                <br />
                JAVA<input type="checkbox" name="COURSES" value="JAVA" id="" onChange={handleChange} />
                MERN<input type="checkbox" name="COURSES" value="MERN" id="" onChange={handleChange} />
                DEVOPS<input type="checkbox" name="COURSES" value="DEVOPS" id="" onChange={handleChange} />

                <br />

                {/* <label htmlFor=""> JOB EXPERIENCE:</label>
                FRESHER <input type="radio" name="job" value="fresher" id="" onChange={handleChange} />
                EXPERIENCED <input type="radio" name="job" value="experienced" id="" onChange={handleChange} />


                <br /> */}



                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default App




