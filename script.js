// 1st assignment
// add all the count values using for loop and console the output. output should be 6.
const res = [
    {
        count: 1,
    },
    {
        count: 2,
    },
    {
        count: 3,
    },
];

let output = 0;
for (let i = 0; i < res.length; i++) {
    output += (res[i].count);
}

console.log("output: " + output);

// 2nd assignment
// add all the count values using for loop and console the output. output should be 8.

const response = {
    maran: {
        count: 1,
    },
    gas: {
        count: 2,
    },
    prelude: {
        count: 5,
    },
    keys: ['maran', 'gas', 'prelude'],
};

let result = 0;
Object.keys(response).forEach(key => result += response[key].count || 0);
console.log("output: " + result)


// 3rd assignment
// change the 'HI' Text color on clicking of button.
function colorChange() {
    document.getElementById("h1Tag").style.color = "green";
}