import {
    lastElement,
    getElementAt,
    median,
    exists,
    findIndex,
    getLetterGrades,
    swap,
    copy,
    insertIntoNewArray,
} from "./arraycardio";

describe("5-arraycardio", () => {
    describe("#lastElement", () => {
        it("gets last element for [1,2,4]", () => {
            expect(lastElement([1, 2, 4])).toEqual(4);
        });

        it("gets last element for [false]", () => {
            expect(lastElement([false])).toEqual(false);
        });

        it.each([[], null, 0, undefined])(
            "returns null for invalid arg %s",
            (input) => {
                expect(lastElement(input)).toEqual(null);
            }
        );
    });

    describe("#getElementAt", () => {
        let testArray = [1, 5, 3];

        it("gets 0+ indexes", () => {
            expect(getElementAt(testArray, 2)).toEqual(3);
            expect(getElementAt(testArray, 0)).toEqual(1);
        });

        it("gets negative indexes", () => {
            expect(getElementAt(testArray, -1)).toEqual(3);
            expect(getElementAt(testArray, -2)).toEqual(5);
            expect(getElementAt(testArray, -3)).toEqual(1);
        });

        it("returns undefined for out of bounds 0+ accesses", () => {
            expect(getElementAt(testArray, 3)).toEqual(undefined);
            expect(getElementAt(testArray, 4)).toEqual(undefined);
        });

        it("returns undefined for out of bounds <0 accesses", () => {
            expect(getElementAt(testArray, -4)).toEqual(undefined);
            expect(getElementAt(testArray, -5)).toEqual(undefined);
        });
    });

    describe("#median", () => {
        let sampleOddArray = [5, 9, 10, 44, 99];
        let sampleEvenArray = [4, 6, 8, 10];

        it("returns null for 0 length array", () => {
            expect(median([])).toEqual(null);
        });

        it("returns the median for 1 length array", () => {
            expect(median([3])).toEqual(3);
        });

        it("returns the median for odd length array", () => {
            expect(median(sampleOddArray)).toEqual(10);
        });

        it("returns the median for even length array", () => {
            expect(median(sampleEvenArray)).toEqual(7);
        });
    });

    describe("#swap", () => {
        it("swaps", () => {
            let arr = [1, 2, 3];
            swap(arr, 0, 1);
            expect(arr).toEqual([2, 1, 3]);
        });
    });

    describe("#insertIntoNewArray", () => {
        it("inserts", () => {
            let newArr = insertIntoNewArray([1, 2], 1, 9);
            expect(newArr).toEqual([1, 9, 2]);
        });
    });
});
