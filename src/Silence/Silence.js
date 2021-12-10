import React from "react";
import img from '../gif/original.gif'
import imgWather from '../gif/9195f4dd1b69f90038f627c8af422429.gif'

const Silence = (props) => {
    return (
        <div className="Container">
            <div className="Som">
                <div className="Son">{/* Son */}</div>
                <div className="cloud">
                    <img className="cloud-1" src={img} alt="png" />
                    <img className="cloud-4" src={img} alt="png" />
                    <img className="cloud-7" src={img} alt="png" />
                    <img className="cloud-8" src={img} alt="png" />
                    <img className="cloud-5" src={img} alt="png" />
                    <img className="cloud-6" src={img} alt="png" />
                    <img className="cloud-13" src={img} alt="png" />
                    <img className="cloud-2" src={img} alt="png" />
                    <img className="cloud-3" src={img} alt="png" />
                    <img className="cloud-14" src={img} alt="png" />
                    <img className="cloud-9" src={img} alt="png" />
                    <img className="cloud-10" src={img} alt="png" />
                    <img className="cloud-11" src={img} alt="png" />
                    <img className="cloud-12" src={img} alt="png" />
                    <div className="wahter">
                        {/* <img className="wather-1" src={imgWather} alt="png" width={350} />
                        <img className="wather-2" src={imgWather} alt="png" width={350} />
                        <img className="wather-3" src={imgWather} alt="png" width={350} />
                        <img className="wather-4" src={imgWather} alt="png" width={350} />
                        <img className="wather-5" src={imgWather} alt="png" width={350} />
                        <img className="wather-6" src={imgWather} alt="png" width={350} />
                        <img className="wather-7" src={imgWather} alt="png" width={350} />
                        <img className="wather-8" src={imgWather} alt="png" width={350} />
                        <img className="wather-9" src={imgWather} alt="png" width={350} />
                        <img className="wather-10" src={imgWather} alt="png" width={350} /> */}
                    </div>
                </div>
            </div>
            <header className="App-header">
            </header>
        </div>
    );
}

export default Silence;
