const alarmClock = new AlarmClock();

alarmClock.addClock('15:36', () => console.log('Вставай!'), 1);
alarmClock.addClock('15:36', () => {console.log('Быстро!'); alarmClock.removeClock(2);}, 2);
//alarmClock.addClock('15:37', () => {console.log('Ну!');});
alarmClock.addClock('15:37', () => {console.log('Ну!'); alarmClock.printAlarms(); alarmClock.stop();}, 3);
alarmClock.addClock('15:38', () => console.log('Ну давай!'), 1);
alarmClock.addClock('15:38', () => {console.log('Быстро!'); alarmClock.clearAlarms(); alarmClock.printAlarms();}, 4);

alarmClock.printAlarms();
alarmClock.getCurrentFormattedTime();
console.log(alarmClock.start());
//console.log(alarmClock);
//console.log(alarmClock.stop());
//alarmClock.printAlarms();
//console.log(alarmClock);
//console.log(alarmClock.removeClock(5));
//console.log(alarmClock);
