import hello from "./hello";

describe("hello world", () => {
    let consoleLogMock;
    beforeEach(() => {
        consoleLogMock = jest.fn();
        global.console = {log: consoleLogMock};
    });

    it("writes correctly", () => {
        hello();
        expect(consoleLogMock).toHaveBeenCalledWith("hello world");
    });
});
