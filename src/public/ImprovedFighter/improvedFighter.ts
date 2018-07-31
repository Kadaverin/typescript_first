import  { Fighter , IFighter } from "../Fighter/fighter";


export default class ImprovedFighter extends Fighter{
    name: string;
    health: number;
    power: number;

    hit(enemy: IFighter, point: number) {
        let isCrit = Math.random() > 0.6;

        if (isCrit) {
            this._doubleHit(enemy, point);
            this._logAboutCrit();
        } else {
            super.hit(enemy, point);
        }
    }

    private _doubleHit(enemy: IFighter , point: number): void {
        super.hit(enemy, point * 2);
    }

    private _logAboutCrit(): void {
        console.log(`%c${this.name} make crit !!` , ' color: teal; font-weight: bold');
    }
}
