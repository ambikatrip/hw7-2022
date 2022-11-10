var video = document.querySelector("#player1");
var slider = document.querySelector("#slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100+ "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate -= 0.1;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate += 0.1;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime+= 10;
	if(video.currentTime == video.duration){
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log(this.innerHTML)
	if(this.innerHTML=="Mute"){
		video.muted=true;
		this.innerHTML="Unmute";
	}else{
		video.muted=false;
		this.innerHTML="Mute";
	}

});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("current value is " + this.value/100)
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML=this.value+"%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});