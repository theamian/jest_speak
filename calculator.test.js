const mathOperations = require("./calculator")

/*describe("Calculator tests", () => {
    test("adding 1 + 2 should return 3", () => {
        expect(mathOperations.sum(1,2)).toBe(3);
    });

    test("subtracting 2 from 10 should return 8", () => {
        expect(mathOperations.diff(10,2)).toBe(8);
    });

    test("multiplying 2 and 8 should return 16", () => {
        expect(mathOperations.product(2,8)).toBe(16);
    });
})*/

describe("Calculator tests", () => {
    let input1 = 0;
    let input2 = 0;

    beforeAll(() => {
        console.log("beforeAll called");
    });

    afterAll(() => {
        console.log("afterAll called");
    });

    beforeEach(() => {
        console.log("beforeEach called");
        input1 = 1;
        input2 = 2;
    });

    afterEach(() => {
        console.log("afterEach called");
    });

    test("adding 1 + 2 should return 3", () => {
        expect(mathOperations.sum(input1, input2)).toBe(3);
    });
})