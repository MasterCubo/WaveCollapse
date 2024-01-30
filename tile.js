class Tile {
    constructor(img,edges) {
        this.img = img;
        //edges
        this.edges = edges;
        // valid neighbors
        this.up = [];
        this.right = [];
        this.down = [];
        this.left = [];
    }
    analyze(tiles) {
        for (let i = 0; i < tiles.length; i++) {
            let tile = tiles[i];
            // up 
            if (tile.edges[2] == this.edges[0]) {
                this.up.push(i);
            }
            // right
            if (tile.edges[3] == this.edges[1]) {
                this.right.push(i);
            }
            // down
            if (tile.edges[0] == this.edges[2]) {
                this.down.push(i);
            }
            // left
            if (tile.edges[1] == this.edges[3]) {
                this.left.push(i);
            }
        }
    }
}