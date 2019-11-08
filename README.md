##### According to the test task i created this weather forecast app.
##### Here's a description for it:
1. Developing tools (vsc, OpenWeather.com, react, redux,  lodash, chart.js, bootstrap for react.js)

2. The architecture of the project ( create, delete. update).
##### Create carts consists of the next steps:
1. Registration in OpenWeather.com api and gain a key
2. Using it in action creator to get a set of data. All functions use in the project i put in Utils.
3. A received response i get through the function-transformer to get a necessary set of data. In case i got an error i initiate to sent an action creater to the reducer with the error. After this error with the help of function connet get recevied by the ErrorIndicator component and reders in the componet CardList
4. After getting a transformed data i save it in the localStorage and shortly afterward sent an ac to the reduce CityList
5. These cards reder in the CardList component
 
##### To make a deleting card as easy as possible i decided to make a 'city' property in global state. I've made it as an object with the help of lodash:
```
export const deleteCite = (prevstate, city) => {
  return _.omit(prevstate, city);
}) i delete a needed object.
```
##### The most interesting part is updating data
I could not figure out anything better as the expressions in the CardList component action creator:
```
export const fetchInitialDataFormLS = (data) => () => (dispatch) =>{
    if(data !== null && Object.entries(data).length !== 0 ) {
        dispatch(fetchCityRequest())
        data.map(item => dispatch(fetchCitySuccess(item)))
    }else{
        const cards = JSON.parse(localStorage.getItem('cards'));
        dispatch(fetchCityInit(cards));

    } 
}
```
*fetchInitialDataFormLS* - is the hof that firstly receives data from the ls and then I check if this da is not null or empty object. I loop through the array and each item I dispatch to the reducer to make in the store the same as from ls 

This *fetchInitialDataFormLS* we dispatch with the help of bind action creators in mapDispatchToProps and initialize after component CardList has been mounted.

To update selected card i use the following schema:
- I fetch new city's object from the api
- get objects from the ls
- transform data to the arr
- find the index of the needed card in ls thanks to findIndex
- find the arr 
- replace one to another:
```
const newUpdatedArr = [
  ...transformDataFormLs.slice(0, inx),
  transData, 
  ...transformDataFormLs.slice(inx+1)
]

convert data back to the needed forma return  {
  ..._.mapKeys(newUpdatedArr, 'city')
}
```
save in ls and dispatch an acton 