import {expect, test} from "vitest";

test("this one will fail to test catch on ci", () => {
    expect(5).toBe(6); // This will fail
})