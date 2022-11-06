import { getRectangleArea, getRectangleInfo, getRectanglePerimeter } from "../js/rectangle";

test('should properly output rectangle area', () => {
    const area = getRectangleArea(2, 2);
    expect(area).toBe(4);
});

test('should properly output rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(2, 2);
    expect(perimeter).toBe(8);
});

test('should properly output rectangle info', () => {
    const info = getRectangleInfo(2,2);
    expect(info).toBe(console.log(`The perimeter of a rectangle is 8 and the area is 4`));
});


