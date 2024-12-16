```javascript
// Correct usage of $inc operator. Ensure the field is a number.
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } });

//Alternative solution: If the field can be a string, convert it to a number before incrementing
db.collection('myCollection').findOneAndUpdate(
  { _id: 1 },
  { $inc: { field: 1 } },
  { upsert: true, returnOriginal: false }
).then(result => {
  console.log(result.value);
});
```