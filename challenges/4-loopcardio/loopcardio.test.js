import {
    printNumbersUntil,
    printEvenNumbersUntil,
    printNumbersUntilWithNegative,
    sumOfNumbersUpto,
    fizzBuzz,
} from "./loopcardio";

let getAllLogs = (mockFn) => {
    return mockFn.mock.calls.map((mockCall) => String(mockCall[0]));
};

describe("Loop Cardio", () => {
    describe("printNumbersUntil()", () => {
        let consoleLogMock;
        beforeEach(() => {
            consoleLogMock = jest.fn();
            global.console = {log: consoleLogMock};
        });

        it("prints numbers until 5", () => {
            printNumbersUntil(5);
            let allLogs = getAllLogs(consoleLogMock);
            expect(allLogs).toHaveLength(5);
            expect(allLogs).toEqual(["1", "2", "3", "4", "5"]);
        });

        it("prints until 1", () => {
            printNumbersUntil(1);
            let allLogs = getAllLogs(consoleLogMock);
            expect(allLogs).toHaveLength(1);
            expect(allLogs).toEqual(["1"]);
        });
    });
});
