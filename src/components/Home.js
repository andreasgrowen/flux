import React from "react";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <div>
            <div className="grid-container grid-container--home">
                <div>
                    <h1 className="text-accent fs-500 ff-sans-cond uppercase">So, you want to enter the
                        <span className="fs-900 ff-serif text-white d-block">Flux</span></h1>

                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</p>
                </div>
                <div>
                    <a href="#" className="large-button uppercase ff-serif text-dark bg-white">Explore</a>
                </div>

            </div>
        </div>




    )
}