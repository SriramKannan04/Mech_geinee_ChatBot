import React from "react";
import './Features.css'

function Features()
{
    return(
        <div className="featBody">
            <section className="featBody2">
                <div>
                    <img src="./img/features_page.png" alt="#" srcset="" />
                </div>
                
                <div>
                    <br /><br />
                    <p><strong>Mech Geniee</strong> is a comprehensive reference that provides essential information for </p>
                    <p>engineers, designers, and students. It includes mathematical formulas, material properties, </p>
                    <p>standard dimensions and tolerances, fits and tolerances, material selection guidelines, codes </p>
                    <p>and standards, material manufacturing processes, environmental data, load and stress </p>
                    <p>calculations, charts and diagrams, material compatibility, material testing standards,</p>
                    <p>machine elements, heat treatment, material handling, welding, casting, machining, rolling  </p>
                    <p>element bearings, and standards, facilitating efficient engineering design and analysis while  </p>
                    <p>ensuring quality and safety in various industries and applications.</p>
                </div>
            </section>
        </div>
    );
}

export default Features;