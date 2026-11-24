function showMyMessage() {

    // Number (Primitive)
    let age = 20;
    console.log("Number:", age);

    // String (Primitive)
    let name = "Lakshmana";
    console.log("String:", name);
    console.log("Type of name:", typeof name);

    // Null
    let nullValue = null;
    console.log("Null:", nullValue);
    console.log("Type of null:", typeof nullValue);

    // Boolean using condition
    let isValid = null;
    let AGE = 20;

    if (AGE >= 18) {
        isValid = true;
    }

    console.log("Is Valid:", isValid);

    // Undefined
    let undefinedValue;
    console.log("Undefined:", undefinedValue);
    console.log("Type of undefined:", typeof undefinedValue);

    // Boolean (Primitive)
    let isStudent = true;
    console.log("Boolean:", isStudent);
    console.log("Type of Boolean:", typeof isStudent);

    // BigInt (Primitive)
    let bigIntValue = 1234567890123456789012345678901234567890n;
    console.log("BigInt:", bigIntValue);
    console.log("Type of BigInt:", typeof bigIntValue);

    // Object (Non-Primitive)
    let student = {
        name: "Lakshmana",
        age: 20,
        course: "AI/ML",
        address: {
            city: "Coimbatore",
            state: "Tamil Nadu"
        }
    };

    console.log("Object:", student);
    console.log("Student Name:", student.name);
    console.log("Student Age:", student.age);
    console.log("Student Course:", student.course);
    console.log("Student City:", student.address.city);
    console.log("Student State:", student.address.state);

    // Array (Non-Primitive)
    let colors = ["Red", "Green", "Blue"];
    console.log("Colors Array:", colors);

    const numbers = [1, 2, 3, 4, 5];
    console.log("Numbers Array:", numbers);

    console.log("First Color:", colors[0]);
    console.log("Second Color:", colors[1]);
    console.log("Third Color:", colors[2]);

    // Array Methods

    // push - add at end
    numbers.push(6);
    console.log("After push:", numbers);

    // unshift - add at beginning
    numbers.unshift(0);
    console.log("After unshift:", numbers);

    // pop - remove last element
    numbers.pop();
    console.log("After pop:", numbers);

    // shift - remove first element
    numbers.shift();
    console.log("After shift:", numbers);

    // indexOf - find index of element
    console.log("Index of 3:", numbers.indexOf(3));

    // splice - remove 1 element from index 2
    numbers.splice(2, 1);
    console.log("After splice:", numbers);

    // slice - copy part of array
    let slicedNumbers = numbers.slice(1, 3);
    console.log("Sliced Array:", slicedNumbers);
    console.log("Original Array After Slice:", numbers);

    // Loop through array
    for (let i = 0; i < numbers.length; i++) {
        console.log("Number at index", i, ":", numbers[i]);
    }

    // Function with parameter
    function greet(name) {
        return `Hello ${name}`;
    }

    console.log("Function Output:", greet("Lakshmana"));
}

// Function Call
showMyMessage();