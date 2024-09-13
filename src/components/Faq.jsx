import React from "react";
import FaqData from "./api";
import Questions from "./questions";

const Faq = () => {

    const fetchData = (value) => {
        return (
            <Questions
                headId={value.headId}
                heading={value.heading}
                dataId={value.dataId}
                data={value.data}
                targetId={value.targetId}
            />
        )
    }
    return (
        <>
            <div className="container-fluid bg-black py-5" >
                <h1 className="text-center">Frequently Asked Questions</h1>
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col-10 col-md-8">
                        <div className="accordion accordion-flush" id="accordionParent" >

                            {FaqData.map(fetchData)}
                        </div>
                    </div>

                   

                </div>
            </div>
        </>
    );
};

export default Faq;