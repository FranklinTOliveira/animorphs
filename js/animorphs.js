let animorphs = new Array("Jake", "Rachel", "Tobias", "Cassie", "Marco", "Ax");

let mainAnimorphBoysSentence = "The main Animorph Boys are "; 

let strangeAnimorphBoysSentence = "The strange Animorph Boys are ";

let animorphGirlsSentence = "The Animorph Girls are ";
			
for (i=0;i<animorphs.length;i++){
	switch(i) {
   		case 0:
     	mainAnimorphBoysSentence+= `${animorphs[i]} `;
     	break;
   		case 1:
     	animorphGirlsSentence+= `${animorphs[i]} `;
     	break;
   		case 2:
     	strangeAnimorphBoysSentence+= `${animorphs[i]} `;
     	break;
   		case 3:
     	animorphGirlsSentence+= `and ${animorphs[i]}.`;
    	break;
   		case 4:
     	mainAnimorphBoysSentence+= `and ${animorphs[i]}.`;
    	break;
   		default:
     	strangeAnimorphBoysSentence+= `and ${animorphs[i]}.`;
		break;
	}

	function addParagraphMAB(){
		let outputDivMAB = document.getElementById("outputMAB");
		outputDivMAB.innerHTML = mainAnimorphBoysSentence;
	}
	addParagraphMAB();
	function addParagraphSAB(){
		let outputDivSAB = document.getElementById("outputSAB");
		outputDivSAB.innerHTML = strangeAnimorphBoysSentence;
	}
	addParagraphSAB();
	function addParagraphAG(){
		let outputDivAG = document.getElementById("outputAG");
		outputDivAG.innerHTML = animorphGirlsSentence;
	}
	addParagraphAG();
}

let animorphsBooks = new Array("The Invasion", "The Visitor", "The Encounter", "The Message",  "The Predator",  "The Capture", "The Stranger", "The Alien", "The Secret", "The Android", "The Forgotten", "The Reaction", "The Change", "The Unknown", "The Escape", "The Warning", "The Underground", "The Decision", "The Departure", "The Discovery", "The Threat", "The Solution", "The Pretender", "The Suspicion", "The Extreme", "The Attack", "The Exposed", "The Experiment", "The Sickness", "The Reunion", "The Conspiracy", "The Separation", "The Illusion", "The Prophecy", "The Proposal", "The Mutation",  "The Weakness", "The Arrival", "The Hidden", "The Other", "The Familiar", "The Journey", "The Test", "The Unexpected", "The Revelation", "The Deception", "The Resistance", "The Return", "The Diversion", "The Ultimate", "The Absolute", "The Sacrifice", "The Answer", "The Beginning");

let jakeBooksSentence = "The Jake POV Books are ";

let j = 0;

while(j<53){
	function addParagraphJB(){
		let outputDivJB = document.getElementById("outputJakeBooks");
		
		if (j<39) {
			jakeBooksSentence+= `${animorphsBooks[j]}, `;
			j+=5;
		} else if (j>=40 && j<47) {
			jakeBooksSentence+= `${animorphsBooks[j]}, `;
			j+=6;
		} else {
			jakeBooksSentence+= `and ${animorphsBooks[j]}.`;
			j+=6;
		}
		outputDivJB.innerHTML = jakeBooksSentence;
	}
    addParagraphJB();
}
	
let marcoBooksSentence = "The Marco POV Books are ";

let m = 4;

do{
	function addParagraphMB(){
		let outputDivMB = document.getElementById("outputMarcoBooks");
		if (m<44) {
			marcoBooksSentence+= `${animorphsBooks[m]}, `;
			m+=5;
		} else if(m>=44 && m<50){
			marcoBooksSentence+= `${animorphsBooks[m]}, `;
			m+=6;	
		} else {
			marcoBooksSentence+= `and ${animorphsBooks[m]}.`;
			m+=6;
		} 
		outputDivMB.innerHTML = marcoBooksSentence;
	}
    addParagraphMB();
}while(m<51)

let tobiasBooksSentence = "The Tobias POV Books are ";

let t = 2;

while(t<49){
	function addParagraphTB(){
		let outputDivTB = document.getElementById("outputTobiasBooks");
		if (t<33) {
			tobiasBooksSentence+= `${animorphsBooks[t]}, `;
			t+=10;
		} else if(t>=33 && t<43){
			tobiasBooksSentence+= `${animorphsBooks[t]}, `;
			t+=6;	
		} else {
			tobiasBooksSentence+= `and ${animorphsBooks[t]}.`;
			t+=6;
		} 
		outputDivTB.innerHTML = tobiasBooksSentence;
	}
    addParagraphTB();
}

let axBooksSentence = "The Ax POV Books are ";

let a = 7;

do{
	function addParagraphAB(){
		let outputDivAB = document.getElementById("outputAxBooks");
		console.log(a);
	/* 	if (a<=37) {
			axBooksSentence+= `${animorphsBooks[a]}, `;
			a+=10;
		} else if (a>37 && a<45) {
			axBooksSentence+= `${animorphsBooks[a]}, `;
			a+=8;	
		} else {
			axBooksSentence+= `and ${animorphsBooks[a]}.`;
			a+=6;
		}  */
		if (a<=37) {
			axBooksSentence+= `${animorphsBooks[a]}, `;
			a+=10;
			if (a===37) {
				axBooksSentence+= `${animorphsBooks[a]}, `;
				a+=8;
			}
		} else if (a>=38 && a<51) {
			axBooksSentence+= `${animorphsBooks[a]}, `;
			a+=6;
		} else {
			axBooksSentence+= `and ${animorphsBooks[a]}.`;
			a+=6;
		}
		outputDivAB.innerHTML = axBooksSentence;
	}
    addParagraphAB();
}while(a<52)

let r = 1;

let rachelBooksSentence = "The Rachel POV Books are ";

while(r<54){
	function addParagraphRB(){
		let outputDivRB = document.getElementById("outputRachelBooks");
		if (r<41) {
			rachelBooksSentence+= `${animorphsBooks[r]}, `;
			r+=5;
		} else if (r>=41 && r<48) {
			rachelBooksSentence+= `${animorphsBooks[r]}, `;
			r+=6;
		} else {
			rachelBooksSentence+= `and ${animorphsBooks[r]}.`;
			r+=6;
		}
		outputDivRB.innerHTML = rachelBooksSentence;
	}
    addParagraphRB();
}
	
let cassieBooksSentence = "The Cassie POV Books are ";

let c = 3;

do{
	function addParagraphCB(){
		let outputDivCB = document.getElementById("outputCassieBooks");
		if (c<43) {
			cassieBooksSentence+= `${animorphsBooks[c]}, `;
			c+=5;
		} else if(c>=43 && c<49){
			cassieBooksSentence+= `${animorphsBooks[c]}, `;
			c+=6;	
		} else {
			cassieBooksSentence+= `and ${animorphsBooks[c]}.`;
			c+=6;
		} 
		outputDivCB.innerHTML = cassieBooksSentence;
	}
    addParagraphCB();
}while(c<50)
