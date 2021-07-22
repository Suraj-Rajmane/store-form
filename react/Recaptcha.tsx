import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value: any) {

    console.log("Captcha value:", value);

}



const Recaptcha = () => {
    return (
        <ReCAPTCHA
            sitekey="6LcWzGQbAAAAAK2mmoJ3TfKda2TFmu9VZ8jT-SxX"
            onChange={onChange}
        />
    );
};

export default Recaptcha;