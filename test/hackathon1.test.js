const { parseBreadthFirst } = require("../src/hackathon1");

describe("Hackathon 1", () => {
  describe("Question 4", () => {
    it("constructs the node array correctly", () => {
        const input = `
- My folder 
  - Photos
    - Wallpaper 
      - Landscape 
      - Anime
      - Game
    - Thumbnail
  - Docs
  - Videos
    - Movies
    - Documentary
`;
        const expected = [
            { id: 1, name: 'My folder', parent_id: null },
            { id: 2, name: 'Photos', parent_id: 1 },
            { id: 3, name: 'Docs', parent_id: 1 },
            { id: 4, name: 'Videos', parent_id: 1 },
            { id: 5, name: 'Wallpaper', parent_id: 2 },
            { id: 6, name: 'Thumbnail', parent_id: 2 },
            { id: 7, name: 'Movies', parent_id: 4 },
            { id: 8, name: 'Documentary', parent_id: 4 },
            { id: 9, name: 'Landscape', parent_id: 5 },
            { id: 10, name: 'Anime', parent_id: 5 },
            { id: 11, name: 'Game', parent_id: 5 }
      ];
      expect(parseBreadthFirst(input)).toEqual(expected);
    });
  });
});