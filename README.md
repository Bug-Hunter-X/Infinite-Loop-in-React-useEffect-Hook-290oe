# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by improperly managing dependencies.  The `bug.js` file shows the buggy code. The `bugSolution.js` provides a corrected version.

**Bug:** The `useEffect` hook's dependency array is empty (`[]`), causing the effect to run after every render, leading to an infinite loop as the state is updated within the effect itself.

**Solution:** The solution includes adding `count` to the dependency array, ensuring the effect only runs when the `count` value changes.