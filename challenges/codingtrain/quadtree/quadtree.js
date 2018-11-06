class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    contains(point) {
        return (
            point.x >= this.x - this.width &&
            point.x <= this.x + this.width &&
            point.y >= this.y - this.height &&
            point.y <= this.y + this.height);
    }
}

class QuadTree {
    constructor(boundary, capacity) {
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }

    getPoints() {
        var allPointsWithin = [];
        if(!this.divided) {
            return allPointsWithin = allPointsWithin.concat(this.points);
        }

        allPointsWithin = allPointsWithin.concat(this.northeast.getPoints());
        allPointsWithin = allPointsWithin.concat(this.northwest.getPoints());
        allPointsWithin = allPointsWithin.concat(this.southeast.getPoints());
        allPointsWithin = allPointsWithin.concat(this.southwest.getPoints());
        
        return allPointsWithin;
    }

    subdivide() {

        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.width;
        let h = this.boundary.height;

        let nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2);
        this.northwest = new QuadTree(nw, this.capacity);
        let ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2);
        this.northeast = new QuadTree(ne, this.capacity);
        let sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2);
        this.southwest = new QuadTree(sw, this.capacity);
        let se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2);
        this.southeast = new QuadTree(se, this.capacity);

        // push points to children
        for (let p of this.points) {
            this.insertIntoChildren(p);
        }

        this.points = [];
        this.divided = true;
    }

    insert(point) {
        if (!this.boundary.contains(point)) {
            return false;
        }

        if (this.divided) {
            return this.insertIntoChildren(point);
        }

        if (this.points.length < this.capacity) {
            this.points.push(point);
        }
        else {
            if (!this.divided) {
                this.subdivide();
                return this.insert(point);
            }
        }
    }

    insertIntoChildren(point) {
        if (this.northwest.insert(point)) {
            return true;
        } else if (this.northeast.insert(point)) {
            return true;
        } else if (this.southwest.insert(point)) {
            return true;
        } else if (this.southeast.insert(point)) {
            return true;
        }
        return false;
    }

    show() {
        stroke(255);
        noFill();
        rectMode(CENTER);
        rect(this.boundary.x, this.boundary.y, this.boundary.width * 2, this.boundary.height * 2);

        if (this.divided) {
            this.northwest.show();
            this.northeast.show();
            this.southwest.show();
            this.southeast.show();
        }

        strokeWeight(4);
        
        for (let p of this.points) {
            
            point(p.x, p.y);
            
        }
        strokeWeight(1);
    }
}