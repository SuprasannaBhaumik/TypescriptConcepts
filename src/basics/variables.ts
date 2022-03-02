
const myFun = () => {
    let name = 'Suprasanna';
    console.log(name);
    name = 'Bhaumik';
    console.log(name);
}

const myConstFun = () => {
    const name = 'Suprasanna';
    console.log(name);
    //attempt to assign to const variable not possible
    //name = 'Bhaumik';

}


myFun();
myConstFun();
