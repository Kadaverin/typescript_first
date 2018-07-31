import { IFighter } from '../Fighter/fighter';

export interface GameInterface{
  firstFighter: IFighter;
  secondFighter: IFighter;
  fight : () => void;
}


export class FighterGame implements GameInterface{

  firstFighter: IFighter;
  secondFighter: IFighter;

  constructor(fighter1: IFighter, fighter2 : IFighter){
    this.firstFighter = fighter1;
    this.secondFighter = fighter2;
  }
  
 async fight(){
    let points = this._generatePoints();

    for ( let index = 1; index < points.length; index++){

        if (index % 2 != 0){
            this.firstFighter.hit(this.secondFighter , points[index]);
        }
        else {
            this.secondFighter.hit(this.firstFighter,  points[index]);
        }

        if (this.firstFighter.health <= 0){
            await this.firstFighter.knockout();
            this._declareALooser(this.firstFighter);
            return;
        }

        if (this.secondFighter.health <= 0) {
            await this.secondFighter.knockout();
            this._declareALooser(this.secondFighter);
            return;
        }
    }
    this._declareADraw();
  }

  private _generatePoints(): Array<number> {
     return Array.from(
       { length: Math.floor(Math.random() * 50 + 20 ) }, 
       () => Math.floor(Math.random() * 40)
     );
  }

  private _declareALooser(fighter: IFighter): void {
    console.log(`%c${fighter.name} is dead!` , "background : red; color: white");
  }

  private _declareADraw(): void {
    console.log('%cThis round ended in a draw' , "background : teal; color: white");
  }

}
