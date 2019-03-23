React component example:

```jsx
<Button onClick={({target}) => alert(JSON.stringify(target,null,2))}>Push Me</Button>
<Button onClick={({target}) => alert(JSON.stringify(target,null,2))} color={'blue'}>Push Me</Button>
```