function permutationSort(a) {
    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++){
            if (arr[i - 1] > arr[i])
                return false;
        }
        return true;
    }
    
    function nextPermutation(arr) {
        let i = arr.length - 2;
        while (i >= 0 && arr [i] >= arr[i + 1])
            i--;

        if (i < 0)
            return false;

        let j = arr.length - 1;
        while (arr[j] <= arr[i]) 
            j--;

        [arr[i], arr[j]] = [arr[j], arr[i]];

        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        
        return true;
    }
    
    a.sort((x, y) => x - y);
    let count = 1;
        
    if (isSorted(a))
        return count;

    while (nextPermutation(a)) {
        count++;
        if (isSorted(a))
            return count;
    }

    return count;
} 
