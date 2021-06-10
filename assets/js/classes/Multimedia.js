export class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => {
            return _url
        }
        this.setUrl = (url) => _url = url;
        this.setInicio = (time) => {
            return 'Este método es para realizar un cambio en la URL del vídeo'
        }
    }

    get url() {
        return this.getUrl();
    }

    set url(url) {
        this.setUrl(url);
    }

    setInicio() {
        return this.setInicio();
    }

}