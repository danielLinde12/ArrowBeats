var currentScene = -1
frameRate(60);


/*
-2 = Game Over Screen
-1 = Pre-Title Screen
0 = Title Screen
1 = Level Select
2 = Help Screen
3 = Gameplay Level 1
4 = Gameplay Level 2
5 = Gameplay Level 3
*/

var a = new Audio("https://daniellinde12.github.io/ArrowBeats/The%20Grand%20Affair%20-%20Coupe%20%20NO%20COPYRIGHT%208-bit%20Music%20(2).mp3")
var b = new Audio("https://daniellinde12.github.io/ArrowBeats/Krayzius%20&%20Brainstorm%20-%20Virtual%20Boy%20%20NO%20COPYRIGHT%208-bit%20Music.mp3")
var c = new Audio("https://daniellinde12.github.io/ArrowBeats/Jeremy%20Blake%20-%20Powerup!%20%20NO%20COPYRIGHT%208-bit%20Music.mp3")
var d = new Audio("https://daniellinde12.github.io/ArrowBeats/Kubbi%20-%20Digestive%20biscuit%20%20NO%20COPYRIGHT%208-bit%20Music.mp3")
var hasBPlayed = false
var hasCPlayed = false
var hasDPlayed = false

var helpScreenBG = getImage("https://daniellinde12.github.io/ArrowBeats/night-in-old-town-chill-lo-fi-background-residential-buildings-2d-cartoon-cityscape-illustration-purple-lofi-wallpaper-desktop-sunset-aesthetic-90s-retro-art-dreamy-vibes-vector.jpg ")
var levelSelectBG = getImage("https://daniellinde12.github.io/ArrowBeats/urban-storefront-at-night-lo-fi-aesthetic-wallpaper-exterior-store-with-tables-vending-machine-2d-cartoon-cityscape-illustration-purple-lofi-background-90s-retro-album-art-chill-vibes-vector.jpg")
var startScreenBG = getImage("https://daniellinde12.github.io/ArrowBeats/observation-desk-chill-lo-fi-background-open-terrace-looking-on-view-buildings-2d-cartoon-cityscape-illustration-purple-lofi-wallpaper-desktop-sunset-aesthetic-90s-retro-art-dreamy-vibes-vector.jpg")
var LevelBG = getImage("https://daniellinde12.github.io/ArrowBeats/night-waterfront-with-streetlights-lo-fi-aesthetic-wallpaper-nighttime-city-quay-glowing-lampposts-2d-cartoon-cityscape-illustration-purple-lofi-background-90s-retro-album-art-chill-vibes-vector.jpg")

var leftArrowColor = [255, 255, 255];
var upArrowColor = [255, 255, 255];
var downArrowColor = [255, 255, 255];
var rightArrowColor = [255, 255, 255];
var hasMissed = false;
var hasAudio1Played = false;
var isLevelInitialized = false;
var isBackButtonVisible = false;
var isTimerInitialized = false;
var isTimerEnded = false; 
var arrows = []
var score = 0
var misses = 0
var gameIsActive = true;
var missHitboxSize = 80; 
var timer;

var timerDurationOne = 235000;
var timerDurationTwo = 225000;
var timerDurationThree = 289000;

var audioDelayOne = 3100
var audioDelayTwo = 1900
var audioDelayThree = 100

var one_p1 = 10
var one_p2 = 4950
var one_p3 = 10620

var two_p1 = 50
var two_p2 = 2690
var two_p3 = 5500
var two_p4 = 8400
var two_p5 = 11280

var three_p1 = 200
var three_p2 = 3750
var three_p3 = 7850
var three_p4 = 11450
var three_p5 = 15080
var three_p6 = 18600
var three_p7 = 22090
var three_p8 = 25850
var three_p9 = 29450
var three_p10 = 33000

var Arrow = function(speed, direction, x, y) {
    this.speed = speed; 
    this.direction = direction; 
    this.isMoving = false; 
    this.x = x; 
    this.y = y; 
    this.hitboxSize = 80; 
    this.checkForMatch = false; 
    this.isActive = true;

};

var ArrowHitbox = new Arrow(5, 'all', 10, 10);
var leftArrowClone = new Arrow(2, 'left', ArrowHitbox.x, ArrowHitbox.y + 300);
var upArrowClone = new Arrow(2, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 400); 
var rightArrowClone = new Arrow(2, 'right', ArrowHitbox.x + 0, ArrowHitbox.y + 500); 
var downArrowClone = new Arrow(2, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 600);

var lvlOneSpeed = 1.515
var lvlTwoSpeed = 2
var lvlThreeSpeed = 3.25

var Level_1 = function() {
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 600 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 940 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1290 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1620 +one_p1))

arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1960 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2280 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2620 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2960 +one_p1))

arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3300 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3450 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3630 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3800 +one_p1))

arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3970 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4120 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4300 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4450 +one_p1))  

arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4630 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4710 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 4770 +one_p1))
  
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4970 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5050 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5120 +one_p1)) 

arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5270 +one_p1 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5370 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5470 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5550 +one_p1))

arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5640 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5720 +one_p1)) 
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5790 +one_p1))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5880 +one_p1)) 

// --------------------------------------------------------------------------- //


arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1000 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1080 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1160 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1260 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1290 +one_p2))


arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1430 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1510 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1580 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1620 +one_p2))


arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1750 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1840 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1910 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1950 +one_p2))


arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2090 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2170 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2230 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2260 +one_p2))


arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2390 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2450 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2530 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2590 +one_p2))

arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2660 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2730 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2820 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2860 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2920 +one_p2))

arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2990 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3060 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3150 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3220 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3260 +one_p2))

arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3310 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3400 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3470 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3540 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3580 +one_p2))



arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3660 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3740 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3820 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3900 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3930 +one_p2))


arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4090 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4170 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4230 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4270 +one_p2))


arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4430 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4520 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 4570 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4610 +one_p2))


arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4770 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4840 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4900 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4930 +one_p2))


arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5060 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5130 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5220 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5280 +one_p2))


arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5430 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5520 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5560 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5620 +one_p2))

arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5690 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5760 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5850 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5900 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5940 +one_p2))

arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5990 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 6080 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 6150 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 6230 +one_p2))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 6270 +one_p2)) 

// ------------------------------------------------------------------------------ //


arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 680 +one_p3 ))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 930 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 960 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1280 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1330 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1610 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1660 +one_p3))

arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1890 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1950 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1980 +one_p3))

arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2070 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2160 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2250 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2280 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2330 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2410 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2480 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2550 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2660 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2700 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2750 +one_p3))  
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2790 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2830 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2870 +one_p3))
arrows.push(new Arrow(lvlOneSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2910 +one_p3))  
arrows.push(new Arrow(lvlOneSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2960 +one_p3)) 
}

var Level_2 = function() {
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 500 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 570 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 640 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 700 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 800 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 880 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 970 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1030 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1110 +two_p1))

arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1200 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1270 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1340 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1400 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1500 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1580 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1670 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1730 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1810 +two_p1))

arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1900 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1970 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2040 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2100 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2200 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2280 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2370 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2430 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2510 +two_p1))

arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2600 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2670 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2740 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2800 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2900 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2980 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3070 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3130 +two_p1))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3210 +two_p1)) 

// -------------------------------------------------------------------------------------//


arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 650 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 700 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 750 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 780 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 850 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 900 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 950 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 980 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1050 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1100 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1150 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1250 +two_p2))

arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1350 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1400 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1450 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1500 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1550 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1600 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1650 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1700 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1750 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1800 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1850 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1950 +two_p2))

arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2050 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2100 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2150 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2200 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2250 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2300 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2350 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2400 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2450 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2500 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2550 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2650 +two_p2))

arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2750 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2800 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2850 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2900 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2950 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3000 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3050 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3100 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3150 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3200 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3250 +two_p2))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3350 +two_p2)) 

// --------------------------------------------------------------------------------- //


arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 800 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 850 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 950 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1100 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1250 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1350 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1450 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1570 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1900 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2000 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2100 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2150 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2200 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2300 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2350 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2450 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2550 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2600 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2750 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2850 +two_p3))

arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3000 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3040 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3080 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3120 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3160 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3200 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3240 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3260 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3300 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3340 +two_p3))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3380 +two_p3)) 

// --------------------------------------------------------------------------------- //


arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 700 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 750 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 850 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1000 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1150 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1200 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1350 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1500 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1800 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1900 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2000 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2050 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2150 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2200 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2300 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2400 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2500 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2600 +two_p4))

arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2660 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2700 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2740 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2780 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2820 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2860 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2900 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2940 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2980 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3020 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3060 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3100 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3140 +two_p4 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3180 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3200 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3240 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3280 +two_p4))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3320 +two_p4)) 

// ---------------------------------------------------------------------------------- //


arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 600 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 650 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 750 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 750 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 950 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1050 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1150 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1300 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1450 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1450 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1750 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1850 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1900 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1950 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2050 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2150 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2250 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2300 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2400 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2400 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2500 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2500 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2650 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2750 +two_p5))

arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2810 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2880 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2930 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2960 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3010 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3020 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3060 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3100 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3120 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3160 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3200 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3240 +two_p5))

arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3370 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3420 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3520 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3520 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3620 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3770 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3870 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4020 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4120 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4470 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4520 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4620 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 4670 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4770 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4870 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4970 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5070 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5170 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5270 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5270 +two_p5))

arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5400 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5440 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5480 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5520 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5540 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5580 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5620 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5620 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5660 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5700 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5740 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5740 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5780 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5820 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5860 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 5880 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 5920 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 5950 +two_p5))
arrows.push(new Arrow(lvlTwoSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 5990 +two_p5)) 
}

var Level_3 = function() {
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 700 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 750 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 800 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 850 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 900 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 950 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1000 +three_p1))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1150 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1200 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1250 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1300 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1350 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1400 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1450 +three_p1))


arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1600 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1650 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1700 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1750 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1800 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1850 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1900 +three_p1))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2050 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2100 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2150 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2200 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2250 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2300 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2350 +three_p1))

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2450 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2500 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2550 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2600 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2650 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2700 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2750 +three_p1))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2950 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3000 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3050 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3100 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3150 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3200 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3250 +three_p1))

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3400 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3450 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3500 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3550 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3600 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3650 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3700 +three_p1))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3850 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3900 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3950 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4000 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4050 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4100 +three_p1))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4150 +three_p1)) 

// ------------------------------------------------------------------------------------- //


arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 750 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 800 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 850 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 900 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 950 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1000 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1050 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1100 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1150 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1200 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1250 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1300 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1350 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1400 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1450 +three_p2))

arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1650 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1700 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1750 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1800 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1850 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1900 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1950 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2000 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2050 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2100 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2150 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2200 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2250 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2300 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2350 +three_p2))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2550 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2600 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2650 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2700 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2750 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2800 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2850 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2900 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2950 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3000 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3050 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3100 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3150 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3200 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3250 +three_p2))

arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3450 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3500 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3550 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3600 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3650 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3700 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3750 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3800 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3850 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3900 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3950 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4000 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 4050 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4100 +three_p2))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4150 +three_p2)) 

// --------------------------------------------------------------------------------- //


arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 700 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 800 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 850 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 950 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1050 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1100 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1200 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1250 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1300 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1350 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1400 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1450 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1500 +three_p3))

arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1600 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1700 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1750 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1850 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1950 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2000 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2100 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2150 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2200 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2250 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2300 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2350 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2400 +three_p3))

arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2500 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2600 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2650 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2750 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2850 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2900 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3000 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3050 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3100 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3150 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3200 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3250 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3300 +three_p3))

arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3400 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3500 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3550 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3650 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3750 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3800 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3900 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3950 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4000 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4050 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4100 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4150 +three_p3))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4200 +three_p3)) 

// ----------------------------------------------------------------------------------- //


arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 700 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 750 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 800 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 850 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 900 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 950 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1000 +three_p4))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1150 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1200 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1250 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1300 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1350 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1400 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1450 +three_p4))


arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1600 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1650 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1700 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1750 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1800 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1850 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1900 +three_p4))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2050 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2100 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2150 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2200 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2250 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2300 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2350 +three_p4))

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2450 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2500 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2550 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2600 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2650 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2700 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2750 +three_p4))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2950 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3000 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3050 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3100 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3150 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3200 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3250 +three_p4))

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3400 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3450 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3500 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3550 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3600 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3650 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3700 +three_p4))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3850 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3900 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3950 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4000 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4010 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4060 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 4110 +three_p4))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4160 +three_p4)) 

// ---------------------------------------------------------------------------------- //

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 600 +three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 650+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 700+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 900+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1050+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1100+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1250+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1350+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1400+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1450+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1500+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1650+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1700+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1750+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1900+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1950+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2000+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2150+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2250+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2300+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2350+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2400+three_p5))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2550+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2600+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2650+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2750+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2900+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2950+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3050+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3150+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3200+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3250+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3300+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3400+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3450+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3500+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3650+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3800+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3850+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3950+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4000+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4050+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4100+three_p5))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4150+three_p5)) 

// ----------------------------------------------------------------------------------- //


arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 700 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 750 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 850 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 850 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1000 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1000 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1150 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1200 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1350 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1350 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1450 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1450 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1550 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1550 +three_p6)) 

arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1650 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1700 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1800 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1800 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2000 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2000 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2150 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2200 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2300 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2300 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2400 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2400 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2500 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2500 +three_p6))

arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2600 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2650 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2750 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2750 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2900 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2900 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3000 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3050 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3150 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3150 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3250 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3250 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3350 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3350 +three_p6))

arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3450 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3500 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3550 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3550 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3750 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3750 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3850 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3900 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 4050 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4050 +three_p6)) 
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4150 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4150 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 4250 +three_p6))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4250 +three_p6)) 

// ----------------------------------------------------------------------------------- //


arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 800 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 850 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 950 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 950 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1150 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1150 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1300 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1350 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1450 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1500 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1550 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1600 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1650 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1700 +three_p7))

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1800 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1850 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1950 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1950 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2100 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2100 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2200 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2250 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2350 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2400 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2450 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2500 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2550 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2600 +three_p7))

arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2700 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2750 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2850 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2850 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3000 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3000 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3100 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3150 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3250 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3300 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3350 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3400 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3450 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3500 +three_p7))

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3600 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3650 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3750 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3750 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3900 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3900 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4000 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 4050 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4150 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4200 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4250 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4300 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4350 +three_p7))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4400 +three_p7)) 

// ---------------------------------------------------------------------------------- //

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 700 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 750 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 800 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 850 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 900 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 950 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1000 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1050 +three_p8))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1150 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1200 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1250 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1300 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1350 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1400 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1450 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1500 +three_p8))

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1600 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1650 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1700 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1750 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1800 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1850 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1900 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1950 +three_p8))
  
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2050 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2100 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2150 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2200 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2250 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2300) +three_p8)
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2350 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2400 +three_p8))

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2450 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2500 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2550 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2600 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2650 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2700 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2750 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2800 +three_p8))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2950 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3000 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3050 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3100 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3150 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3200 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3250 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3300 +three_p8))

arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3400 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3450 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3500 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3550 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3600 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3650 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3700 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3750 +three_p8))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3850 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3900 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3950 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4000 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4050 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4100 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 4150 +three_p8))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4200 +three_p8)) 

// ------------------------------------------------------------------------------------ //


arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 600 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 650 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 750 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 900 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1050 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1100 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1200 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1300 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1350 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1400 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1450 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1550 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1600 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1650 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1800 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1900 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1950 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2100 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2200 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2250 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2300 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2350 +three_p9))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2450 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2500 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2550 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2700 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2850 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2900 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3000 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3100 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3150 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3200 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3250 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3350 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3400 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3450 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3600 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3700 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3750 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3850 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3900 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3950 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4000 +three_p9))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4050 +three_p9)) 

// ---------------------------------------------------------------------------------- //

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 600 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 650 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 750 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 900 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1050 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1100 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1200 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 1300 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1350 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1400 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1450 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 1550 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1600 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1650 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1800 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 1900 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 1950 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2100 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2200 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2250 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2300 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 2350 +three_p10))

arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 2450 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2500 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2550 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2700 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 2850 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 2900 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3000 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3100 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3150 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3200 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3250 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3350 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3400 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3450 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3600 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'down', ArrowHitbox.x-100, ArrowHitbox.y + 3700 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3750) +three_p10)
arrows.push(new Arrow(lvlThreeSpeed, 'up', ArrowHitbox.x+100, ArrowHitbox.y + 3850 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 3900 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 3950 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'left', ArrowHitbox.x, ArrowHitbox.y + 4000 +three_p10))
arrows.push(new Arrow(lvlThreeSpeed, 'right', ArrowHitbox.x, ArrowHitbox.y + 4050 +three_p10)) 
}

var drawScoreAndGameOver = function() {
  
    drawSetArrows(10, 12); 
    animateCloneArrow();

  fill(255);
  textSize(20)
  text("Score: " + score, width - 105, height - 60);
  text("Misses: " + misses, width - 105, height - 35);

};

var resetGame = function() {
  score = 0;
  misses = 0;
  arrows = [];
  gameIsActive = true;
  hasAudioBPlayed = false; 
  b.currentTime = 0; 
  timer = undefined;  
  isLevelInitialized = false;
  ArrowHitbox.x = 10;
  isTimerInitialized = false;
};



var animateCloneArrow = function() {
    for (var i = 0; i < arrows.length; i++) { 
        if (arrows[i].isActive) {
           
            if (arrows[i].y > -60) {
                arrows[i].y -= arrows[i].speed; 
                hasMissed = false;
            } else {
                misses++;
                arrows[i].isActive = false; 
            }

  arrows[i].checkForMatch = (arrows[i].y <= ArrowHitbox.y - 20 + ArrowHitbox.hitboxSize / 1.5 &&
                            arrows[i].y >= ArrowHitbox.y - 20 - ArrowHitbox.hitboxSize / 1.5 &&
                            arrows[i].x >= ArrowHitbox.x - 100 - ArrowHitbox.hitboxSize / 1.5 &&
                            arrows[i].x <= ArrowHitbox.x + 100 + ArrowHitbox.hitboxSize / 1.5);
            
            fill(226, 226, 226); 
            if (arrows[i].direction === 'left') {
                triangle(arrows[i].x + 5, arrows[i].y + 40, 
                         arrows[i].x + 50, arrows[i].y + 10, 
                         arrows[i].x + 50, arrows[i].y + 70);
                rect(arrows[i].x + 50, arrows[i].y + 34, 20, 15);
            } else if (arrows[i].direction === 'up') { 
                triangle(arrows[i].x + 95, arrows[i].y + 50, 
                         arrows[i].x + 135, arrows[i].y + 10, 
                         arrows[i].x + 175, arrows[i].y + 50);
                rect(arrows[i].x + 127, arrows[i].y + 50, 15, 20);
            } else if (arrows[i].direction === 'right') { 
                triangle(arrows[i].x + 320, arrows[i].y + 10, 
                         arrows[i].x + 320, arrows[i].y + 70, 
                         arrows[i].x + 365, arrows[i].y + 40);
                rect(arrows[i].x + 300, arrows[i].y + 34, 20, 15);
            } else if (arrows[i].direction === 'down') { 
                triangle(arrows[i].x + 195, arrows[i].y + 30, 
                         arrows[i].x + 235, arrows[i].y + 70, 
                         arrows[i].x + 275, arrows[i].y + 30);
                rect(arrows[i].x + 228, arrows[i].y + 10, 15, 20);
            }
            
        }
    }
};

var keyPressed = function() {
  
    if (key === 'a') {
        setArrowPressed.left = true;
    } else if (key === 'w') {
      setArrowPressed.up = true
    } else if (key === 'd') {
        setArrowPressed.right = true;
    } else if (key === 's') {
        setArrowPressed.down = true;
    }

    var isMiss = true; 

    for (var i = 0; i < arrows.length; i++) {
        if (arrows[i].isActive) {
            
            if (arrows[i].checkForMatch) {
                isMiss = false; 
                break;
            }
        }
    }

    
    if (isMiss) {
        misses++;
    }

    
    for (var j = 0; j < arrows.length; j++) {
        if (arrows[j].isActive) {
            var keyMatched = (arrows[j].direction === 'left' && key === 'a') ||
                             (arrows[j].direction === 'up' && key === 'w') ||
                             (arrows[j].direction === 'right' && key === 'd') ||
                             (arrows[j].direction === 'down' && key === 's');

            if (keyMatched && arrows[j].checkForMatch) {
                arrows[j].isActive = false;
                score++;
                return; 
            }
        }
    }
};

var keyReleased = function () {
  if (key === 'a') {
        setArrowPressed.left = false;
    } else if (key === 'w') {
        setArrowPressed.up = false;
    } else if (key === 'd') {
        setArrowPressed.right = false;
    } else if (key === 's') {
        setArrowPressed.down = false;
    }
}

var setArrowPressed = {
    left: false,
    up: false,
    right: false,
    down: false
};


var drawSetArrows = function(x, y) {
    ArrowHitbox.y = y + 40;
    ArrowHitbox.x = x + 38;

    // Left Arrow
    if (setArrowPressed.left) {
      fill(0,255,0) 
      } else {
      fill(leftArrowColor[0],leftArrowColor[1],leftArrowColor[2])
      }
    
    strokeWeight(5);
    triangle(x + 5, y + 40, x + 50, y + 10, x + 50, y + 70);
    rect(x + 50, y + 34, 20, 15);
    
    strokeWeight(0);
    rect(x + 44, y + 36.5, 15, 10);
    
    // Up Arrow
    if (setArrowPressed.up) {
      fill(0,255,0) 
      } else {
      fill(upArrowColor[0],upArrowColor[1],upArrowColor[2])
      }
    
    strokeWeight(5);
    triangle(x + 195, y + 50, x + 235, y + 10, x + 275, y + 50);
    rect(x + 227, y + 50, 15, 20);
    
    strokeWeight(0);
    rect(x + 229.5, y + 39, 10, 15);
    
    // Down Arrow
    if (setArrowPressed.down) {
      fill(0,255,0) 
      } else {
      fill(downArrowColor[0],downArrowColor[1],downArrowColor[2])
      }
    
    strokeWeight(5);
    triangle(x + 95, y + 30, x + 135, y + 70, x + 175, y + 30);
    rect(x + 128, y + 10, 15, 20);
    
    strokeWeight(0);
    rect(x + 130.5, y + 20, 10, 15);
    
    // Right Arrow
    if (setArrowPressed.right) {
      fill(0,255,0) 
      } else {
      fill(rightArrowColor[0],rightArrowColor[1],rightArrowColor[2])
      }
    
    strokeWeight(5);
    triangle(x + 320, y + 10, x + 320, y + 70, x + 365, y + 40);
    rect(x + 300, y + 34, 20, 15);
    
    strokeWeight(0);
    rect(x + 310, y + 36.6, 15, 10);
};

var Arrow = function(speed, direction, x, y) {
    this.speed = speed; 
    this.direction = direction; 
    this.isMoving = false; 
    this.x = x; 
    this.y = y; 
    this.hitboxSize = 80; 
    this.checkForMatch = false; 
    this.isActive = true;

};












// -------------------------------------------------------------------------------- //

var drawAvatar = function(avatar)
  {
    var ratio = avatar.h/100
fill(270,210,172)
rect(avatar.x-18,avatar.y-56,34,32)
    
fill(255,219,172)
ellipse(avatar.x-0*ratio,avatar.y-100*ratio,90*ratio,100*ratio)//head

//fill(255)
//arc(avatar.x+68*ratio, avatar.y-30*ratio, 90*ratio, 140*ratio, PI, TWO_PI); // Draws the arc
//arc(avatar.x-69*ratio, avatar.y-30*ratio, 90*ratio, 140*ratio, PI, TWO_PI); // Draws the arc

//eye area
fill(255)
ellipse(avatar.x-20*ratio,avatar.y-110*ratio,20*ratio,10*ratio)//whites
ellipse(avatar.x+20*ratio,avatar.y-110*ratio,20*ratio,10*ratio)//whites
fill(95, 158, 160)
ellipse(avatar.x-20*ratio,avatar.y-110*ratio,10*ratio,7*ratio)//blue
ellipse(avatar.x+18*ratio,avatar.y-110*ratio,10*ratio,7*ratio)//blue
fill(0)
ellipse(avatar.x+18*ratio,avatar.y-110*ratio,4*ratio,4*ratio)//black
ellipse(avatar.x-20*ratio,avatar.y-110*ratio,4*ratio,4*ratio)//black
arc(avatar.x-22*ratio, avatar.y-115*ratio, 20*ratio, 7*ratio, PI, TWO_PI );
arc(avatar.x+21*ratio, avatar.y-115*ratio, 20*ratio, 7*ratio, PI, TWO_PI );

//mouth
arc(avatar.x+1*ratio, avatar.y-72*ratio, 19*ratio, 3*ratio, PI, TWO_PI );

//body
fill(0)
rect(avatar.x-40*ratio,avatar.y-40*ratio,80*ratio,100*ratio)
ellipse(avatar.x-36*ratio,avatar.y+4*ratio,60*ratio,90*ratio)
ellipse(avatar.x+34*ratio,avatar.y+4*ratio,60*ratio,90*ratio)

//design
fill(255, 0, 0); 
triangle(avatar.x-30*ratio, avatar.y-30*ratio, avatar.x+30*ratio, avatar.y-30*ratio, avatar.x-0*ratio, avatar.y+30*ratio); 
fill(0)
ellipse(avatar.x-0*ratio,avatar.y-10*ratio,40*ratio,40*ratio)


//initals
fill(255)
rect(avatar.x-50*ratio, avatar.y-29*ratio, 5*ratio, 40*ratio); 
arc(avatar.x-40*ratio, avatar.y-9*ratio, 40*ratio, 40*ratio, -PI/2, PI/2);

rect(avatar.x+17*ratio, avatar.y-7*ratio, 5*ratio, 40*ratio); 
rect(avatar.x+27*ratio, avatar.y+27*ratio, 31*ratio, 5*ratio); 

//nose
fill(0)
rect(avatar.x-6*ratio,avatar.y-103*ratio,8*ratio,1*ratio)
rect(avatar.x+1*ratio,avatar.y-105*ratio,1*ratio,12*ratio)


//hat
fill(0)
rect(avatar.x-42*ratio,avatar.y-130*ratio,3*ratio,50*ratio)
rect(avatar.x+42*ratio,avatar.y-130*ratio,3*ratio,50*ratio)
fill(66, 147, 91)
arc(avatar.x+1*ratio, avatar.y-126*ratio, 100*ratio, 67*ratio, PI, TWO_PI );
fill(157, 100, 34)

//ears
fill(255,219,172)
ellipse(avatar.x-43*ratio,avatar.y-101*ratio,10*ratio,20*ratio)
ellipse(avatar.x+45*ratio,avatar.y-101*ratio,10*ratio,20*ratio)
  }
// ------------------------------------------------------------------------------- //
var drawMe = function (scale,x,y) {
  fill(0,0,0);
  noStroke();
//body
fill(0,0,0);
rect(x+100*scale,y+280*scale,160*scale,50*scale); 
rect(x+145*scale,y+250*scale,70*scale,70*scale);

//head
fill(183, 146, 105);
rect(x+130*scale,y+110*scale,100*scale,130*scale); 
rect(x+110*scale,y+170*scale,20*scale,40*scale);
rect(x+230*scale,y+170*scale,20*scale,40*scale);
rect(x+165*scale,y+240*scale,30*scale,30*scale);

//hair
fill(26, 25, 24);
rect(x+115*scale,y+100*scale,20*scale,60*scale);
rect(x+220*scale,y+100*scale,20*scale,60*scale);
rect(x+115*scale,y+100*scale,120*scale,30*scale);
rect(x+134*scale,y+80*scale,90*scale,30*scale);

//glasses
fill(0,0,0)
rect(x+130*scale,y+170*scale,40*scale,34*scale);
rect(x+190*scale,y+170*scale,40*scale,34*scale);
rect(x+120*scale,y+175*scale,120*scale,10*scale);

//face (and eyes)
fill(183, 146, 105);
rect(x+133*scale,y+172*scale,35*scale,30*scale);
rect(x+192*scale,y+172*scale,35*scale,30*scale);

fill(0,0,0);
ellipse(x+150*scale,y+187*scale,30*scale);
ellipse(x+210*scale,y+187*scale,30*scale);

//nose 
fill(126, 97, 66);
triangle(x+180*scale,y+200*scale,x+170*scale,y+210*scale,x+190*scale,y+210*scale);

//initials
fill(255,255,255);
textSize(30*scale)
text("NS",x+160*scale,y+310*scale) 
}

// ------------------------------------------------------------------------------- //

class Button {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function () {};
    this.color = config.color || color(0, 234, 255);
    this.textSize = config.textSize || 19;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(this.textSize);
    textAlign(LEFT, TOP);
    text(this.label, this.x + 10, this.y + this.height / 4);
  }

  isMouseInside() {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    );
  }

  handleMouseClick() {
    if (this.isMouseInside()) {
      this.onClick();
    }
  }
}


var helpButton = new Button({
  x: 330,
  y: 330,
  width: 60,
  height: 45,
  color: color(255,255,255),
  textSize: 30,
  label:"⚙️",
  onClick:function(){
    currentScene = 2
  },
});

var startButton = new Button({
  x: 130,
  y: 330,
  width: 115,
  color: color(255,255,255,240),
  textSize:30,
  label: " PLAY",
  onClick: function(){
    currentScene = 1
  },
  
});

var PreStartButton = new Button({
  x: 134,
  y: 170,
  width: 115,
  color: color(255,255,255,240),
  textSize:30,
  label: "START",
  onClick: function(){
    strokeWeight(1)
    currentScene = 0
    a.currentTime = 0
    a.play();
  },
  
});

var backButton = new Button({
  x: 20,
  y: 330,
  width: 80,
  height: 50,
  label: "BACK",
  color: color(255,255,255,250),
  textSize: 20,
  onClick: function() {
    currentScene = 0;
  }
});

var levelBackButton = new Button({
  x: 155,
  y: 100,
  width: 80,
  height: 50,
  label: "BACK",
  color: color(255,255,255,250),
  textSize: 20,
  onClick: function() {
    resetGame();
    a.play();
    currentScene = 0;
  }
});

var leveloneButton = new Button({
  x: 65,
  y: 110,
  width: 50,
  height: 40,
  color: color(0,255,0,),
  label: " ",
  onClick: function(){
    a.pause();   
    currentScene = 3
    isLevelInitialized = false;
  }
  
});

var leveltwoButton = new Button({
  x: 275,
  y: 110,
  width: 50,
  height: 40,
  color: color(0,255,0,),
  label: " ",
  onClick: function(){
    a.pause();   
    currentScene = 4
    isLevelInitialized = false;
  }
  
});

var levelthreeButton = new Button({
  x: 170,
  y: 290,
  width: 50,
  height: 40,
  color: color(0,255,0,),
  label: " ",
  onClick: function(){
    a.pause();   
    currentScene = 5
    isLevelInitialized = false;
  }
  
});

var drawLevelOneButton = function() {
  leveloneButton.draw(); 
}

var drawLevelTwoButton = function() {
  leveltwoButton.draw(); 
}

var drawLevelThreeButton = function() {
  levelthreeButton.draw(); 
}

var drawGameOverScreen = function() {
  background(0); 
  fill(255, 0, 0); 
  textSize(48);
  textAlign(CENTER);
  text("Too Many Misses!", width / 2, height / 2 - 20); 
};

var drawLevelSelectBG = function() {
  var draw = function () {
    strokeWeight(1)
    image(levelSelectBG, 0, 0, width, height);
    backButton.draw()
    
    fill(200,200,200,190)
    rect(40,40,100,130)
    rect(250,40,100,130)
    rect(145,220,100,130)


    // !!! TESTING BUTTONS !!!
    fill(0,0,0)
    textSize(30)
    text("1",80,60)
    text("2",290,60)
    text("3",185,240)
    textSize(15)
    text("Brainstorm", 54,90)
    text("Powerup", 270,90)
    text("Critical", 171,271)
    textSize(10)
    
  }
  draw();
}

var drawStartScreenBG = function () {
  var draw = function () {
    image(startScreenBG, 0, 0, width, height);
    strokeWeight(1)
    fill(255,255,255)
    textSize(45)
    text("Arrow Beats ♫ ♪",40,30)
  }
  draw();
}

var drawHelpScreenBG = function () {
  var draw = function () {
    image(helpScreenBG, 0, 0, width, height);
    textSize(30)
    fill(255,255,255)
    strokeWeight(1)
    text("How To Play:", 110,100)
    textSize(20)
    text("Use the WASD to sync up the arrows", 30,250)
    text("when they match up on screen!",60,280)
   
    backButton.draw()
  }
  draw()
}

var PreMenuScreenBG = function () {
  var draw = function () {
    background(0)
    strokeWeight(1)
    PreStartButton.draw();
  }
  draw()
}

var drawLevelOneBG = function() {
  var draw = function () {
    image(LevelBG, 0, 0, width, height);
  }
  draw();
}

mouseClicked = function(){
  if(currentScene === -1){
    PreStartButton.handleMouseClick();
  }
    else if(currentScene === -2){}
  else if(currentScene === 0){
    helpButton.handleMouseClick();
    startButton.handleMouseClick();
  }
  else if(currentScene === 1){
    leveloneButton.handleMouseClick();
    leveltwoButton.handleMouseClick();
    levelthreeButton.handleMouseClick();
    backButton.handleMouseClick();
  }
  else if(currentScene === 2){
    backButton.handleMouseClick();
  }
  else if( currentScene === 3){
    levelBackButton.handleMouseClick();
  } 
  else if(currentScene === 4){
    levelBackButton.handleMouseClick();
  }
  else if(currentScene === 5){
    levelBackButton.handleMouseClick();
  }
};

draw = function(){
    if (currentScene === -2) {
      drawGameOverScreen();
    }
  
  if (currentScene === -1) {
    PreMenuScreenBG();
  }
    if (currentScene === 0) {
      drawStartScreenBG()
      helpButton.draw();
      startButton.draw();
    }
  else if (currentScene === 1) {
    drawLevelSelectBG();
    drawLevelOneButton();
    drawLevelTwoButton();
    drawLevelThreeButton();
  }
  else if (currentScene === 2) {
    drawHelpScreenBG();
    drawMe(0.35, 290, 280);
    drawAvatar({ x: 270, y: 385, h: 50 });
  }
  else if (currentScene === 3) { //LEVEL 1
    if (!isTimerInitialized) {
      timer = timerDurationOne;
      isTimerInitialized = true;
    }
    if (!isLevelInitialized) {
      Level_1();
      isLevelInitialized = true;
      timer = timerDurationOne;
      hasBPlayed = false;
      isTimerEnded = false;
    }
    drawLevelOneBG();
    drawScoreAndGameOver();
    animateCloneArrow();
  }
    
    if (misses >= 30) {
    currentScene = -2; 
    resetGame(); 
    isBackButtonVisible = true;
  }

    if (timer > 0) {
      timer -= 1000 / frameRate(); 
    } else {
      isBackButtonVisible = true;
      b.pause(); 
      b.currentTime = 0; 
      timer = undefined; 
      isTimerEnded = true;
    }

    if (currentScene === 3 && isTimerEnded) {
      levelBackButton.draw();
        } else {
        
        if (currentScene !== 3) {
            hasBPlayed = false; 
            isBackButtonVisible = false; 
        }
    }
  if (currentScene === 3) {
    if (!hasBPlayed) {
            setTimeout(function() {
                b.currentTime = 0; 
                b.play(); 
            }, audioDelayOne);
            hasBPlayed = true; 
        }
  } else {
        if (currentScene !== 3) {
            hasBPlayed = false; 
        }
    }
    if (currentScene === 4) { //LEVEL 2
      if (!isTimerInitialized) {
      timer = timerDurationTwo;
      isTimerInitialized = true;
    }
      if (!isLevelInitialized) {
        Level_2();
        isLevelInitialized = true;
        timer = timerDurationTwo;
        hasCPlayed = false;
        isTimerEnded = false;
      }
    drawLevelOneBG();
    drawScoreAndGameOver();
    animateCloneArrow();
  }
  if (misses >= 25) {
    currentScene = -2; 
    resetGame(); 
    isBackButtonVisible = true;
  }

    if (timer > 0) {
      timer -= 1000 / frameRate(); 
    } else {
      isBackButtonVisible = true;
      c.pause(); 
      c.currentTime = 0; 
      timer = undefined; 
      isTimerEnded = true;
    }

    if (currentScene === 4 && isTimerEnded) {
      levelBackButton.draw();
        } else {
        
        if (currentScene !== 4) {
            hasCPlayed = false; 
            isBackButtonVisible = false; 
        }
    }
  if (currentScene === 4) {
    if (!hasCPlayed) {
            setTimeout(function() {
                c.currentTime = 0; 
                c.play(); 
            }, audioDelayTwo);
            hasCPlayed = true; 
        }
  } else {
        if (currentScene !== 4) {
            hasCPlayed = false; 
        }
    }
    if (currentScene === 5) { //LEVEL 3
      if (!isTimerInitialized) {
      timer = timerDurationThree;
      isTimerInitialized = true;
    }
      if (!isLevelInitialized) {
        Level_3();
        isLevelInitialized = true;
        timer = timerDurationThree;
        hasDPlayed = false;
        isTimerEnded = false;
      }
    drawLevelOneBG();
    drawScoreAndGameOver();
    animateCloneArrow();
  }
  if (misses >= 20) {
    currentScene = -2; 
    resetGame(); 
    isBackButtonVisible = true;
  }

    if (timer > 0) {
      timer -= 1000 / frameRate(); 
    } else {
      isBackButtonVisible = true;
      d.pause(); 
      d.currentTime = 0; 
      timer = undefined; 
      isTimerEnded = true;
    }

    if (currentScene === 5 && isTimerEnded) {
      levelBackButton.draw();
        } else {
        
        if (currentScene !== 5) {
            hasDPlayed = false; 
            isBackButtonVisible = false; 
        }
    }
  if (currentScene === 5) {
    if (!hasDPlayed) {
            setTimeout(function() {
                d.currentTime = 0; 
                d.play(); 
            }, audioDelayThree);
            hasDPlayed = true; 
        }
  } else {
        if (currentScene !== 5) {
            hasDPlayed = false; 
        }
    }
  
      };

