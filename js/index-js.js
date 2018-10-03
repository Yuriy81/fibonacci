

const num=parseInt(prompt('Enter a number of Fibonacci'))
alert('Loop method: ' + fibLoop(num));
alert('Array method: ' + fibArray(num));
alert('With recursion method: ' + fibRecursion(num));

function fibLoop (num) {
    const first = 0;
    const second = 1;
    const next = 1;
    
   
    for (let i=3; i<=num; i++) {
        
        next = first + second;
        first = second;
        second = next;
    }
    return next;
}


function fibArray(num) {

	let sequence = [1, 1];

	for (let i = 3; i < num; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}

	return sequence[num-1];
}

function fibRecursion(num) {

	if (num <= 2)
		return 1;
		else
   return fibRecursion(num - 1) + fibRecursion(num - 2);
}


