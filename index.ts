function maxArea(height: number[]): number {
    let n = height.length;  // Get the length of the array
    let maxArea = 0;  // Initialize the variable to track the maximum area
    let possibleAreas = [];  // Array to store all possible areas

    for (let left = 0; left < n; left++) {
        for (let right = left + 1; right < n; right++) {
            let width = right - left;  // Calculate the width between two lines
            let currentHeight = Math.min(height[left], height[right]);  // The height is the smaller of the two lines
            let area = width * currentHeight;  // Calculate the area

            possibleAreas.push({ left, right, area });  // Store the area for reference
            maxArea = Math.max(maxArea, area);  // Update the maxArea if the current area is larger
        }
    }

    // Print all possible areas for debugging purposes
    console.log("All possible areas:");
    possibleAreas.forEach(({ left, right, area }) => {
        let currentHeight = Math.min(height[left], height[right]);
        console.log(`Indices (${left}, ${right}) => Width: ${right - left}, Height: ${currentHeight} (min(${height[left]}, ${height[right]})), Area: ${area}`);
    });

    console.log(`\nMaximum area found: ${maxArea}`);
    
    return maxArea;  // Return the maximum area
}

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(heights);
