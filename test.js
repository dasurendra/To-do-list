const speak = ({ interest = "chilling", name, says }) => {
    return `${name} says ${says} interested in ${interest}`;
};

const peron1 = {
    name: "prem",
    says: "just coding",
};

const value = speak(peron1);
console.log(value);

const peron = {
    says: "just coding",
    interest: "eating",
    name: "Hendra",
};
const value1 = speak(peron);
console.log(value1);
// receiving => arguments
//send => paramaters
