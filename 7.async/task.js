class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
      if(!id) { //попробовать с !id
          let err = new Error ('Значение не передано');
          throw err;
      }

      let result = this.alarmCollection.some(item => item['id'] === id);
        if (result) {
            return console.error('Такой звонок уже задан');
        } else {
            this.alarmCollection.push(
                {
                    id: id,
                    time: time,
                    callback,
                }
            );
        }
    }

    removeClock(id) {
        let leng1 = this.alarmCollection.length;
        let result = this.alarmCollection.find(item => item['id'] === id);
        if(result) {
            let index = this.alarmCollection.indexOf(result);
            this.alarmCollection.splice(index, 1);
        }
        let leng2 = this.alarmCollection.length;
        return leng1 > leng2;
    }

    getCurrentFormattedTime() {
        let data = new Date().toTimeString().slice(0, 5);
        return data;
    }

    start() {
      let collection = this.alarmCollection;
      let get = this.getCurrentFormattedTime;
      function checkClock(item) {
        let timeNow = get();
        if(timeNow === item.time) {
          return item.callback();
        }
      }

      if(!this.timerId) {
        this.timerId = setInterval(() => collection.forEach(item => checkClock(item)), 2000);
      }
    }

    stop() {
      if(this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
    }
    }

  printAlarms() {
    return this.alarmCollection.forEach(item => console.log('id звонка: ' + item.id + ', время звонка: ' + item.time));
  }

  clearAlarms() {
      this.stop();
      this.alarmCollection = [];
  }
}