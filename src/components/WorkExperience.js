import React from "react";
import './WorkExperience.css'
export default function WorkExperience(props){
    return (
        <div> 
            <div className="workexperience--results">
                <div className="workexperience--results--container">
                    <h3 className="preview--workexperience--heading">EMPLOYMENT HISTORY</h3>
                    <div className="workhistory-list">
                        <p className="workhistory-skills-preview-title"><span className="workhistory-colored">{props.data.title} - </span><i>{props.data.company}</i></p>
                        <p className="workhistory-skills--preview-date">{props.data.startMonth} {props.data.startYear} - {props.data.endMonth} {props.data.endYear}</p>
                        <p className="workhistory-skills--preview-task"><span className="workhistory-colored">Main Task: </span>{props.data.task}</p>
                        <p className="workhistory-skills--preview-type"><span className="workhistory-colored">Employment Type: </span>{props.data.employmentType}</p>
                    </div>
                </div>
        </div>
        </div>
    )
}