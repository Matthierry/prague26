// Coordinates resolved from the supplied Google Maps links on 1 October 2026.
// They power approximate straight-line sorting; Google Maps supplies actual walking routes.
export const places = [
  ['karlovy','Karlovy Lázně','Nightlife','Robot bar, ice bar and five floors of music.','JxMKmfbgKigBgNXNA',50.0853897,14.413904,'Riverfront · Charles Bridge'],
  ['sudu','U Sudu Wine Bar','Nightlife','Underground bar with beer too; handy for a first drink near the base.','R9ZjqykapeT9v1EQ6',50.0788963,14.4222265,'New Town'],
  ['vejvodu','U Vejvodů','Nightlife','Large Czech pub in a medieval tavern setting.','CESk198PuP3BMM7x7',50.084266,14.418825,'Old Town'],
  ['vytopna','Výtopna Railway Restaurant','Nightlife','Drinks delivered to the table by miniature trains.','KUNXsULcTeefL7qE9',50.0802002,14.4285602,'Wenceslas Square'],
  ['my-people','My People Bar','Nightlife','Cocktails, helmets and a lively night out.','c9X63SDeccANLy9P8',50.0860136,14.4203308,'Old Town'],
  ['zlaty','Zlatý Strom','Nightlife','Bar and club with three distinct spaces.','9NgcGqK3zvnokPvb9',50.0858706,14.4149192,'Near Charles Bridge'],
  ['fly-vista','Fly Vista','Nightlife','Rooftop drinks and city views above the Máj building.','r8JJT8wL2J6NwE9A8',50.0824026,14.4199122,'Národní'],
  ['rarasku','U Rarášků','Nightlife','A bar with good outdoor space.','zceT3UKrgDKAm8XM9',50.0815348,14.4178365,'New Town'],
  ['energy','EnergyPub','Nightlife','Outdoor space and events; check the programme nearer the trip.','3LY9kiKyfKRFht4bA',50.080538,14.4429787,'Riegrovy sady'],
  ['fat-cat','Fat Cat Old Town','Food','Burgers, plus breakfast options.','enWx8KFUSqxuVGoE7',50.0860664,14.4187637,'Old Town'],
  ['bombay','Bombay Express','Food','Quick Indian food for the spicy-food hangover craving.','9TYbQ2UhsL28Jchb7',50.079368,14.4225466,'New Town'],
  ['roots','Project Roots','Food','Healthy bowls and salads for lunch.','FNuxBZCfDMrvoA6Y7',50.0810214,14.423006,'New Town'],
  ['superfresh','SuperFresh','Food','Protein smoothies, bowls and sandwiches.','XRt1Ef6YKmtLVBUo9',50.0792856,14.4206909,'New Town'],
  ['bageterie','Bageterie Boulevard','Food','Fresh baguettes and a quick lunch option.','iXiUDxwFts2aLdis8',50.0802828,14.4283546,'Wenceslas Square'],
  ['indian-kitchen','Indian Kitchen By R&R','Food','The Indian restaurant we ate at last time.','hBNxk77QiwpQSdSXA',50.0776261,14.4250617,'Near the base'],
  ['cafe-k','Café K','Breakfast','Breakfast on the road near our accommodation.','PuP4wMiyKq6oaUTw6',50.0773757,14.4273659,'Near the base'],
  ['cafe-smecky','Café Smečky','Breakfast','Breakfast one street from our accommodation.','h4Se19xThcrEpK317',50.0774999,14.4265989,'Near the base'],
  ['honest','Honest Taste','Breakfast','Brunch and coffee.','ye3NLa8UxqP3u3om9',50.0732067,14.4301679,'New Town'],
  ['sweet-pepper','Sweet & Pepper DAYS','Breakfast','A breakfast and brunch option.','SEB48nFvFVWaMF777',50.0765174,14.4339102,'New Town'],
  ['neustadt','Café Neustadt','Breakfast','Good-looking breakfast spot.','WWi28Pt6pKVY6E5KA',50.0784215,14.4210151,'New Town'],
  ['mvp','MVP esports','Chill','PS5 and PC gaming for a slower day.','Z3aVAPWL1r6FgnZA8',50.0817496,14.4191364,'New Town'],
  ['slavia','Slavia Prague','Football','Fortuna Arena · Saturday match against Mladá Boleslav.','QAVqXJS1Efibf7sT6',50.0675366,14.4705968,'Vršovice'],
  ['sparta','Sparta Prague','Football','Stadium · Sunday match against Slovácko.','e3wbtUi8CzJDA5Xg7',50.0998032,14.4149466,'Letná'],
  ['base','limehome Prague Halkova','Base','Our accommodation and default starting point.','f4QpUrjogHKPa9xq5',50.0763318,14.4282277,'Hálkova']
].map(([id,name,category,note,key,lat,lng,area])=>({id,name,category,note,maps:`https://maps.app.goo.gl/${key}`,lat,lng,area}));

export const agenda = [
 {day:23,time:'15:55',title:'Matt & Harry land',kind:'travel'},
 {day:23,time:'16:55',title:'Aaron lands',kind:'travel'},
 {day:23,time:'21:30',title:'LEVELS · Interactive darts',kind:'night',link:'https://www.google.com/maps/search/?api=1&query=LEVELS+Prague'},
 {day:24,time:'18:00',title:'Slavia Prague v Mladá Boleslav',kind:'football',place:'slavia',link:'https://www.slavia.cz/eng/matches/1'},
 {day:24,time:'22:00',title:'EPIC / DUPLEX',kind:'night',link:'https://www.google.com/maps/search/?api=1&query=EPIC+Prague'},
 {day:25,time:'15:00',title:'Sparta Prague v Slovácko',kind:'football',place:'sparta',link:'https://sparta.cz/en/'},
 {day:26,time:'16:10',title:'Matt, Harry & Tom flight',kind:'travel'},
 {day:26,time:'17:00',title:'Aaron flight',kind:'travel'}
];
