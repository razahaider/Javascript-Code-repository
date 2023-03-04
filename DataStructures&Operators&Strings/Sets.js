/*
map - set
set - has, add, delete, clear, <<unique but not ordered
  arrays, - 
  */

const restaurantCrew = {
    Waiters: ['BookerT', 'Scotty', 'James', 'Robert', 'Eugene'],
    Managers: ['Chris Hemsworth', 'Christian Bale', 'Dwayne Johnson', 'John Cena'],
    Chefs: ['Elon Musk', 'Mark Zuckerberg', 'Adani', 'Bill Gates', 'Steve Jobs', 'Harry', 'Grover'],
    Owners: ['Dhoni', 'Kohli', 'Jadeja', 'Dravid'],
    Team1: ['Waiter', 'Waiter', 'Owner', 'Chef', 'Chef', 'Chef', 'Manager'],
    Team2: ['Waiter', 'Owner', 'Chef', 'Chef', 'Manager']
}
const restaurantPositionsForJob = new Set(Object.keys(restaurantCrew))
console.log('Open positions for job in Restaurant are: ===', restaurantPositionsForJob);

console.log('List of All Roles in team1========', Object.values(restaurantCrew.Team1));

console.log('List of Unique Roles in team1========', new Set(Object.values(restaurantCrew.Team1)));

const UniqueRolesTeam1 = new Set(Object.values(restaurantCrew.Team1))

//UniqueRolesTeam1 = 'a' // won't work becos const cannot be reassigned

UniqueRolesTeam1.add('Director')
UniqueRolesTeam1.add('Director')
UniqueRolesTeam1.add('Director')
console.log('new unique role added to team1=====', UniqueRolesTeam1);


if (UniqueRolesTeam1.has('Director')) {
    UniqueRolesTeam1.delete('Owner')
    console.log('Since Director is present, Owner is not required in Team1======', UniqueRolesTeam1);
}