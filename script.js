function countVowels(){

    var text=document.getElementById('inputText').value;
    var noOfVowel=0;

    text = text.toLowerCase();

    for(i=0; i<text.length; i++){
        var char=text.charAt(i);
        if(isVowel(char)){
            noOfVowel ++;
        }
    }

    var vowelCount=document.getElementById('vowelCount');
    vowelCount.textContent="Number of vowels:" + noOfVowel;
    // console.log(vowelCount);


}

function isVowel(char){
    var vowels=['a','e','i','u','o'];
    return vowels.includes(char);
}