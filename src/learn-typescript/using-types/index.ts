let score: number;
score = 10;

function add(a: number, b?: number): number
{
	return a + (b ?? 0);
}

add(3)

let dateOfBirth = new Date(1990, 4, 7);

const firstName = "Rashed";

let surname = firstName;

const first = 'Bob';
const last = 'Smith';
const fullName = `${first} ${last}`;


function addTen(a = 1) {
  return a + 10;
}
const fourteen = addTen(4);
