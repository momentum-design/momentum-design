# Error handling in Components

In the Momentum Design System Component Library, it is essential to make sure to do error handling in a sensitive approach.

## Implementation

**Don't:**

Throw an error directly:

```javascript
.catch((err) => {
    throw err;
});
```

Log an error:

```javascript
.catch((err) => {
    console.warn('Error: ' + err)
});
```

**Do:**

Fire onError method on component:

```javascript
.catch((err) => {
    this.onError(err);
});
```

## Conclusion

Firing the passed in `onError` method on the component instead of throwing an error (or logging) will help to not accidentially breaking the app completely in certain error cases. It will also give the consumer flexibility on what to do with the error and will make sure the app of a consumer will still work.
