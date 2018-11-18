

import { calc } from './calc';
import { swiggy } from './swiggy';

test('adds 1 + 2 to equal 3', () => {
    // Arrange
    let n1 = 12;
    let n2 = 13;
    // Act
    let actual = calc.add(n1, n2);  // sync
    // Assert
    expect(actual).toBe(25);
});

test('swiggy should return biryani', (done) => {
    // Arrange
    // Act
    let promise = swiggy.getFood();  // sync
    // Assert
    promise.then((result) => {
        expect(result).toBe("biryani");
        done();
    }, (error) => {
        done(error);
    });
});

