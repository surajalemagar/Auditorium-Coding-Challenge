# Auditorium-Coding-Challenge
Problem Statement
Imagine you're a daredevil walking a tightrope between two buildings. Your goal is to find the two buildings that allow you to traverse the largest possible area of air.

You are given an array of integers, height[], where:

Each element represents the height of a vertical building.
To maximize the enclosed area, you must find two buildings that form a container (with the x-axis).

Constraints:
2 ≤ n ≤ 105 (Number of buildings)
0 ≤ height[i] ≤ 104 (Building height)

Solution
To solve this problem, we need to find the two buildings that form the largest possible container (area) between them. Here’s how we can approach it step by step:

# Key Concepts:
Width: The distance between two buildings. If we compare buildings at positions left and right, the width is simply right - left.

Height: The height of the shorter building between left and right. It’s calculated as min(height[left], height[right]).

Area: The area between two buildings is the product of the width and height:

Area=Width×Height


# Approach in Simple Steps:
Compare Every Pair of Buildings:

We need to check every possible pair of buildings to find the one that gives us the maximum area.
For each pair, calculate the width (distance between them) and the height (the smaller of the two buildings' heights).
Multiply width and height to get the area.
Track the Maximum Area:

As we calculate the area for each pair, we will compare it with the largest area found so far.
We keep updating the maximum area whenever we find a larger area.
Return the Maximum Area:

After checking all pairs, return the maximum area we found.
