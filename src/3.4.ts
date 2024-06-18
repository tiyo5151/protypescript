// type User<T> = {
//     name:string;
//     child:T;
// };

// type Family<Parent,Child> = {
//     mother:Parent
//     father:Parent
//     child:Child
// };

// const obj: Family<number,string> = {
//     mother:0,
//     father:100,
//     child:"1000"
// };

// const obj2:Family={
//     mother:0,
//     father:100,
//     child:"1000"
// }

// type HasName = {
//     name:string;
// };

// type Family<Parent extends HasName,Child extends HasName> = {
//     mother:Parent;
//     father:Parent;
//     child:Child;
// }

// type T = Family<number,string>;

// type Animal = {
//     name:string;
// };
// type Human = {
//     name:string;
//     age:number;
// };

// type T = Family<Animal,Human>;

// type Family<parent extends HasName,Child extends parent> = {
//     mother:parent;
//     father:parent;
//     child:Child;
// };

// type S = Family<Animal,Human>;
// type T = Family<Human,Animal>;

// type Animal = {
//     name:string;
// }
// type Family<Parent = Animal,Child=Animal> = {
//     mother:Parent;
//     father:Parent;
//     child:Child;
// }

// type S = Family<string,string>;
// type T = Family;
// type U = Family<string>;
// type V = Family<,string>;

// type Family<Parent, Child = Animal> = {
//     mother: Parent;
//     father: Parent;
//     child: Child;
//   }

//   type Family<Parent extends HasName,child extends HasName = Animal> = {
//     mother:Parent;
//     father:Parent;
//     child:child;
//   }