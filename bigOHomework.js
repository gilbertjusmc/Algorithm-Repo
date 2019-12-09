/*
Assignment:
Write three functions with the following Big O:
    Constant time:   O(1)
    Linear time:   O(n)
    Polynomial time:   O(n^k)

Make up your own data to write these
*/

//TODO: Write a constant time function
// Constant time function:  O(1)
function constExample(m) {
    return m * m;
};

constExample(10);


//TODO: Write a linear time function
// Linear time function: O(n)
function linearExample(a) {
    for (let i = 0; i < a; i++) {
        console.log(i);
    }
};

linearExample(10);


//TODO: Write a Polynomial function
// Polynomial *(Quadratic)* time function: O(n^k) *(O(n^2))*
const boxArray = items => {
    let box = [];
    for (let initial = 0, total = items.length; initial < total; initial++) {
        box[initial] = [];
        for (let dupe = 0, total = items.length; dupe < total; dupe++)
            box[initial].push(items[dupe]);
    }
    return box;
};

boxArray(['1', '2', '3', '4', '5']);