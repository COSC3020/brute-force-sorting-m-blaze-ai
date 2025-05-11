# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity of this implementation is $\Theta$(n*n!) because there are n! permutations for a list of length n.

next permutation = in $\Theta$(n) time
sorted check = in $\Theta$(n) time
Overall complexity = $\Theta$(n*n!)

Best Case input is that the array is already sorted. This would mean that each check for if it's sorted would return with the minimum one check.

Worst Case input is that the array is in reverse order from what it needs to be sorted into. This would result in every single permutation being generated before hitting the one that is sorted.

If Random permutations are generated without memory, the same permutation may be repeated multiple times. The expected number of attempts would be n!, but since there can be duplicates, the expected time becomes $\Theta$(n!*n).

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

For this assignment, I consulted with Chat GPT on the clarity and specifity of my writing. I also received help from Chat GPT regarding a recurring issue I was having with the eslint check failing.