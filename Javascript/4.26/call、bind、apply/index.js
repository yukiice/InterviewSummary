var name = "花花",
  age = 18;

var Obja = {
  name: "张先生",
  age: this.age,
  func: function (a, b) {
    console.log(this.name + `？` + this.age + `来自` + a + '去往' + b);
  },
};

var ObjB = {
  name: "yukiice",
  age: 20,
};

Obja.func.call(ObjB, "郑州", "杭州");

Obja.func.apply(ObjB, ["郑州", "杭州"]);

Obja.func.bind(ObjB, "郑州", "杭州")();

// 错误
Obja.func.bind(ObjB, ["郑州", "杭州"])();
