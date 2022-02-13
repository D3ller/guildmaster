module.exports = (client) => {

  console.log(`${client.user.username} was online !`);
  var Act = [
     `Prefix: g. | Manage Guild `
   ];
   setInterval(function() {
    var Act2 = Act[Math.floor(Math.random()*Act.length)];
    client.user.setActivity(Act2, { type: 'WATCHING' });
   }, 5000);
   };
   