const Telegraf = require("telegraf");
const bot = new Telegraf("902317744:AAGqXokdQYY20PMLM1aCVQSZYDtotKSu_1k");

const startMsg =
  "Welcome to Simple Timer-bot.\n\nEnter the message that will be sent to you /m\n\nExample: /m (optional message)\nUse /tm for short command";

bot.start(ctx => {
  bot.telegram.sendMessage(ctx.chat.id, startMsg);
});

bot.hears("/help", ctx => {
  ctx.reply(startMsg);
});

bot.command("m", ctx => {
  const msg = ctx.message.text;
  const msgArray = msg.split(" ");
  msgArray.shift();
  const newMsg = msgArray.join(" ");

  bot.telegram.sendMessage(
    ctx.chat.id,
    "Use /t to set exact time you want or click on one of these buttons",
    {
      reply_markup: {
        keyboard: [
          [{ text: "/10" }, { text: "/25" }, { text: "/60" }],
          [{ text: "/120" }, { text: "/180" }, { text: "/240" }],
          [{ text: "/cancel" }, { text: "/help" }]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      }
    }
  );

  bot.command("t", ctx => {
    const e = "Oops...Something goes wrong";
    const timeout = ctx.message.text;
    const timeoutArray = timeout.split(" ");

    ctx.reply(
      "Message " +
        newMsg +
        "- will be sent to you after " +
        timeout +
        " minutes"
    );

    timeoutArray.shift();
    const newTimeout = timeoutArray.join(" ");
    console.log(newTimeout);

    if (newTimeout > 0) {
      function stop() {
        clearTimeout(timeoutSet);
      }
      const time = newTimeout * 60 * 1000;
      const timeoutSet = setTimeout(function() {
        console.log(time);
        if (newMsg) {
          ctx.reply(newMsg);
        } else {
          ctx.reply("Time is over. How are you doing?");
        }
      }, time);
      bot.hears("/cancel", ctx => {
        stop();
        ctx.reply("Cancel");
      });
    } else {
      ctx.reply(e);
    }
  });

  bot.hears("/10", ctx => {
    const e = "Oops...Something goes wrong";
    const timeout = 10;
    console.log(timeout);

    if (timeout) {
      function stop() {
        clearTimeout(timeoutSet);
      }
      ctx.reply(
        "Message " +
          newMsg +
          "- will be sent to you after " +
          timeout +
          " minutes"
      );
      const time = timeout * 60 * 1000;
      const timeoutSet = setTimeout(function() {
        console.log(time);
        if (newMsg) {
          ctx.reply(newMsg);
        } else {
          ctx.reply("Time is over. How are you doing?");
        }
      }, time);
      bot.hears("/cancel", ctx => {
        stop();
        ctx.reply("Cancel");
      });
    } else {
      ctx.reply(e);
    }
  });
  bot.hears("/25", ctx => {
    const e = "Oops...Something goes wrong";
    const timeout = 25;
    console.log(timeout);

    if (timeout) {
      function stop() {
        clearTimeout(timeoutSet);
      }
      ctx.reply(
        "Message " +
          newMsg +
          "- will be sent to you after " +
          timeout +
          " minutes"
      );
      const time = timeout * 60 * 1000;
      const timeoutSet = setTimeout(function() {
        console.log(time);
        if (newMsg) {
          ctx.reply(newMsg);
        } else {
          ctx.reply("Time is over. How are you doing?");
        }
      }, time);
      bot.hears("/cancel", ctx => {
        stop();
        ctx.reply("Cancel");
      });
    } else {
      ctx.reply(e);
    }
  });
  bot.hears("/60", ctx => {
    const e = "Oops...Something goes wrong";
    const timeout = 60;
    console.log(timeout);

    if (timeout) {
      function stop() {
        clearTimeout(timeoutSet);
      }
      ctx.reply(
        "Message " +
          newMsg +
          "- will be sent to you after " +
          timeout +
          " minutes"
      );
      const time = timeout * 60 * 1000;
      const timeoutSet = setTimeout(function() {
        console.log(time);
        if (newMsg) {
          ctx.reply(newMsg);
        } else {
          ctx.reply("Time is over. How are you doing?");
        }
      }, time);
      bot.hears("/cancel", ctx => {
        stop();
        ctx.reply("Cancel");
      });
    } else {
      ctx.reply(e);
    }
  });
  bot.hears("/120", ctx => {
    const e = "Oops...Something goes wrong";
    const timeout = 120;
    console.log(timeout);

    if (timeout) {
      function stop() {
        clearTimeout(timeoutSet);
      }
      ctx.reply(
        "Message " +
          newMsg +
          "- will be sent to you after " +
          timeout +
          " minutes"
      );
      const time = timeout * 60 * 1000;
      const timeoutSet = setTimeout(function() {
        console.log(time);
        if (newMsg) {
          ctx.reply(newMsg);
        } else {
          ctx.reply("Time is over. How are you doing?");
        }
      }, time);
      bot.hears("/cancel", ctx => {
        stop();
        ctx.reply("Cancel");
      });
    } else {
      ctx.reply(e);
    }
  });
  bot.hears("/180", ctx => {
    const e = "Oops...Something goes wrong";
    const timeout = 180;
    console.log(timeout);

    if (timeout) {
      function stop() {
        clearTimeout(timeoutSet);
      }
      ctx.reply(
        "Message " +
          newMsg +
          "- will be sent to you after " +
          timeout +
          " minutes"
      );
      const time = timeout * 60 * 1000;
      const timeoutSet = setTimeout(function() {
        console.log(time);
        if (newMsg) {
          ctx.reply(newMsg);
        } else {
          ctx.reply("Time is over. How are you doing?");
        }
      }, time);
      bot.hears("/cancel", ctx => {
        stop();
        ctx.reply("Cancel");
      });
    } else {
      ctx.reply(e);
    }
  });
  bot.hears("/240", ctx => {
    const e = "Oops...Something goes wrong";
    const timeout = 240;
    console.log(timeout);

    if (timeout) {
      function stop() {
        clearTimeout(timeoutSet);
      }
      ctx.reply(
        "Message " +
          newMsg +
          "- will be sent to you after " +
          timeout +
          " minutes"
      );
      const time = timeout * 60 * 1000;
      const timeoutSet = setTimeout(function() {
        console.log(time);
        if (newMsg) {
          ctx.reply(newMsg);
        } else {
          ctx.reply("Time is over. How are you doing?");
        }
      }, time);
      bot.hears("/cancel", ctx => {
        stop();
        ctx.reply("Cancel");
      });
    } else {
      ctx.reply(e);
    }
  });
});

bot.command("tm", ctx => {
  const e = "Oops...Something goes wrong";
  const msg = ctx.message.text;
  const msgArray = msg.split(" ");

  const newTimeout = msgArray[1];
  console.log(newTimeout);
  msgArray.splice(0, 2);

  const newMsg = msgArray.join(" ");
  console.log(newMsg);

  if (newTimeout > 0) {
    function stop() {
      clearTimeout(timeoutSet);
    }
    ctx.reply(
      "Message " +
        newMsg +
        "- will be sent to you after " +
        newTimeout +
        " minutes"
    );
    const time = newTimeout * 60 * 1000;
    const timeoutSet = setTimeout(function() {
      console.log(time);
      if (newMsg) {
        ctx.reply(newMsg);
      } else {
        ctx.reply("Time is over. How are you doing?");
      }
    }, time);
    bot.hears("/cancel", ctx => {
      stop();
      ctx.reply("Cancel");
    });
  } else {
    ctx.reply(e);
  }
});

bot.launch();
