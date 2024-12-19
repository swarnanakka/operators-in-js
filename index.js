function checkVotingEligibility(age) {
    // Relational operator >=
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

// Example
checkVotingEligibility(20); // Output: You are eligible to vote.

function checkMarriageEligibility(gender, age) {
    // Logical operators && and if-else conditions
    if (gender === "male" && age >= 21) {
        console.log("You are eligible for marriage.");
    } else if (gender === "female" && age >= 18) {
        console.log("You are eligible for marriage.");
    } else {
        console.log("You are not eligible for marriage.");
    }
}

// Example
checkMarriageEligibility("male", 22); // Output: You are eligible for marriage.
checkMarriageEligibility("female", 17); // Output: You are not eligible for marriage.


function checkDrivingLicenseEligibility(age) {
    // Relational operator >=
    if (age >= 18) {
        console.log("You are eligible to apply for a driving license.");
    } else {
        console.log("You are not eligible to apply for a driving license.");
    }
}

// Example
checkDrivingLicenseEligibility(17); // Output: You are not eligible to apply for a driving license.


function checkExamEligibility(attendancePercentage) {
    // Relational operator >=
    if (attendancePercentage >= 75) {
        console.log("You are eligible to appear for the exam.");
    } else {
        console.log("You are not eligible to appear for the exam.");
    }
}

// Example
checkExamEligibility(80); // Output: You are eligible to appear for the exam.
checkExamEligibility(70); // Output: You are not eligible to appear for the exam.
function checkSeniorCitizenDiscountEligibility(age) {
    // Relational operator >=
    if (age >= 60) {
        console.log("You qualify for the senior citizen discount.");
    } else {
        console.log("You do not qualify for the senior citizen discount.");
    }
}

// Example
checkSeniorCitizenDiscountEligibility(65); // Output: You qualify for the senior citizen discount.
