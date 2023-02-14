import React, { useState, useEffect } from "react";
import Experience from "./ExperienceForm";
import PersonalPreview from "./PersonalPreview";
import WorkExperience from "./WorkExperience";
export default function Main(){
    //Sets the view from filling out the form to viewing the form itself (preview).
    const [isForm, setForm] = useState(true);
    const pageStyle = {
        display: isForm ? "flex" : "none"
    }

    let visibleForm = {
        display: "flex"
    }

    let hiddenForm = {
        display : "none"
    }
    function togglePreview(e){
        setForm(prevForm => !prevForm);
        const form = e.target.nextSibling;
        if (isForm){
            form.className = "form--hidden"
        } else{
            form.className = "form--filled"
        }
    }
    
    //Personal Information
    const [formData, setFormData] = useState({
        display : true,
        name: "",
        proftitle: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        about:"",
    })
    function handleChange(e){
        setFormData(prevformData => {
            return {
                ...prevformData,
                [e.target.name] : e.target.value
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log('form submitted with form data: ', formData);
    }


    //Additional Skills
    const [experience,setExperience] = useState({
        skill: '',
        skillsList: [],
        display: true
    })

    function handleExperienceChange(e){
        e.preventDefault();
        setExperience(prevexperienceData => {
            return{
                ...prevexperienceData,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmitExperience(e){
        e.preventDefault();
        setExperience(prevexperienceData => {
            return {
                ...prevexperienceData,
                skillsList : [...prevexperienceData.skillsList,prevexperienceData.skill]
            }
        })
    }
    function hidesubForm(e) {
        let selectedForm = e.target.nextSibling;
        let state = selectedForm.dataset['formid'];
        switch (state){
            case 'formData':
                setFormData(prev => {
                    return {
                        ...prev,
                        display : !prev.display
                    }
                })
                break
            case 'workExperience':
                setWorkExperience(prev => {
                    return {
                        ...prev,
                        display : !prev.display
                    }
                })
            case 'experience':
                setExperience(prev => {
                    return {
                        ...prev,
                        display: !prev.display
                    }
                })
        }
    }
    
    // useEffect(() => {
    //     if (experience.displaySkills){}
    //     !experience.displaySkills ? ({...formStyle, visibility}) = "hidden" : ({...formStyle, visibility}) = "visible"
    // },[experience.displaySkills])

    //Employment History
    const[workExperience, setWorkExperience] = useState({
        display: true,
        title: '',
        company: '',
        task: '',
        employmentType: '',
        startYear: '',
        startMonth: '',
        endYear: '',
        endMonth: '',})

    function handleSubmitEmployment(e){
        e.preventDefault();
    }

    function handleEmploymentChange(e){
        e.preventDefault();
        setWorkExperience(prevwork => {
            return{
                ...prevwork,
                [e.target.name] : e.target.value
            }
        })
    }
    return(
        <div>
            <button className="toggle--preview" onClick={togglePreview}>{isForm ? "PREVIEW" : "EDIT"}</button>
            <main className="main-container" style={pageStyle}>
            <div>
            <button onClick={(e) => hidesubForm(e)}>Hide me!</button>
                <form className="form--filled" data-formid="formData" onSubmit={handleSubmit} style={formData.display ? visibleForm : hiddenForm}>
                    <section>
                        <legend className="personalinfo--title">Personal Information
                        </legend>
                        <div>
                            <label htmlFor="name">Name
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                            </label>
                            <label htmlFor="proftitle">Professional Title
                                <input type="text" name="proftitle" value={formData.proftitle} onChange={handleChange} required/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required/>
                            </label>
                            <label htmlFor="email">Email Address
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="linkedin">Linkedin
                                <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} required/>
                            </label>
                            <label>Github
                                <input type="text" name="github" value={formData.github} onChange={handleChange} required/>
                            </label>
                        </div>
                        <div className="about">
                            <label htmlFor="about">About
                                <textarea name="about" value={formData.about} onChange={handleChange} placeholder="Ex: Favorite Hobbies, Activities, Etc."></textarea>
                            </label>
                        </div>
                    </section>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                <button onClick={(e) => hidesubForm(e)}>Hide me!</button>
                <form onSubmit={handleSubmitExperience} data-formid="experience" style={experience.display ? visibleForm : hiddenForm}>
                    <legend>Additional Skills</legend>
                    <div className="additionalskills-container">
                        <input type="text" id="skill" name="skill" value={formData.skill} onChange={handleExperienceChange}/>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <button onClick={(e) => hidesubForm(e)}>Hide me!</button>
                <form onSubmit={handleSubmitEmployment} data-formid="workExperience" style={workExperience.display ? visibleForm : hiddenForm}>
                        <legend>Employment History</legend>
                        <div>
                            <label htmlFor="Title">Title
                                <input type="text" name="title" value={workExperience.title} onChange={handleEmploymentChange} required/>
                            </label>
                            <label htmlFor="proftitle">Company
                                <input type="text" name="company" value={workExperience.company} onChange={handleEmploymentChange} required/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="task">Main Task
                                <input type="input" id="task" name="task" value={workExperience.task} onChange={handleEmploymentChange} required/>
                            </label>
                            <label htmlFor="employment">Employment Type
                            <select 
                                id="employment"
                                value={workExperience.employmentType}
                                onChange={handleEmploymentChange}
                                name="employmentType"
                            >
                                <option value="">-- Choose --</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Seasonal">Seasonal</option>
                            </select>
                            </label>
                        </div>
                        <fieldset>
                            <legend>Start Date</legend>
                            <label htmlFor="workexperience-start-year">
                                <p>Year</p>
                                <input type="text" id="workexperience-start-year" onChange={handleEmploymentChange} name="startYear" value={workExperience.startYear}/>
                            </label>
                            <label htmlFor="workexperience-start-month">
                                <p>Start Month</p>
                                <select
                                    id="workexperience-start-month"
                                    value={workExperience.startMonth}
                                    onChange={handleEmploymentChange}
                                    name="startMonth"
                                >
                                    <option value="">-- Choose --</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </label>
                        </fieldset>

                        <fieldset>
                            <legend>End Date</legend>
                            <label htmlFor="workexperience-end-year">
                                <p>Year</p>
                                <input type="text" id="workexperience-end-year" name="endYear" onChange={handleEmploymentChange} value={workExperience.endYear}/>
                            </label>
                            <label htmlFor="workexperience-end-month">
                                <p>Month</p>
                                <select
                                    id="workexperience-end-month"
                                    value={workExperience.endMonth}
                                    onChange={handleEmploymentChange}
                                    name="endMonth"
                                >
                                    <option value="">-- Choose --</option>
                                    <option value="Present">Present</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </label>
                        </fieldset>
                </form>
            </div>
            
        </main>
        {!isForm && <PersonalPreview data={formData} />}
        {!isForm && <Experience data={experience.skillsList} />}
        {!isForm && <WorkExperience data={workExperience} />}
        </div>
    )
}