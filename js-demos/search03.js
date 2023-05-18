function isPrime(x) {
  if (x < 2) return false;

  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }

  return true;
} //test file

function findPrimes(min, max, fn) {
  var result = [];
  for (let i = min; i < max; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  fn(result);
}

setTimeout(() => {
  findPrimes(2, 1000, (result) =>
    console.log(`Total Primes from 2 to 1000 iss ${result.length}`)
  );
}, 1000);

setTimeout(() => {
  findPrimes(1001, 2000, (result) =>
    console.log(`Total Primes from 1001 to 2000 iss ${result.length}`)
  );
}, 500);

setTimeout(() => {
  findPrimes(2001, 3000, (result) =>
    console.log(`Total Primes from 2001 to 3000 iss ${result.length}`)
  );
}, 700);
