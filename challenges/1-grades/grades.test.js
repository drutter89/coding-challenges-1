import letterGrade from './grades';


describe('grades', () => {
    it.each([0, 25, 50, 59])('returns an F for %i', (num) => {
        expect(letterGrade(num)).toEqual('F');
    });

    it.each([60, 69, 65, 62])('returns an D for %i', (num) => {
        expect(letterGrade(num)).toEqual('D');
    });

    it.each([70, 75, 71, 79])('returns an C for %i', (num) => {
        expect(letterGrade(num)).toEqual('C');
    });

    it.each([80, 85, 81, 89])('returns an B for %i', (num) => {
        expect(letterGrade(num)).toEqual('B');
    });

    it.each([90, 93, 97, 99, 100])('returns an A for %i', (num) => {
        expect(letterGrade(num)).toEqual('A');
    });

    it.each([-1, -5, 101, 999])('returns null for %i', (num) => {
        expect(letterGrade(num)).toBeNull();
    });
})