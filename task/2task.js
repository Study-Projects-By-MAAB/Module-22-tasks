// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names) {
    let small = names[0]
    for (const name of names) {
        if (small.length > name.length) {
            small = name;
        }
    }
    return small
}

const names = smallestName(heights2)
console.log(names);