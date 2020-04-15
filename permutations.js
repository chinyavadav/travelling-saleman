/**
 * 1. add nodes and save to localstore
 * 2. compute distance and duration between created node and existing nodes
 * 1. Permute array keys
 * 2. Find Distance Between Nodes as they are entered
 * 3. Sum all permutations and sort routes by shortest distance
 * 4. Display User selected routes
 */

function getArrayMutations(arr, perms = [], len = arr.length) {
    if (len === 1) perms.push(arr.slice(0))

    for (let i = 0; i < len; i++) {
        getArrayMutations(arr, perms, len - 1)

        len % 2 // parity dependent adjacent elements swap
            ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
            : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
    }

    return perms
}

let perms = getArrayMutations(['A', 'B', 'C']);
console.log(perms);