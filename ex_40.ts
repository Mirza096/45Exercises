/*
40. Album:
Write a function called make_album() that builds an Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/

function make_album(artist:string, album:string){
    return {artist, album}
};
// make three dictionaries representing different albums. 

let album1 = make_album("Amir Ali" , "Top Hits" );
let album2 = make_album("Farhan Shah" , "Classics" );
let album3 = make_album("Sherin" , "Continental" );

console.log(album1);
console.log(album2);
console.log(album3);

// Adding an optional parameter No. of tracks

function make_album2(artist:string, album:string, numberOfTracks?: number){
    return {artist, album, numberOfTracks}
};
// make three dictionaries representing different albums. 

let album4 = make_album2("Amir Ali" , "Top Hits" , 40);
let album5 = make_album2("Farhan Shah" , "Classics" , 50);
let album6 = make_album2("Sherin" , "Continental", 30);

console.log(album4);
console.log(album5);
console.log(album6);

