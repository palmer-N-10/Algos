const merge = (left, right) => {
const res = [];
while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
}
while (left.length){
    res.push(left.shift());
};
while (right.length){
    res.push(right.shift());
};
return res;
};