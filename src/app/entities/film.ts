export class Film {
    constructor(
        public id: number, 
        public title: string, 
        public summary: string = null, 
        public trailerId: string = null,
        public plot: string = null){
    }
}