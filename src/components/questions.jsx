import React from "react";
import './questions.css';

const Questions = (props) => {
    return (
        <>

            <div className="accordion-item my-3">
                <h2 className="accordion-header" id={props.headId}>
                    <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target={props.targetId} aria-expanded="false" aria-controls={props.dataId}>
                        {props.heading}
                    </button>
                </h2>
                <div className="accordion-collapse collapse " aria-labelledby={props.headId} id={props.dataId} data-bs-parent="#accordionParent">
                    <div className="accordion-body">
                        {props.data}
                    </div>
                </div>
            </div>


        </>
    );
};

export default Questions;