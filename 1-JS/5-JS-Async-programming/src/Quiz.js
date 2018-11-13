

function teach() {
    let tnrName = "Nag" // end of teach , this data will move to heap
    try {
        console.log(tnrName + ' teaching .js');
        //throw new Error('error in .js');
        setTimeout(() => {
            console.log(tnrName + ' teaching react.js');
            // throw new Error('error in react.js');
            console.log('teaching react.js ends');
        }, 3000);
        console.log('teaching .js ends');
    } catch (e) {
        console.log('caught - ' + e.message);
    }
}
teach();