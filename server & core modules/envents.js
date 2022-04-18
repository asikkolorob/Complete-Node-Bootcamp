const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("bellRing", (text, period) => {
    console.log(`now run because ${period} ${text}`);
});

setTimeout(() => {
    emitter.emit("bellRing", { text: "ended peroiad", period: "first" });
}, 2000);
