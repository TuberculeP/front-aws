import {expect, test} from "vitest";
import {superFunction} from "../utils";

test("superFunction adds two numbers", () => {
    const result = superFunction(2, 3);
    expect(result).toBe(5);
});