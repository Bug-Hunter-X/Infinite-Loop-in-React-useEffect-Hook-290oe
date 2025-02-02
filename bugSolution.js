```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Adding count to dependency array prevents infinite loop
    //The effect now only runs when count changes 
    console.log("Effect runs only when count changes");
  }, [count]);

  return <div>Count: {count}</div>;
}```