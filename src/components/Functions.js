import React from 'react';


const Functions = () => {

/*
1. Write a JavaScript function that reverse a number. Go to the editor
Example x = 32243;
Expected Output : 34223

 */

    const first = (number=  1234) => {
     /*   console.log(number)
        let reverse = []
        const numberStr = number.toString()
        for (let x = numberStr.length-1; x > -1; x--){
            reverse.push(numberStr[x])
            console.log(reverse)
        }
    */

        console.log(number)
        const numberStr = number.toString().split("").reverse().join("")
        console.log(numberStr)


    }


    return(
        <>
        functions
            {first()}
        </>
    )
}

export default Functions;