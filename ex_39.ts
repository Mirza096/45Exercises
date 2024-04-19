/*
39. City Names:
Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.
*/

function city_country(city:string, country:string){
    // return `"${city} , ${country}"`
    console.log(`"${city}, ${country}"`)
};

city_country("Islamabad", "Pakistan")
city_country("London", "UK")
city_country("Toronto", "Canada")
city_country("New York", "USA")

// console.log(city_country("Karachi", "Pakistan"));
// console.log(city_country("Paris", "France"));
// console.log(city_country("Tokio", "Japan"));
// console.log(city_country("Bejing", "China"));