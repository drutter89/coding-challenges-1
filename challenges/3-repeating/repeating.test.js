import repeating from "./repeating";

describe("repeating", () => {
    let consoleLogMock;
    beforeEach(() => {
        consoleLogMock = jest.fn();
        global.console = {log: consoleLogMock};
    });

    it("doesn't repeat if times=0", () => {
        repeating("yes!", 0);
        expect(consoleLogMock).not.toHaveBeenCalled();
    });

    it("writes one line", () => {
        repeating("yes!", 1);
        expect(consoleLogMock).toHaveBeenCalledTimes(1);
        expect(consoleLogMock.mock.calls[0][0]).toEqual("yes!");
    });

    it("writes multiple lines", () => {
        repeating("yes!", 5);
        expect(consoleLogMock).toHaveBeenCalledTimes(5);
        consoleLogMock.mock.calls[0].forEach((msg) => {
            expect(msg).toEqual("yes!");
        });
    });
});
