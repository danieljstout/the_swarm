import newShipVars from './../helpers/ship.js';
import oldShip from './../helpers/oldstoryvars.js';
import sometruck from './../helpers/truck.js';

let ship1 = newShipVars.Ship(newShipVars.Captain(), newShipVars.FirstOfficer(), newShipVars.ShipName());
let scsr = oldShip.MainShip;
let truck = sometruck.Truck();

const Chapter2 = () => `
	The ${scsr.name} was returning to the swarm. It was a space-wednesday, humpday as they used to call it on earth. Literally nobody remembers or can reason why people would call it ever that...

	"${scsr.redshirt6.fullName} was a good crew member, among the best." said ${scsr.firstOfficer.fullName}. She stood before her remaining crew, including ${scsr.navigator.title} ${scsr.navigator.firstName} ${scsr.navigator.lastName} giving a eulogy for her crew which had been savagely killed by ${oldShip.EvilGod.fullName} (or her own torpedoes) while on  an away mission aboard ${oldShip.AwayShip.name}. "${scsr.redshirt6.lastName} was a Hollo-poet, and definitely the comedian on board this ship, The ${scsr.name}. Remember the one about the vegetarians eating nuts?" She sighed. "Today, we rejoin the swarm without seven of the finest crew a ${scsr.firstOfficer.title.toLowerCase()} could ask for. That said, our first task is to rendezvous with ${ship1.captain.fullName} at the aft edges of the swarm for debriefing and new orders."

	The captain retired to her ready-room where she was met by ${scsr.navigator.title} ${scsr.navigator.firstName} ${scsr.navigator.lastName}.
"I just keep thinking of his smile and the way he told that one about the walruses at the tupperware party" said ${scsr.navigator.lastName}.
"I know you two were close. I must confide that I myself don't know what I'll do without the sage wisdom of ${scsr.captain.title} ${scsr.captain.firstName} ${scsr.captain.lastName}. What a fucking boss..." confided ${scsr.firstOfficer.title} ${scsr.firstOfficer.lastName}.
"And totally sexy and stuff" muttered the ${scsr.navigator.title.toLowerCase()}.

	${"MEANWHILE...".split("").reverse().join("")}--MEANWHILE...

	Space-Trucker ${truck.pilot.firstName} was sleeping soundly in the captain's seat of ${truck.name} the ${truck.type} when the alarm started. "Sir", "wake up sir", "sir, please wake up", "Sir, we have incoming transmissions from the ${scsr.name} and the ${ship1.name}". ${truck.pilot.firstName} pretended to keep sleeping but made the grave mistake of asking ${truck.assistant.name}, ${truck.name}'s built-in ${truck.assistant.type} (short for ${truck.assistant.longFormType}) "Oh what is it now?" ${truck.pilot.firstName} noticed a can of jupiter juice on the dash. "Hair of the cat", they used to say. ${truck.pilot.firstName} polished that off as ${truck.assistant.name} started in "It's seems gravely important ${truck.pilot.firstName}, sir. You may want to turn back. listen to this transmission..." ${truck.pilot.firstName} was hungover as usual and not fully comprehending ${truck.assistant.name}'s bullshit. Her whole job was to just keep the "truck" on course to its destination, the ${oldShip.AwayShip.name}. It seemed that every few hours, ${truck.assistant.name}, who was supplied by the company, had some "gravely important" news to impart to her. "Sir", "Sir", "Sir", "Sir"... "Shut the fuck up, ${truck.assistant.name}" ${truck.pilot.firstName} had a friend with genetalia could projectile urinate straight forward in any direction at a 90 degree angle. ${truck.pilot.firstName} didn't want that sort of genetalia per say, but the idea of projectile pissing on ${truck.assistant.name} was tempting a few times per space-week. "Sir, ${scsr.firstOfficer.fullName} advises that you turn back to the center of the swarm. Shall I change course, sir???" "What?" replied ${truck.pilot.firstName} groggily. "I'll be fucked if I give up this commision. Straight ahead sword, ${truck.assistant.name}!"

		BEEP! BOOP! SKRRT! The coms panel came alive with another incoming transmission. ${truck.pilot.firstName} thought "It's gonna be that kind of space-day. What a pain in the ol coinslot." 
		"This is ${ship1.captain.fullName} hailing the pilot of the incoming ${truck.type}, does that say ${truck.name}?? The names these people give their rigs... We request that you change course immediately to rendezvous with us. Do you copy?"
		"${ship1.captain.title} ${ship1.captain.lastName} you've got ${truck.pilot.handle}. I copy but I'm afraid I'll have to decline your request. I've got a cargo hold filled with important frozen turkey pot pies en route to the ${oldShip.AwayShip.name}. If I don't drop these off in time for the harvest festival, I won't make my commision, sir."
`;

export default { Chapter2 }