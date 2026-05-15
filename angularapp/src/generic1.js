class Pair<T>{
	private first:T;
	private second:T;
	constructor(first:T,second:T){
		this.first=first;
		this.second=second;
	}
}

var pair1=new Pair<number>(12,55)
var pair2=new Pair<string>("hello","world")
console.log(pair1)
console.log(pair2)

function identity<T>(a:T):T{
    return a;
}

var var1=identity<string>("hello");
var var2=identity<number>(23);
var var3=identity<any>({x:10,y:20});
console.log(var1)
console.log(var2)
console.log(var3)
