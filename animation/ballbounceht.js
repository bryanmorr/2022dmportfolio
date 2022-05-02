(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.pexelskostiantynstupak190340 = function() {
	this.initialize(img.pexelskostiantynstupak190340);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5184,3456);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pexelskostiantynstupak190340();
	this.instance.setTransform(0,0,0.1885,0.1885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,977.1,651.4), null);


(lib.Surface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EhCfAHXIAAutMCE/AAAIAAOtg");
	this.shape.setTransform(425.625,47.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,851.3,94.2);


(lib.Ball3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#0000FF","#000000"],[0,1],0,0,0,0,0,27.4).s().p("Ai+C/QhQhPAAhwQAAhvBQhPQBPhQBvAAQBwAABPBQQBQBPgBBvQABBwhQBPQhPBQhwgBQhvABhPhQg");
	this.shape.setTransform(27.05,27.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.1,54.1);


(lib.Ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#000000"],[0,1],-2,-20,0,-2,-20,96.9).s().p("AoZIaQjgjfAAk7QAAk7DgjeQDejgE7AAQE7AADfDgQDgDegBE7QABE7jgDfQjfDgk7gBQk7ABjejgg");
	this.shape.setTransform(76.15,76.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.3,152.3);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Ball3("synched",0);
	this.instance.setTransform(27.1,27.1,1,1,0,0,0,27.1,27.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEPAAQAABwhQBPQhPBQhwAAQhvAAhQhQQhPhPAAhwQAAhvBPhQQBQhPBvAAQBwAABPBPQBQBQAABvg");
	this.shape.setTransform(27.05,27.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,56.1,56.1), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Surface("synched",0);
	this.instance.setTransform(425.6,47.1,1,1,0,0,0,425.6,47.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhCfgHWMCE/AAAIAAOtMiE/AAAg");
	this.shape.setTransform(425.625,47.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,853.3,96.2), null);


(lib.BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BG
	this.instance = new lib.Symbol1();
	this.instance.setTransform(488.5,325.7,1,1,0,0,0,488.5,325.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,977.1,651.4);


(lib.Ball1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Ball("synched",0);
	this.instance.setTransform(76.2,76.2,1,1,0,0,0,76.2,76.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.3,152.3);


// stage content:
(lib.ballbounceht = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ball2
	this.instance = new lib.Symbol3();
	this.instance.setTransform(975.5,64.15,1,1,0,0,0,27.1,27.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({scaleX:1.0612,scaleY:1.0612,x:960.1,y:92.15},0).wait(1).to({scaleX:1.1223,scaleY:1.1223,x:944.05,y:119.85},0).wait(1).to({scaleX:1.1835,scaleY:1.1835,x:927.55,y:147.25},0).wait(1).to({scaleX:1.2446,scaleY:1.2446,x:910.55,y:174.35},0).wait(1).to({scaleX:1.3058,scaleY:1.3058,x:892.8,y:201},0).wait(1).to({scaleX:1.367,scaleY:1.367,x:874,y:226.85},0).wait(1).to({scaleX:1.4281,scaleY:1.4281,x:851.95,y:249.9},0).wait(1).to({scaleX:1.4893,scaleY:1.4893,x:825.1,y:267.2},0).wait(1).to({scaleX:1.5504,scaleY:1.5504,x:795.8,y:280},0).wait(1).to({scaleX:1.6116,scaleY:1.6116,x:764.3,y:284.2},0).wait(1).to({scaleX:1.6727,scaleY:1.6727,x:735.7,y:270.9},0).wait(1).to({scaleX:1.7339,scaleY:1.7339,x:711.1,y:250.5},0).wait(1).to({scaleX:1.7951,scaleY:1.7951,x:688.5,y:227.9},0).wait(1).to({scaleX:1.8562,scaleY:1.8562,x:667.8,y:203.45},0).wait(1).to({scaleX:1.9174,scaleY:1.9174,x:649.4,y:177.25},0).wait(1).to({scaleX:1.9785,scaleY:1.9785,x:633.85,y:149.35},0).wait(1).to({scaleX:2.0397,scaleY:2.0397,x:620,y:120.55},0).wait(1).to({scaleX:2.1009,scaleY:2.1009,x:606.95,y:91.35},0).wait(1).to({scaleX:2.162,scaleY:2.162,x:594.45,y:61.9},0).wait(1).to({scaleX:2.2232,scaleY:2.2232,x:582.35,y:32.3},0).wait(1).to({scaleX:2.2843,scaleY:2.2843,x:570.65,y:2.5},0).wait(1).to({scaleX:2.3455,scaleY:2.3455,x:559.25,y:-27.4},0).wait(1).to({scaleX:2.4067,scaleY:2.4067,x:548.5,y:-57.5},0).wait(1));

	// Ball
	this.instance_1 = new lib.Ball1("synched",0);
	this.instance_1.setTransform(34.1,-148.1,1,1,0,0,0,76.2,76.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.9806,scaleY:0.9806,x:54.2,y:-98.7},0).wait(1).to({scaleX:0.9612,scaleY:0.9612,x:74.85,y:-49.45},0).wait(1).to({scaleX:0.9418,scaleY:0.9418,x:95.95,y:-0.5},0).wait(1).to({scaleX:0.9224,scaleY:0.9224,x:117.8,y:48.35},0).wait(1).to({scaleX:0.903,scaleY:0.903,x:141,y:96.3},0).wait(1).to({scaleX:0.8836,scaleY:0.8836,x:168.95,y:141.75},0).wait(1).to({scaleX:0.8642,scaleY:0.8642,x:199.3,y:185.7},0).wait(1).to({scaleX:0.8448,scaleY:0.8448,x:232.2,y:227.7},0).wait(1).to({scaleX:0.8254,scaleY:0.8254,x:271.45,y:263.55},0).wait(1).to({scaleX:0.806,scaleY:0.806,x:320.3,y:284.55},0).wait(1).to({scaleX:0.7866,scaleY:0.7866,x:372.7,y:294.3},0).wait(1).to({scaleX:0.7672,scaleY:0.7672,x:424,y:283.45},0).wait(1).to({scaleX:0.7478,scaleY:0.7478,x:467.95,y:253.15},0).wait(1).to({scaleX:0.7284,scaleY:0.7284,x:509.85,y:220.15},0).wait(1).to({scaleX:0.7091,scaleY:0.7091,x:550.95,y:186.05},0).wait(1).to({scaleX:0.6897,scaleY:0.6897,x:591.45,y:151.35},0).wait(1).to({scaleX:0.6703,scaleY:0.6703,x:631.65,y:116.15},0).wait(1).to({scaleX:0.6509,scaleY:0.6509,x:671.55,y:80.7},0).wait(1).to({scaleX:0.6315,scaleY:0.6315,x:711.15,y:45},0).wait(1).to({scaleX:0.6121,scaleY:0.6121,x:750.65,y:9},0).wait(1).to({scaleX:0.5927,scaleY:0.5927,x:789.8,y:-27.2},0).wait(1).to({scaleX:0.5733,scaleY:0.5733,x:828.8,y:-63.7},0).wait(1).to({scaleX:0.5539,scaleY:0.5539,x:867.3,y:-100.7},0).to({_off:true},1).wait(24));

	// Surface
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(-97.15,501.8,1,1,0,0,0,425.6,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-78.95,y:492.65},0).wait(1).to({x:-60.8,y:483.5},0).wait(1).to({x:-42.6,y:474.35},0).wait(1).to({x:-24.45,y:465.2},0).wait(1).to({x:-6.25,y:456.05},0).wait(1).to({x:11.9,y:446.9},0).wait(1).to({x:30.1,y:437.75},0).wait(1).to({x:48.25,y:428.6},0).wait(1).to({x:66.45,y:419.45},0).wait(1).to({x:84.6,y:410.3},0).wait(1).to({x:102.8,y:401.15},0).wait(1).to({x:108.6,y:406.1},0).wait(1).to({x:114.4,y:411.05},0).wait(1).to({x:120.2,y:416},0).wait(1).to({x:126,y:420.95},0).wait(1).to({x:131.8,y:425.9},0).wait(1).to({x:137.55,y:430.8},0).wait(1).to({x:167.4,y:426.5},0).wait(1).to({x:197.25,y:422.2},0).wait(1).to({x:227.05,y:417.9},0).wait(1).to({x:256.9,y:413.6},0).wait(1).to({x:286.75,y:409.25},0).wait(1).to({x:316.55,y:404.95},0).wait(1).to({x:346.4,y:400.65},0).wait(1).to({x:376.25,y:396.35},0).wait(1).to({x:406.05,y:392.05},0).wait(1).to({x:435.85,y:387.7},0).wait(1).to({x:465.65,y:383.4},0).wait(1).to({x:495.5,y:379.1},0).wait(1).to({x:525.35,y:374.8},0).wait(1).to({x:555.15,y:370.5},0).wait(1).to({x:585,y:366.15},0).wait(1).to({x:614.85,y:361.85},0).wait(1).to({x:644.65,y:357.55},0).wait(1).to({x:674.5,y:353.25},0).wait(1).to({x:704.35,y:348.95},0).wait(1).to({x:734.15,y:344.6},0).wait(1).to({x:764,y:340.3},0).wait(1).to({x:793.8,y:336},0).wait(1).to({x:823.65,y:331.7},0).wait(1).to({x:853.5,y:327.4},0).wait(1).to({x:883.3,y:323.05},0).wait(1).to({x:913.15,y:318.75},0).wait(1).to({x:943,y:314.45},0).wait(1).to({x:972.8,y:310.15},0).wait(1).to({x:1002.65,y:305.85},0).wait(1).to({x:1032.5,y:301.55},0).wait(1));

	// BG
	this.instance_3 = new lib.BG("synched",0);
	this.instance_3.setTransform(181.05,314.2,1.5925,1.5925,0,0,0,487.6,325.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:488.5,regY:325.7,scaleX:1.594,scaleY:1.594,x:197.6,y:315.1,startPosition:1},0).wait(1).to({scaleX:1.5956,scaleY:1.5956,x:212.65,y:315.3,startPosition:2},0).wait(1).to({scaleX:1.5971,scaleY:1.5971,x:227.65,y:315.45,startPosition:3},0).wait(1).to({scaleX:1.5986,scaleY:1.5986,x:242.75,y:315.6,startPosition:4},0).wait(1).to({scaleX:1.6001,scaleY:1.6001,x:257.8,y:315.75,startPosition:5},0).wait(1).to({scaleX:1.6017,scaleY:1.6017,x:272.85,y:315.9,startPosition:6},0).wait(1).to({scaleX:1.6032,scaleY:1.6032,x:287.9,y:316.05,startPosition:7},0).wait(1).to({scaleX:1.6047,scaleY:1.6047,x:303,y:316.2,startPosition:8},0).wait(1).to({scaleX:1.6062,scaleY:1.6062,x:318.05,y:316.35,startPosition:9},0).wait(1).to({scaleX:1.6078,scaleY:1.6078,x:333.1,y:316.5,startPosition:10},0).wait(1).to({scaleX:1.6093,scaleY:1.6093,x:348.15,y:316.65,startPosition:11},0).wait(1).to({scaleX:1.6108,scaleY:1.6108,x:363.2,y:316.8,startPosition:12},0).wait(1).to({scaleX:1.6123,scaleY:1.6123,x:378.25,y:316.95,startPosition:13},0).wait(1).to({scaleX:1.6139,scaleY:1.6139,x:393.3,y:317.1,startPosition:14},0).wait(1).to({scaleX:1.6154,scaleY:1.6154,x:408.4,y:317.25,startPosition:15},0).wait(1).to({scaleX:1.6169,scaleY:1.6169,x:423.45,y:317.35,startPosition:16},0).wait(1).to({scaleX:1.6184,scaleY:1.6184,x:438.5,y:317.5,startPosition:17},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:453.55,y:317.7,startPosition:18},0).wait(1).to({scaleX:1.6215,scaleY:1.6215,x:468.65,y:317.85,startPosition:19},0).wait(1).to({scaleX:1.623,scaleY:1.623,x:483.7,y:318,startPosition:20},0).wait(1).to({scaleX:1.6245,scaleY:1.6245,x:498.75,y:318.15,startPosition:21},0).wait(1).to({scaleX:1.6261,scaleY:1.6261,x:513.85,y:318.3,startPosition:22},0).wait(1).to({scaleX:1.6276,scaleY:1.6276,x:528.85,y:318.45,startPosition:23},0).wait(1).to({scaleX:1.6291,scaleY:1.6291,x:543.9,y:318.6,startPosition:24},0).wait(1).to({scaleX:1.6306,scaleY:1.6306,x:558.95,y:318.75,startPosition:25},0).wait(1).to({scaleX:1.6322,scaleY:1.6322,x:574.05,y:318.9,startPosition:26},0).wait(1).to({scaleX:1.6337,scaleY:1.6337,x:589.1,y:319.05,startPosition:27},0).wait(1).to({scaleX:1.6352,scaleY:1.6352,x:604.15,y:319.2,startPosition:28},0).wait(1).to({scaleX:1.6367,scaleY:1.6367,x:619.25,y:319.35,startPosition:29},0).wait(1).to({scaleX:1.6383,scaleY:1.6383,x:634.3,y:319.5,startPosition:30},0).wait(1).to({scaleX:1.6398,scaleY:1.6398,x:649.35,y:319.6,startPosition:31},0).wait(1).to({scaleX:1.6413,scaleY:1.6413,x:664.35,y:319.75,startPosition:32},0).wait(1).to({scaleX:1.6428,scaleY:1.6428,x:679.45,y:319.9,startPosition:33},0).wait(1).to({scaleX:1.6443,scaleY:1.6443,x:694.5,y:320.05,startPosition:34},0).wait(1).to({scaleX:1.6459,scaleY:1.6459,x:709.55,y:320.25,startPosition:35},0).wait(1).to({scaleX:1.6474,scaleY:1.6474,x:724.65,y:320.4,startPosition:36},0).wait(1).to({scaleX:1.6489,scaleY:1.6489,x:739.7,y:320.55,startPosition:37},0).wait(1).to({scaleX:1.6504,scaleY:1.6504,x:754.75,y:320.7,startPosition:38},0).wait(1).to({scaleX:1.652,scaleY:1.652,x:769.8,y:320.85,startPosition:39},0).wait(1).to({scaleX:1.6535,scaleY:1.6535,x:784.9,y:321,startPosition:40},0).wait(1).to({scaleX:1.655,scaleY:1.655,x:799.9,y:321.15,startPosition:41},0).wait(1).to({scaleX:1.6565,scaleY:1.6565,x:814.9,y:321.3,startPosition:42},0).wait(1).to({scaleX:1.6581,scaleY:1.6581,x:830,y:321.45,startPosition:43},0).wait(1).to({scaleX:1.6596,scaleY:1.6596,x:845.05,y:321.6,startPosition:44},0).wait(1).to({scaleX:1.6611,scaleY:1.6611,x:860.1,y:321.75,startPosition:45},0).wait(1).to({scaleX:1.6626,scaleY:1.6626,x:875.15,y:321.85,startPosition:46},0).wait(1).to({scaleX:1.6642,scaleY:1.6642,x:890.25,y:322,startPosition:47},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,95.7,1818.9,768.3);
// library properties:
lib.properties = {
	id: 'DD188C67CE624AB8B865BEDA5AA5EC1E',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pexelskostiantynstupak190340.jpg", id:"pexelskostiantynstupak190340"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DD188C67CE624AB8B865BEDA5AA5EC1E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;