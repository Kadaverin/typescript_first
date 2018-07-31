import  { Fighter } from "./Fighter/fighter";
import  ImprovedFighter  from "./ImprovedFighter/improvedFighter";
import { FighterGame } from './FighterGame/fighterGame';

let fighter = new Fighter ('John' , 1000 , 3);
let improvedFighter = new ImprovedFighter('Smith', 1000 ,2);

const game = new FighterGame(fighter, improvedFighter);

game.fight();

