import React from "react";

export default function PersonalPreview(props){
    const {name, proftitle, phone, email, linkedin, github, about} = props.data;

    console.log('From personal view props: ', props)
    return (
        <div className="preview--results">
            <div className="personalinfo--results--container">
                <h1>{name} | <strong>{proftitle}</strong></h1>
                <div className="personalinfo-first-half">
                    <div>
                            <p><strong>Email Address: </strong>{email}</p>
                            <p><strong>Phone: </strong>{phone}</p>
                        </div>
                    <div>
                            <p><strong>Linkedin: </strong>{linkedin}</p>
                            <p><strong>Github: </strong>{github}</p>
                    </div>            
                </div>
                <div className="about-container">
                    <h3 className="about-title"><strong>ABOUT</strong></h3>    
                    <p className="about-text">
                        {about}
                    </p>
                </div>        
            </div>
        </div>
    )
    
}