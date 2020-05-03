import newShipVars from './../helpers/ship.js';
import oldShip from './../helpers/oldstoryvars.js';
import sometruck from './../helpers/truck.js';
import extras from './../helpers/extras.js';
import * as converter from 'number-to-words';

let mainShip = newShipVars.Ship(newShipVars.Captain(), newShipVars.FirstOfficer(), newShipVars.ShipName(), newShipVars.cargoMaster(), newShipVars.idOfficer());
let licenseShip = newShipVars.Ship(newShipVars.Captain(), newShipVars.FirstOfficer(), newShipVars.ShipName(), newShipVars.cargoMaster(), newShipVars.idOfficer());
let desinationShip = newShipVars.Ship(newShipVars.Captain(), newShipVars.FirstOfficer(), newShipVars.ShipName(), newShipVars.cargoMaster(), newShipVars.idOfficer());
let returnShip = newShipVars.Ship(newShipVars.Captain(), newShipVars.FirstOfficer(), newShipVars.ShipName(), newShipVars.cargoMaster(), newShipVars.idOfficer());
let ramonfurt = oldShip.MainShip;
let truck = sometruck.Truck();
let numOfPies = extras.ppamt();
let storageRetId = extras.storageRetId();
let villain = extras.criminal();

const Chapter2 = () => {
  return `
  ${title() || ''}
  ${preface() || ''}
  ${partA() || ''}
  ${partB() || ''}
  ${partC() || ''}
  ${partD() || ''}
  ${partE() || ''}
  ${partF() || ''}

`;}

const partA = () => {
  return `  

  "${ramonfurt.redshirt6.fullName} was a good crew member, among the best." said ${ramonfurt.firstOfficer.fullName}. She stood before her remaining crew, including ${ramonfurt.navigator.title} ${ramonfurt.navigator.firstName} ${ramonfurt.navigator.lastName} giving a eulogy for her crew which had been savagely killed by ${oldShip.EvilGod.fullName} (or her own torpedoes) while on  an away mission aboard ${oldShip.AwayShip.name}. "${ramonfurt.redshirt6.lastName} was a Hollo-poet, and definitely the comedian on board this ship, The ${ramonfurt.name}. Remember the one about the vegetarians eating nuts?" She sighed. "Today, we rejoin the swarm without seven of the finest crew a ${ramonfurt.firstOfficer.title.toLowerCase()} could ask for. That said, our first task is to rendezvous with ${mainShip.captain.fullName} at the aft edges of the swarm for debriefing and new orders."

    The captain retired to her ready-room where she was met by ${ramonfurt.navigator.title} ${ramonfurt.navigator.firstName} ${ramonfurt.navigator.lastName}.
  "I just keep thinking of his smile and the way he told that one about the walruses at the tupperware party" said ${ramonfurt.navigator.lastName}.
  "I know you two were close. I must confide that I myself don't know what I'll do without the sage wisdom of ${ramonfurt.captain.title} ${ramonfurt.captain.firstName} ${ramonfurt.captain.lastName}. What a fucking boss..." confided ${ramonfurt.firstOfficer.title} ${ramonfurt.firstOfficer.lastName}.
  "And totally sexy and stuff" muttered the ${ramonfurt.navigator.title.toLowerCase()}.
  `;
}

const partB = () => {
  return ` 

  ${"MEANWHILE...".split("").reverse().join("")}--MEANWHILE...

  Space-Trucker ${truck.pilot.firstName} was sleeping soundly in the captain's seat of ${truck.name} the ${truck.type} when the alarm started. "Sir", "wake up sir", "sir, please wake up", "Sir, we have incoming transmissions from the ${ramonfurt.name} and the ${mainShip.name}". ${truck.pilot.firstName} pretended to keep sleeping but made the grave mistake of asking ${truck.assistant.name}, ${truck.name}'s built-in ${truck.assistant.type} (short for ${truck.assistant.longFormType}) "Oh what is it now?" ${truck.pilot.firstName} noticed a can of jupiter juice on the dash. "Hair of the cat", they used to say. ${truck.pilot.firstName} polished that off as ${truck.assistant.name} started in "It's seems gravely important ${truck.pilot.firstName}, sir. You may want to turn back. listen to this transmission..." ${truck.pilot.firstName} was hungover as usual and not fully comprehending ${truck.assistant.name}'s bullshit. Her whole job was to just keep the "truck" on course to its destination, the ${oldShip.AwayShip.name}. It seemed that every few hours, ${truck.assistant.name}, who was supplied by the company, had some "gravely important" news to impart to her. "Sir", "Sir", "Sir", "Sir"... "Shut the fuck up, ${truck.assistant.name}" ${truck.pilot.firstName} had a friend with genetalia could projectile urinate straight forward in any direction at a 90 degree angle. ${truck.pilot.firstName} didn't want that sort of genetalia per say, but the idea of projectile pissing on ${truck.assistant.name} was tempting a few times per space-week. "Sir, ${ramonfurt.firstOfficer.fullName} advises that you turn back to the center of the swarm. Shall I change course, sir???" "What?" replied ${truck.pilot.firstName} groggily. "I'll be fucked if I give up this commision. Straight ahead sword, ${truck.assistant.name}!"

    BEEP! BOOP! SKRRT! The coms panel came alive with another incoming transmission. ${truck.pilot.firstName} thought "It's gonna be that kind of space-day. What a pain in the ol coinslot." 
    "This is ${mainShip.captain.fullName} hailing the pilot of the incoming ${truck.type}, does that say ${truck.name}?? The names these people give their rigs... We request that you change course immediately to rendezvous with us. Do you copy?"
    "${mainShip.captain.title} ${mainShip.captain.lastName} you've got ${truck.pilot.handle}. I copy but I'm afraid I'll have to decline your request. I've got a cargo hold filled with ${converter.toWords(numOfPies)} important frozen turkey pot pies en route to the ${oldShip.AwayShip.name}. If I don't drop these off in time for the harvest festival, I won't make my commision, sir."
    "${truck.pilot.handle}, I think these are extenuating circumstances and ${truck.company} might be persuaded by Central Swarm Council to still pay your commision considering the ${oldShip.AwayShip.name} has been torpedoed. Now why don't you change course and dock aboard ${mainShip.name}. We could sure use some pot-pies."

    Well, fuck if ${truck.pilot.firstName} wasn't persuaded to just pay a little visit to the ${mainShip.name}. "${truck.assistant.name}, I'm going back to sleep. Change course for ${mainShip.name} and wake me when we arrive." commanded ${truck.pilot.firstName}. "Of course, sir. by the way, have you heard the one about the clockmaker and the farmer's daughter?"
      "Haha, yea she really wound him up! goodnight, ${truck.assistant.name}"
      "Goodnight, sir" 
    `;
}

const partC = () => {
  return `

    "Oh for goodness sake. I've had quite enough of this. ${truck.pilot.firstName}, WAKE UP!" ${truck.assistant.name} raised the volume of its vocal processors so immensely for that last part that ${truck.pilot.firstName} smacked her head agaist the ceiling of the cockpit and farted as she came bolt upright. This was not the best way to meet ${mainShip.firstOfficer.fullName}. "My god, what do you truckers eat?" queried ${mainShip.firstOfficer.title} ${mainShip.firstOfficer.lastName}. "Umm" ${truck.pilot.name} was helpless for a moment. "Look, let's just step out of the ${truck.name}. So we can speak about matters at hand."
    Upon stretching, rubbing her head, then exiting the foul stench of her cockpit, ${truck.pilot.firstName} was greeted by the sight of the ${oldShip.name} docked next to her truck in a giant docking bay the size of perhaps a football field back on earth. Nothing new. Sci-Fi characters are not impressed by sci-fi things. 
    "Great news, You've been asleep for many hours, during which time our captain, ${mainShip.captain.fullname} has had the opportunity to speak personally with your supervisor at ${truck.company}. You've been given a new destination to which you can transport the ${converter.toWords(numOfPies)} delicious turkey pot-pies you've been carrying, the ${desinationShip.name}... and hopefully not eating, and still get paid your commission." said ${mainShip.firstOfficer.title} ${mainShip.firstOfficer.lastName}. 
    "That is great news, I'll be on my way then." ${truck.pilot.firstName} was elated.
    "Unfortunately, we did you favor of storing your ${converter.toWords(numOfPies)} pot-pies while you were sleeping as is Swarm Council policy. So, you'll have to pay the storage fees yourself before you can load them back onto your rig. oh, and have you heard the joke about the banana and the refrigerator?" replied a sympathetic ${mainShip.firstOfficer.title}
    "I feel like you could have started with that instead of 'great news'. and I'm in no mood for jokes."
    "right, right. Well, your supervisor has graciously agreed to give you the funds to pay the fees as well and they have already been transferred to your account. So if you'll just make your way to the cargomaster's office."
  `;
}

const partD = () => {  
  return `
  
  "Let's see here, we're holding ${converter.toWords(numOfPies)} Turkey Pot-Pies for a ${truck.pilot.lastName}, ${truck.pilot.firstName} handle: ${truck.pilot.handle} of the ${truck.company} to be transported to ${desinationShip.name}. Do you speak on helaf of this ${truck.pilot.handle}?" ${mainShip.cargoMaster.fullName} Looked vacant-eyed at ${truck.pilot.firstName} over the desk of the cargomasters office.
  "I am ${truck.pilot.handle}."
  "Oh I see. Well, let's get you those pot-pies and get you on your way to ${desinationShip.name}. I'll just need your ${storageRetId.term}." Said the cargomaster matter-of-factly.
  "I don't have a ${storageRetId.term}. I was never issued one."
  "No problem. Just get one from the ${mainShip.name} office of secure identification. It's just next door. Shouldn't take but a moment. I will close my desk and cacth up on some paper work while you do that. You wont have to wait in line when you return." ${truck.pilot.firstName} looked around the room. It was empty aside from ${mainShip.cargoMaster.title} ${mainShip.cargoMaster.lastName}. 

  ${truck.pilot.firstName} made her way to the room next door which looked almost exactly the same, except that behind the desk was a different vacant-eyed council employee and a little sign on the desk read "${mainShip.idOfficer.fullName}". 
  "What can I do for you today?" said "${mainShip.idOfficer.fullName}.
  "I need a ${storageRetId.term} for a cargo of ${converter.toWords(numOfPies)} Turkey Pot-Pies routed to ${desinationShip.name}."
  "Certainly, this should only take a moment. just fill out this form. In the mean time, have you heard the one about the hacker and the dumptruck?"
  A form appeared on the desk in front of ${truck.pilot.firstName} which she began to fill out.
  ${mainShip.idOfficer.fullName} said "Oh dear, it would seem that your transport license expired only a few minutes ago. You'll need to go to the nearest Swarm Council Licensing Office which is on ${licenseShip.name}. However, you'll have to leave your rig here on ${mainShip.name} We can't have you piloting ${truck.name} without a license."
  "Are.You.Fucking.Kidding.Me???"
  At that moment, a voice spoke up from behind ${truck.pilot.firstName}.
  "I couldn't help but overhear that you need to get to ${licenseShip.name}. I'm ${ramonfurt.firstOfficer.fullName}. My crew and I have orders to go that way and I'll be glad to give you a lift." 
  `;
}

const partE = () => {
  return `

  ${truck.pilot.firstName} left ${truck.name} behind and boarded the ${ramonfurt.name} en route to ${licenseShip.name}. During the trip, the villainous criminal ${villain.firstName} ${villain.lastName} who was wanted for crimes on ${villain.wanted} was found to be stowed away in an effort to resurrect ${oldShip.EvilGod.fullName}. He murdered one redshirt and was narrowly thwarted from further damage by our frustrated hero, ${truck.pilot.firstName} ${truck.pilot.lastName}. ${truck.pilot.firstName} was thanked by ${ramonfurt.firstOfficer.title} ${ramonfurt.firstOfficer.lastName}. ${ramonfurt.navigator.fullName} also tell a hilarious joke about a trapeze artist and a toilet. It was a rousing adventure to be sure but, sadly that's a whole different story for another day. Maybe a thursday.
  `; 
}

const partF = () => {
  // ${truck.pilot.firstName} fills out the form to get the license aboard ${licenseShip.name}. she can now get the number assigned, pay the fees, and get the pot pies to ${desinationShip.name}. She secures transport back to ${mainShip.name}. with license restored, number assigned, she pays the fees at ${mainShip.name}. However, the the pot pies were stored aboard the ramonfurt. She must take ${truck.name} back to the ramonfurt, load them and take them to ${desinationShip.name}.
  return `

  `; 
}

const preface = () => {
  return `
  Author's Note:
  As a bit of preface, I would like to point out that the following story is a sequel. In case you did not have a chance to listen to the October episode of Dream Laser in which I participated, I'll say there was a tale about the crew of a space ship in space doing space things. Some of them died in horrific ways. (It was, of course, a halloween story.) There was a also an evil space god called ${oldShip.EvilGod.fullName}.
  That story doesn't share a whole big bunch in common with the story in this episode aside from the setting (The Swarm) and some characters (The remeaining crew of the ${ramonfurt.name}). However, this story begins where the previous story ended, which will be cleared up in the first scene. This story isn't a horror, at least not the stabby, ghostly, mutilation death kind of horror. Maybe you'll think it a different type of horror.
  "Where is this going?" You might ask. To that I say "Shut all the way up, you bad of half used hotel sized personal care products!" I didn't know where this was going either until I knew and then I knew like you will soon know, which is good, you know?
  Sorry for the outburst. I just wanted to set up this sequel. Gosh, golly jeepers, I thought I was being helpful. Whatever, enjoy the story. Or don't but I hope you do. I really hope so.


  The ${ramonfurt.name} was returning to the swarm. It was a space-wednesday, humpday as they used to call it on earth. Literally nobody remembers nor can anyone reason why people would ever call it that...
  `;
}

const title = () => `The Swarm Part-2: beaurocracy in space`
export default { Chapter2 }