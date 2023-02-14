import React from "react";
import './Experience.css'
import { v4 as uuidv4} from 'uuid';
export default function Experience(props){
    let id = uuidv4();
    return(
        <div className="experience--results">
            <div className="experience--results--container">
                <h3 className="preview--experience--heading">ADDITIONAL SKILLS</h3>
                <div className="skills-list">
                    {props.data.map(item => <p key={id}className="skills--preview--text">{item}</p>)}
                </div>
            </div>
        </div>
    )
}