const Emitter = function(){
    const self = {};
    const events = {};
    const eventCount = {};
    self._on = function(type,listener){
        if(eventCount[type] >= 10 ){
            throw `Event: ${type} has to many listeners`;
        }
        events[type] = events[type] || [];
        events[type].push(listener);
        eventCount[type] = eventCount[type] + 1;
    };
    self._emit = function(type){
        if(events[type]){
            events[type].forEach((listener) => listener())
        }
        else {
            throw `Error: ${type} has no listeners`;
        }
    };
    self._removeListeners = function(type){
        if(type){
            events[type] = [];
            eventCount[type] = 0;
        }
    };
    return self;
};

class ClassEmitter {
    constructor(){
        this.eventCount = {};
        this.events = {};
    }
    _on (type,listener){
        if (this.eventCount[type] >= 10){
            throw `Error: ${type} has to many listeners`;
        }
        else {
            this.events[type] = this.events[type] || [];
            this.events[type].push(listener);
            this.eventCount[type] = this.eventCount[type] + 1;
        }
    }
    _emit(type){
        if(this.events[type]){
            this.events[type].forEach(function(listener){
                listener();
            });
        }
        else {
            throw `Error: ${type} has now listeners`;
        }
    }
    _removeListeners (type){
      if(type){
          this.events[type] = [];
      }
      else {
          this.events = {};
      }
    }
}










module.exports = {
    ClassEmitter : ClassEmitter,
    Emitter : Emitter

}