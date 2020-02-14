import Victor from 'victor';

export default class Level {
    constructor() {
        this.size = new Victor(1, 1);
        this.objects = [];
        this.spaces = [];
    }
}
