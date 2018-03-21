import * as check from "ts-api";
const GET = check.GET;

/**
 * some comment
 * @class
 * @property w a parameter called w
 * @someunknowntag ljasljasdljk
 */
interface W1test {
  /**
   * Another comment for the member which is w
   * @integer
   * @minimum 0
   * @maximum 100
   */
  w?:number|null // some other other comment
}

interface W2test { w:string }
interface Xtest { x:string|null }
interface Ytest { y:string }
interface WXtest { w1:W1test }

class test6 {
  /* a comment */
  @GET(1,2,3)
  XXX(w: W1test,x: string,y: number[][]) {
    console.log("howdy");
  }
}

let t:test6 = new test6();
let w1:W1test = {};
let w2:W1test = { w:0 };
let w3:W2test = { w:"0" };
let x1:Xtest = { x:"0" };
let x2:Xtest = { x:null };
let y1:Ytest = { y:"0" };
let y2:Ytest = { y:null };
let z:number[][] = [];

t.XXX(<any>w2,<any>"6",z);
