for (let i = 1; i <= 10; i++) {
    console.log(i)
};

for (let i = 10; i > 0; i-=1) {
    console.log(i)
};

let i = 1
while (i <= 10) {
    console.log(i++)
};
while (i >= 10) {
    console.log(i-=1)
};

do {
  i = i + 1;
  count = count + i;
} while (i < 10);

do {
    i = i - 1;
    count = count - 1;
} while (i > 10);

console.log(count);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    console.log(number);
}