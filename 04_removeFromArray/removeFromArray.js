const removeFromArray = function(array, ...remove) {
    for(let i=0; i<remove.length; i++)
    {
        let index = check(array, remove[i]);
        if(index>-1)
        {
            array.splice(index,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

//check if element is in array and return index
function check(arr, n)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]===n)
        {
            return i;
        }
    }
    return -1;
}
