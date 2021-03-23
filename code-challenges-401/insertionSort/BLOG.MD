# Insertion Sort 
Insertion Sort is a function that sorts through an array and takes the values of the array and returns the values from lowest to highest.

## Pseudocode
![Insertion Sort Pseudo](./assets/insertion-sort-pseudo.png)

## Step Through Process
- Sample Array [8,4,23,42,16,15]

- Step 1 - On the first iteration of the array, i = 1, j = 0, and arr[i] = 4. The variables all have values and enter into the While loop. At the conclusion of the loop, the loop will evaluate as true and arr[i] will now have the value of 8. The loop will then be broken at j = j -1 and arr[j + 1] will equal the nex value of the array resulting in [4,8,23,42,16,15].

- Step 2 - On the second iteration of the array, i = 2, j = 1, and arr[i] = 23. The variables all have values and enter into the While loop. At the conclusion of the loop, the loop will evaluate as false. Nothing will change in the array order. [4,8,23,42,16,15].

- Step 3 - On the third iteration of the array, i = 3, j = 2, and arr[i] = 42. The variables all have values and enter into the While loop. At the conclusion of the loop, the loop will evaluate as false. Nothing will change in the array order. [4,8,23,42,16,15].

- Step 4 - On the fourth iteration of the array, i = 4, j = 3, and arr[i] = 16. The variables all have values and enter into the While loop. At the conclusion of the loop, the loop will evaluate as true and arr[i] will now have the value of 42. The array will continue to loop until the end. The loop will then be broken at j = j -1 and arr[j + 1] will equal the next value of the array ultimately resulting in [4,8,16,23,42,15].

- Step 5 - On the fourth iteration of the array, i = 5, j = 4, and arr[i] = 15. The variables all have values and enter into the While loop. At the conclusion of the loop, the loop will evaluate as true and arr[i] will now have the value of 42. The array will continue to loop until the end. The loop will then be broken at j = j -1 and arr[j + 1] will equal the next value of the array ultimately resulting in [4,8,15,16,23,42].

## Visual 
![Insertion Sort](./assets/insertion-sort.png)