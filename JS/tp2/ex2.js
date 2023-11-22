
// List of notes ( not normally between 0-20 but just for example's sake))
const notes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

// For loop from 0 to 20, gives comment for each note depending on scoring
for (let i = 0; i <= 20; i++) { 
  if (i >= 0 && i <= 4) {
    console.log(`Note ${i} : What in God's name you smoking ?`);
  } else if (i >= 5 && i <= 10) {
    console.log(`Note ${i} : Horsesh*t`);
  } else if (i >= 11 && i <= 14) {
    console.log(`Note ${i} : My grandma can do better then that`);
  } else if (i >= 15 && i <= 17) {
    console.log(`Note ${i} : I mean it's alright`);
  } else if (i >= 18 && i <= 20) {
    console.log(`Note ${i} : WOOOOOWEEE, God damn boy, excuse my language`);
  } else {
    console.log(`Note ${i} You so stupid, there ain't even a note for you`);
  }
}
