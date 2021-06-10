import { Multimedia } from "./Multimedia.js";

export class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        let _id = id;
        this.getId = () => {
            return _id;
        }
        this.setId = (id) => {
            _id = id;
        }
        this.playMultimedia = (main) => {
            return main;
        }

        this.setInicio = (time) => {
            if (time === undefined) {
                time = 0;
            }
            return this.url += `?start=${time}`
        }
    }
    get id() {
        return this.getId();
    }

    set id(id) {
        this.setId(id);
    }

    setInicio(time) {
        this.setInicio(time);
    }

    playMultimedia(main) {
        return this.playMultimedia(main)
    }
}