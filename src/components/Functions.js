import React from 'react';


const Functions = () => {

/*
1. Write a JavaScript function that reverse a number. Go to the editor
Example x = 32243;
Expected Output : 34223

 */

    const first = (number=  1234) => {
        console.log(number)
        let reverse = ""
        const numberStr = number.toString()
        for (let x = 0; x < numberStr.length; x++){
            console.log(numberStr[x])
        }
    }

    return(
        <>
        functions
            {first()}
        </>
    )
}

export default Functions;