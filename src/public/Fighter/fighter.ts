
export interface IFighter {
    name: string;
    health: number;
    power: number;
    hit: (enemy: Fighter, point: number) => void;
    knockout: () => Promise<void>;
    setDamage: (damage: number) => void;
}

export class Fighter implements IFighter{
    name: string;
    health: number;
    power: number;

    constructor(name: string, health: number, power: number){
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(enemy: Fighter, point: number){
        let damage = point * this.power;
        enemy.setDamage(damage);        
    }

    knockout(){
        return new Promise<void> (function(resolve){

            setTimeout( () => {
                console.log('time is ower');
                resolve();
            }, 500 );

        })
    }

    setDamage(damage: number){
        this.health -= damage;
        console.log(`${ this.name }'s health : ${ this.health }`);
    }
}


