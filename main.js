function getPrimes(endNum) {
    let range = []
    let primes = [];
    for (let i = 2; i <= endNum; i++) {
        range.push(i);
    }

    while (range.length > 0) {
        let nextPrime = range.shift();
        primes.push(nextPrime);

        range = range.filter(function (num) {
            return num % nextPrime !== 0;
        });

    }
    console.log(primes);
}

getPrimes(120)