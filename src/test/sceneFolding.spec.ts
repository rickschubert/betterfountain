import { getSceneFoldingRanges } from "../utils";
import * as fs from "fs"
import * as path from "path"

describe("Scene Folding", () => {
    let foldingRanges
    beforeAll(() => {
        const script = fs.readFileSync(path.join(__dirname, "./bigFish.fountain"), "utf-8")
        foldingRanges = getSceneFoldingRanges(script)
    })

    it("I can retrieve a list of folding ranges", () => {
        expect(foldingRanges).toBe(2)
    })
})
