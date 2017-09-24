function quickSort(arr) {    
    return (function qs(arr, start, end) {
        var index;
        if(arr.length > 1) {
            index = partiton(arr, start, end);
            if(start < index - 1) {
                qs(arr, start, index - 1);
            }
            if(index < end) {
                qs(arr, index, end);
            }
        }
        return arr;
    })(arr, 0, arr.length - 1);
}


function partiton(arr,left, right) {
	var povit = arr[Math.floor((left + right) / 2)],
		lp = left,
		rp = right,
		temp;
	while(lp <= rp) {
		while(arr[lp] < povit) {
			lp++;
		}
		while(arr[rp] > povit) {
			rp--;
		} 
		if(lp <= rp) {
            swap(arr, lp, rp);
			lp++;
			rp--;
		}
	}
	return lp;
}

function swap(arr, l, r){
    if(l === r) return 
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

console.log(quickSort([5,4,7,6,8,1,2,9,4]))

