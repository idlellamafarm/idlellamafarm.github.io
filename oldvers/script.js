var llamas = 1;
var food = 2;
var coins = 0;
var farms = 0;
var llamalevel = 1;
var factories = 0;
var aks = 0;
var upgradecost;
var max = "";
var logs = ["This is mostly for debugging."];

var types = ["is below average really. Can't even spit that far.", "is your average llama.", "thinks he's pretty cool. Acts as though he is surgically attached to sunglasses.", "is a llama preacher. If you don't spit at humans you shall burn in hell.", "is a llama mayor, might try to bribe the other llamas..... of course if he gave you a few quid you wouldn't tell anyone.", "is the pinnacle of llama sophistication. Lives in a fricking mansion.", "is a llama marine. He spits acid...", "is a llama wizard. He will turn you into an alpaca if you're not careful.", "is a llama messiah, he rules all the rest.", "is Literally The Pinnacle Of Llama Evolution", "is a god. Don't do heresy."]

var names = ["Liam", "Noah", "William", "James", "Logan", "Benjamin", "Mason", "Elijah", "Oliver", "Jacob", "Lucas", "Michael", "Alexander", "Ethan", "Daniel", "Matthew", "Aiden", "Henry", "Joseph", "Jackson", "Samuel", "Sebastian", "David", "Carter", "Wyatt", "Jayden", "John", "Owen", "Dylan", "Luke", "Gabriel", "Anthony", "Isaac", "Grayson", "Jack", "Julian", "Levi", "Christopher", "Joshua", "Andrew", "Lincoln", "Mateo", "Ryan", "Jaxon", "Nathan", "Aaron", "Isaiah", "Thomas", "Charles", "Caleb", "Josiah", "Christian", "Hunter", "Eli", "Jonathan", "Connor", "Landon", "Adrian", "Asher", "Cameron", "Leo", "Theodore", "Jeremiah", "Hudson", "Robert", "Easton", "Nolan", "Nicholas", "Ezra", "Colton", "Angel", "Brayden", "Jordan", "Dominic", "Austin", "Ian", "Adam", "Elias", "Jaxson", "Greyson", "Jose", "Ezekiel", "Carson", "Evan", "Maverick", "Bryson", "Jace", "Cooper", "Xavier", "Parker", "Roman", "Jason", "Santiago", "Chase", "Sawyer", "Gavin", "Leonardo", "Kayden", "Ayden", "Jameson", "Kevin", "Bentley", "Zachary", "Everett", "Axel", "Tyler", "Micah", "Vincent", "Weston", "Miles", "Wesley", "Nathaniel", "Harrison", "Brandon", "Cole", "Declan", "Luis", "Braxton", "Damian", "Silas", "Tristan", "Ryder", "Bennett", "George", "Emmett", "Justin", "Kai", "Max", "Diego", "Luca", "Ryker", "Carlos", "Maxwell", "Kingston", "Ivan", "Maddox", "Juan", "Ashton", "Jayce", "Rowan", "Kaiden", "Giovanni", "Eric", "Jesus", "Calvin", "Abel", "King", "Camden", "Amir", "Blake", "Alex", "Brody", "Malachi", "Emmanuel", "Jonah", "Beau", "Jude", "Antonio", "Alan", "Elliott", "Elliot", "Waylon", "Xander", "Timothy", "Victor", "Bryce", "Finn", "Brantley", "Edward", "Abraham", "Patrick", "Grant", "Karter", "Hayden", "Richard", "Miguel", "Joel", "Gael", "Tucker", "Rhett", "Avery", "Steven", "Graham", "Kaleb", "Jasper", "Jesse", "Matteo", "Dean", "Zayden", "Preston", "August", "Oscar", "Jeremy", "Alejandro", "Marcus", "Dawson", "Lorenzo", "Messiah", "Zion", "Maximus", "River", "Zane", "Mark", "Brooks", "Nicolas", "Paxton", "Judah", "Emiliano", "Kaden", "Bryan", "Kyle", "Myles", "Peter", "Charlie", "Kyrie", "Thiago", "Brian", "Kenneth", "Andres", "Lukas", "Aidan", "Jax", "Caden", "Milo", "Paul", "Beckett", "Brady", "Colin", "Omar", "Bradley", "Javier", "Knox", "Jaden", "Barrett", "Israel", "Matias", "Jorge", "Zander", "Derek", "Josue", "Cayden", "Holden", "Griffin", "Arthur", "Leon", "Felix", "Remington", "Jake", "Killian", "Clayton", "Sean", "Adriel", "Riley", "Archer", "Legend", "Erick", "Enzo", "Corbin", "Francisco", "Dallas", "Emilio", "Gunner", "Simon", "Andre", "Walter", "Damien", "Chance", "Phoenix", "Colt", "Tanner", "Stephen", "Kameron", "Tobias", "Manuel", "Amari", "Emerson", "Louis", "Cody", "Finley", "Iker", "Martin", "Rafael", "Nash", "Beckham", "Cash", "Karson", "Rylan", "Reid", "Theo", "Ace", "Eduardo", "Spencer", "Raymond", "Maximiliano", "Anderson", "Ronan", "Lane", "Cristian", "Titus", "Travis", "Jett", "Ricardo", "Bodhi", "Gideon", "Jaiden", "Fernando", "Mario", "Conor", "Keegan", "Ali", "Cesar", "Ellis", "Jayceon", "Walker", "Cohen", "Arlo", "Hector", "Dante", "Kyler", "Garrett", "Donovan", "Seth", "Jeffrey", "Tyson", "Jase", "Desmond", "Caiden", "Gage", "Atlas", "Major", "Devin", "Edwin", "Angelo", "Orion", "Conner", "Julius", "Marco", "Jensen", "Daxton", "Peyton", "Zayn", "Collin", "Jaylen", "Dakota", "Prince", "Johnny", "Kayson", "Cruz", "Hendrix", "Atticus", "Troy", "Kane", "Edgar", "Sergio", "Kash", "Marshall", "Johnathan", "Romeo", "Shane", "Warren", "Joaquin", "Wade", "Leonel", "Trevor", "Dominick", "Muhammad", "Erik", "Odin", "Quinn", "Jaxton", "Dalton", "Nehemiah", "Frank", "Grady", "Gregory", "Andy", "Solomon", "Malik", "Rory", "Clark", "Reed", "Harvey", "Zayne", "Jay", "Jared", "Noel", "Shawn", "Fabian", "Ibrahim", "Adonis", "Ismael", "Pedro", "Leland", "Malakai", "Malcolm", "Alexis", "Kason", "Porter", "Sullivan", "Raiden", "Allen", "Ari", "Russell", "Princeton", "Winston", "Kendrick", "Roberto", "Lennox", "Hayes", "Finnegan", "Nasir", "Kade", "Nico", "Emanuel", "Landen", "Moises", "Ruben", "Hugo", "Abram", "Adan", "Khalil", "Zaiden", "Augustus", "Marcos", "Philip", "Phillip", "Cyrus", "Esteban", "Braylen", "Albert", "Bruce", "Kamden", "Lawson", "Jamison", "Sterling", "Damon", "Gunnar", "Kyson", "Luka", "Franklin", "Ezequiel", "Pablo", "Derrick", "Zachariah", "Cade", "Jonas", "Dexter", "Kolton", "Remy", "Hank", "Tate", "Trenton", "Kian", "Drew", "Mohamed", "Dax", "Rocco", "Bowen", "Mathias", "Ronald", "Francis", "Matthias", "Milan", "Maximilian", "Royce", "Skyler", "Corey", "Kasen", "Drake", "Gerardo", "Jayson", "Sage", "Braylon", "Benson", "Moses", "Alijah", "Rhys", "Otto", "Oakley", "Armando", "Jaime", "Nixon", "Saul", "Scott", "Brycen", "Ariel", "Enrique", "Donald", "Chandler", "Asa", "Eden", "Davis", "Keith", "Frederick", "Rowen", "Lawrence", "Leonidas", "Aden", "Julio", "Darius", "Johan", "Deacon", "Cason", "Danny", "Nikolai", "Taylor", "Alec", "Royal", "Armani", "Kieran", "Luciano", "Omari", "Rodrigo", "Arjun", "Ahmed", "Brendan", "Cullen", "Raul", "Raphael", "Ronin", "Brock", "Pierce", "Alonzo", "Casey", "Dillon", "Uriel", "Dustin", "Gianni", "Roland", "Landyn", "Kobe", "Dorian", "Emmitt", "Ryland", "Apollo", "Aarav", "Roy", "Duke", "Quentin", "Sam", "Lewis", "Tony", "Uriah", "Dennis", "Moshe", "Isaias", "Braden", "Quinton", "Cannon", "Ayaan", "Mathew", "Kellan", "Niko", "Edison", "Izaiah", "Jerry", "Gustavo", "Jamari", "Marvin", "Mauricio", "Ahmad", "Mohammad", "Justice", "Trey", "Elian", "Mohammed", "Sincere", "Yusuf", "Arturo", "Callen", "Rayan", "Keaton", "Wilder", "Mekhi", "Memphis", "Cayson", "Conrad", "Kaison", "Kyree", "Soren", "Colby", "Bryant", "Lucian", "Alfredo", "Cassius", "Marcelo", "Nikolas", "Brennan", "Darren", "Jasiah", "Jimmy", "Lionel", "Reece", "Ty", "Chris", "Forrest", "Korbin", "Tatum", "Jalen", "Santino", "Case", "Leonard", "Alvin", "Issac", "Bo", "Quincy", "Mack", "Samson", "Rex", "Alberto", "Callum", "Curtis", "Hezekiah", "Finnley", "Briggs", "Kamari", "Zeke", "Raylan", "Neil", "Titan", "Julien", "Kellen", "Devon", "Kylan", "Roger", "Axton", "Carl", "Douglas", "Larry", "Crosby", "Fletcher", "Makai", "Nelson", "Hamza", "Lance", "Alden", "Gary", "Wilson", "Alessandro", "Ares", "Kashton", "Bruno", "Jakob", "Stetson", "Zain", "Cairo", "Nathanael", "Byron", "Harry", "Harley", "Mitchell", "Maurice", "Orlando", "Kingsley", "Kaysen", "Sylas", "Trent", "Ramon", "Boston", "Lucca", "Noe", "Jagger", "Reyansh", "Vihaan", "Randy", "Thaddeus", "Lennon", "Kannon", "Kohen", "Tristen", "Valentino", "Maxton", "Salvador", "Abdiel", "Langston", "Rohan", "Kristopher", "Yosef", "Rayden", "Lee", "Callan", "Tripp", "Deandre", "Joe", "Morgan", "Dariel", "Colten", "Reese", "Jedidiah", "Ricky", "Bronson", "Terry", "Eddie", "Jefferson", "Lachlan", "Layne", "Clay", "Madden", "Jamir", "Tomas", "Kareem", "Stanley", "Brayan", "Amos", "Kase", "Kristian", "Clyde", "Ernesto", "Tommy", "Casen", "Ford", "Crew", "Braydon", "Brecken", "Hassan", "Axl", "Boone", "Leandro", "Samir", "Jaziel", "Magnus", "Abdullah", "Yousef", "Branson", "Jadiel", "Jaxen", "Layton", "Franco", "Ben", "Grey", "Kelvin", "Chaim", "Demetrius", "Blaine", "Ridge", "Colson", "Melvin", "Anakin", "Aryan", "Lochlan", "Jon", "Canaan", "Dash", "Zechariah", "Alonso", "Otis", "Zaire", "Marcel", "Brett", "Stefan", "Aldo", "Jeffery", "Baylor", "Talon", "Dominik", "Flynn", "Carmelo", "Dane", "Jamal", "Kole", "Enoch", "Graysen", "Kye", "Vicente", "Fisher", "Ray", "Fox", "Jamie", "Rey", "Zaid", "Allan", "Emery", "Gannon", "Joziah", "Rodney", "Juelz", "Sonny", "Terrance", "Zyaire", "Augustine", "Cory", "Felipe", "Aron", "Jacoby", "Harlan", "Marc", "Bobby", "Joey", "Anson", "Huxley", "Marlon", "Anders", "Guillermo", "Payton", "Castiel", "Damari", "Shepherd", "Azariah", "Harold", "Harper", "Henrik", "Houston", "Kairo", "Willie", "Elisha", "Ameer", "Emory", "Skylar", "Sutton", "Alfonso", "Brentley", "Toby", "Blaze", "Eugene", "Shiloh", "Wayne", "Darian", "Gordon", "London", "Bodie", "Jordy", "Jermaine", "Denver", "Gerald", "Merrick", "Musa", "Vincenzo", "Kody", "Yahir", "Brodie", "Trace", "Darwin", "Tadeo", "Bentlee", "Billy", "Hugh", "Reginald", "Vance", "Westin", "Cain", "Arian", "Dayton", "Javion", "Terrence", "Brysen", "Jaxxon", "Thatcher", "Landry", "Rene", "Westley", "Miller", "Alvaro", "Cristiano", "Eliseo", "Ephraim", "Adrien", "Jerome", "Khalid", "Aydin", "Mayson", "Alfred", "Duncan", "Junior", "Kendall", "Zavier", "Koda", "Maison", "Caspian", "Maxim", "Kace", "Zackary", "Rudy", "Coleman", "Keagan", "Kolten", "Maximo", "Dario", "Davion", "Kalel", "Briar", "Jairo", "Misael", "Rogelio", "Terrell", "Heath", "Micheal", "Wesson", "Aaden", "Brixton", "Draven", "Xzavier", "Darrell", "Keanu", "Ronnie", "Konnor", "Will", "Dangelo", "Frankie", "Kamryn", "Salvatore", "Santana", "Shaun", "Coen", "Leighton", "Mustafa", "Reuben", "Ayan", "Blaise", "Dimitri", "Keenan", "Van", "Achilles", "Channing", "Ishaan", "Wells", "Benton", "Lamar", "Nova", "Yahya", "Dilan", "Gibson", "Camdyn", "Ulises", "Alexzander", "Valentin", "Shepard", "Alistair", "Eason", "Kaiser", "Leroy", "Zayd", "Camilo", "Markus", "Foster", "Davian", "Dwayne", "Jabari", "Judson", "Koa", "Yehuda", "Lyric", "Tristian", "Agustin", "Bridger", "Vivaan", "Brayson", "Emmet", "Marley", "Mike", "Nickolas", "Kenny", "Leif", "Bjorn", "Ignacio", "Rocky", "Chad", "Gatlin", "Greysen", "Kyng", "Randall", "Reign", "Vaughn", "Jessie", "Louie", "Shmuel", "Zahir", "Ernest", "Javon", "Khari", "Reagan", "Avi", "Ira", "Ledger", "Simeon", "Yadiel", "Maddux", "Seamus", "Jad", "Jeremias", "Kylen", "Rashad", "Santos", "Cedric", "Craig", "Dominique", "Gianluca", "Jovanni", "Bishop", "Brenden", "Anton", "Camron", "Giancarlo", "Lyle", "Alaric", "Decker", "Eliezer", "Ramiro", "Yisroel", "Howard", "Jaxx", "Bobert"];

console.log(document.cookie);

console.log("type logs to view session history")

console.log("")

function sell(mult) {
  if (food < (1 * mult)) {
    window.alert("You don't have enough for that...")
  }
  if (food > ((1 * mult) - 1)) {
    food -= (1 * mult);
    coins += (2 * mult);
  }

}

function llamaupgrade(mult) {
  upgradecost = (llamalevel * 11)
  if (food < (upgradecost * mult)) {
    window.alert("You don't have enough for that...")
  }
  if (food > ((upgradecost * mult) - 1) && (llamalevel != 1000)) {
    food -= (upgradecost * mult);
    llamalevel += (1 * mult);
  }
  if (llamalevel == 1000) {
    window.alert("Your llama cannot be upgraded any more");
  }

}

function buyfarm(mult) {
  if (coins < (100 * mult)) {
    window.alert("You don't have enough for that...")
  }
  if (coins > ((100 * mult) - 1)) {
    coins -= (100 * mult);
    farms += (1 * mult);
  }


}

function buyllama(mult) {
  if (coins < (1000 * mult)) {
    window.alert("You don't have enough for that...")
  }
  if (coins > ((1000 * mult) - 1)) {
    llamas += (1 * mult);
    coins -= (1000 * mult);
  }
}

function buyfactory(mult) {
  if (llamas < (5 * mult) || coins < (500 * mult)) {
    window.alert("You don't have enough for that...")
  }
  if (llamas > ((5 * mult) - 1) && coins > ((500 * mult) - 1)) {
    factories += (1 * mult);
    coins -= (500 * mult);
    llamas -= (5 * mult)
  }
}

function isEven(value) {
  if (value % 2 == 0)
    return true;
  else
    return false;
}

function llamaeats() {
  if (food > 0) {
    food = (food - 1);
    log("eat");
  }
  if (food == 0) {
    llamas = (llamas - 1);
    log("death");
  }
  setTimeout(llamaeats, (60000 / llamas))
}

function farmgrow() {
  if((1/farms)!==Infinity){
    food ++;
    log("gotfood");
  }
  setTimeout(farmgrow, (30000/farms));
}

function getgun(){
  aks = (aks + 1);
  log("gotgun");
  setTimout(getgun, (60000 / factories));
}

function llamabirth() {
  llamas = (llamas + 1);
  log("llama");
  setTimeout(llamabirth, (600000 / llamas));
}

function fsubmit() {
  sell(parseInt(document.getElementById("sellamount").value));
}

function lusubmit() {
  llamaupgrade(parseInt(document.getElementById("llamaupgradeamount").value));
}

function bsubmit() {
  buyfarm(parseInt(document.getElementById("buyfarmamount").value));
}

function blsubmit() {
  buyllama(parseInt(document.getElementById("buyllamaamount").value));
}

function fbsubmit() {
  buyfactory(parseInt(document.getElementById("buyfactoryamount").value));
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkNAN() {
  if (isNaN(coins)) {
    coins = 0;
  }

  if (isNaN(food)) {
    food = 2;
  }

  if (isNaN(llamas)) {
    llamas = 1;
  }

  if (isNaN(llamalevel)) {
    llamalevel = 1;
  }

  if (isNaN(farms)) {
    farms = 0;
  }

  if (isNaN(factories)) {
    factories = 0;
  }

  if (isNaN(aks)) {
    factories = 0;
  }
}




function update() {
  if (llamalevel == 1000) {
    max = " (maximum level)";
  }
  document.getElementById("fa").innerHTML = "You have " + food + " food";
  document.getElementById("la").innerHTML = "You have " + llamas + " llamas";
  document.getElementById("ca").innerHTML = "You have " + coins + " coins";
  document.getElementById("faa").innerHTML = "You have " + farms + " farms";
  document.getElementById("lfa").innerHTML = "You have " + factories + " factories";
  document.getElementById("ll").innerHTML = "Your llama is level " + llamalevel + max;
  document.getElementById("ln").innerHTML = "Your boss llama is callled " + names[llamalevel] + ". " + names[llamalevel] + " " + types[Math.round(llamalevel / 100)];

  document.getElementById("up").innerHTML = "The llama can be upgraded for " + (10 * llamalevel) + " food";
  document.cookie = "food" + "=" + food + ";" + "expires=Thu, 18 Dec 2200 12:00:00 UTC";
  document.cookie = "llamas" + "=" + llamas + ";" + "expires=Thu, 18 Dec 2200 12:00:00 UTC";
  document.cookie = "coins" + "=" + coins + ";" + "expires=Thu, 18 Dec 2200 12:00:00 UTC";
  document.cookie = "farms" + "=" + farms + ";" + "expires=Thu, 18 Dec 2200 12:00:00 UTC";
  document.cookie = "llamalevel" + "=" + llamalevel + ";" + "expires=Thu, 18 Dec 2200 12:00:00 UTC";
  document.cookie = "factories" + "=" + factories + ";" + "expires=Thu, 18 Dec 2200 12:00:00 UTC";
  document.cookie = "aks" + "=" + aks + ";" + "expires=Thu, 18 Dec 2200 12:00:00 UTC";

}

function addfood() {
  food += llamalevel;
}

function cookieretrieve() {
  food = parseInt(getCookie("food"));
  llamas = parseInt(getCookie("llamas"));
  coins = parseInt(getCookie("coins"));
  farms = parseInt(getCookie("farms"));
  llamalevel = parseInt(getCookie("llamalevel"));
  factories = parseInt(getCookie("factories"));
  aks = parseInt(getCookie("aks"));
}

function log(message) {
  logs.push(message);
}

function debugexport(){
navigator.clipboard.writeText(logs)
}

cookieretrieve();
checkNAN();

setInterval(update, 1);

farmgrow();
llamaeats();
