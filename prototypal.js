/*
  prototypal
  A prototypal pattern use object as constructor very straight forward
  with key method "create" that handle on creating a new instance of the constructor
  and new instance will inherit all the constructor's keys.

  example of "create" method :
  //create: function create(values) { // 0
  //  var instance = Object.create(this); // 1, 2
  //  Object.keys(values).forEach(function(key){ // 3
  //    instance[key] = values[key]; // 4
  //  });
  //  return instance; // 5
  //}

  (0) take parameters "values", the "values" will be an object key
      eg: {a:1, b:2}, and will be stored in "values"

  (1) create local variable "instance" for the new instance that will be created

  (2) Object.create for creating new instance from the constructor object

  (3) Object.keys will basically take all keys in "values" and stores in array
      use "forEach" method to iterate keys inside array build by Object.keys
      every keys will be assign in param "key"

  (4) assign the key into the new instance

  (5) return the variable instance so this method will act like new value as object

  example of use "create" method:

  // const Parent = {
  //   create: function create(values) {
  //     var instance = Object.create(this);
  //     Object.keys(values).forEach(function(key){
  //       instance[key] = values[key];
  //     });
  //     return instance;
  //   },
  //   name: "parent",
  //   sayName: function sayName(){
  //     console.log("name: "+this.name); // name: parent
  //   }
  // };

  // var child = Parent.create({
  //   name: "child",
  //   parent: Parent.name
  // });

  // child.sayName(); // name: child
  // console.log(child.parent); // parent
*/

const Parent = {
  create(values) {
    var instance = Object.create(this);
    instance.mode = "Instance";
    Object.keys(values).forEach(function(key){
      instance[key] = values[key];
    });
    return instance
  },
  name: "Parent",
  inVer: "Main",
  ver: "1.0.Parent",
  type: "Malware",
  environtment: 6, // 6 is the environtment version
  checkStat(arg) {
    if(arg == "type"){
      console.log("type: "+this.type);
    }else if(arg == "environtment"){
      console.log("environtment: "+this.environtment)
    }else{
      console.log("type: "+this.type+"\nenvirontment: "+this.environtment)
    }
  },
  defaultMode() {
    console.log("this Object "+this.name+" "+this.ver+"\n"+this.mode+" of "+this.inVer);
  },
  act(a, b) {
    console.log(a + b+" located at "+__dirname)
  }
};

var child1 = Parent.create({
  name: "child1",
  inVer: Parent.ver,
  ver: "1.0.child1"
});

var tchild1 = Parent.create({
  name: "tchild1",
  inVer: Parent.ver,
  ver: "1.0.tchild1"
});

var child2 = child1.create({
  name: "child2",
  inVer: child1.ver,
  ver: "1.0.child2"
});

console.log(child2.checkStat()+" "+child2.defaultMode()+" END\n");
console.log(child1.checkStat()+" "+child1.defaultMode()+" END\n");
console.log(tchild1.checkStat()+" "+tchild1.defaultMode()+" END\n");
console.log(Parent.checkStat()+" "+Parent.defaultMode()+" END\n");

child2.act(2, 2);
child1.act(5, 7);
