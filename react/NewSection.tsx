import React from 'react';

import { useCssHandles } from 'vtex.css-handles';
import { useRef } from 'react';

const CSS_HANDLES = ['project', 'changeImageText'] as const

const NewSection = () => {
    const [url, setURL] = React.useState("")

    const handles = useCssHandles(CSS_HANDLES)

    const myRef = useRef<HTMLInputElement | null>(null)

    function handleUpload(event: any) {

        setURL(URL.createObjectURL(event.target.files[0]))

    }

    const handleFileUpload = () => {
        if (myRef.current) {
            myRef.current.click()
        }
    }



    return (
        <>
            <div>
                {!url && <input required type="file" onChange={handleUpload} />}
                {url && <>

                    <input required type="file" style={{ display: "none" }} ref={myRef} onChange={handleUpload} />
                    <div className={handles.changeImageText} onClick={handleFileUpload}>Change this file</div>
                </>}

                <br /><br />
                {url && <img src={url} alt="Image Not Found" height="200px" width="200px" />}
                <br /><br />
                <input required type="checkbox" /><span> * I certify that I own the copyright or have permission to use the copyrights to these images.</span>
                <p>Project Details</p>
                <textarea required className={handles.project}></textarea>
            </div>
        </>

    );
};

export default NewSection;