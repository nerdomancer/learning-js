function setup () {
    var canvasWidth;
    var canvasHeight;
    canvasWidth = canvasHeight = 400;
    var midPointX = canvasWidth / 2;
    var midPointY = canvasHeight / 2;
    var numberOfPoints = 100;
    var qtreeWidth = canvasWidth / 2;
    var qtreeHeight = canvasHeight / 2;
    var qtreeCapacity = 4;

    createCanvas(canvasWidth, canvasHeight);

    let boundary = new Rectangle(midPointX, midPointY, qtreeWidth, qtreeHeight);
    let qt = new QuadTree(boundary, qtreeCapacity);
    
    for (let i=0; i < numberOfPoints; i++) {
        let p = new Point(random(canvasWidth), random(canvasHeight));
        qt.insert(p);
    }

    clear();
    background(0);
    qt.show();
}
