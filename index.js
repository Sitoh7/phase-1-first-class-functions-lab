// Code your solution in this file!

// const returnFirstTwoDrivers = (arrayName) =>{
//     return arrayName.slice(0,2);
//     return arrayName;
// }

function returnFirstTwoDrivers(arrayName){
    return arrayName.slice(0,2);
    return arrayName;
}

const returnLastTwoDrivers = (arrayName) => {
    return arrayName.slice(arrayName.length -2,arrayName.lenght);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(y){
 return function fareMultiplier(x){
    return x*y ;
 }

}

function fareDoubler(x){
    return x*2;
}

function fareTripler(x){
    return x*3;
}

function selectDifferentDrivers(arrayOfDrivers, functionName){
    return functionName(arrayOfDrivers);
}