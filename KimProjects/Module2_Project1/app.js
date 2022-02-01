/*Counter*/
let ctr1 = 1;
let ctr2 = 1;
let ctr3 = 1;
let ctr4 = 1;
let ctr5 = 1;

/*get quote function*/
function getQuote(x) {
    if (x==1){
        if (ctr1==1){
            document.getElementById('quoteBox').textContent = "Elon's Quote[1]:\"Persistence is very important. You should not give up unless you are forced to give up.\"";
            ctr1 += 1;
        }
        else if (ctr1==2){
            document.getElementById('quoteBox').textContent = "Elon's Quote[2]:\"Those who fly solo have the strongest wings.\"";
            ctr1 += 1;
        }
        else if (ctr1==3){
            document.getElementById('quoteBox').textContent = "Elon's Quote[3]:\"Life is too short for long-term grudges.\"";
            ctr1 += 1;
        }
        else if (ctr1==4){
            document.getElementById('quoteBox').textContent = "Elon's Quote[4]:\"If you need inspiring words, don't do it.\"";
            ctr1 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Elon's Quote[5]:\"People work better when they know what the goal is and why\"";
            ctr1 = 1;
        }  
    }
    else if (x==2){
        if (ctr2==1){
            document.getElementById('quoteBox').textContent = "Duterte's Quote[1]:\"We cannot move forward if we allow the past to pull us back.\"";
            ctr2 += 1;
        }
        else if (ctr2==2){
            document.getElementById('quoteBox').textContent = "Duterte's Quote[2]:\"I could make this sacrifice if only to save this country from being fractured.\"";
            ctr2 += 1;
        }
        else if (ctr2==3){
            document.getElementById('quoteBox').textContent = "Duterte's Quote[3]:\"I will change this country even if it will cost me my life.\"";
            ctr2 += 1;
        }
        else if (ctr2==4){
            document.getElementById('quoteBox').textContent = "Duterte's Quote[4]:\"We must fight for what we believe in. Courage knows no limits cowardice does.\"";
            ctr2 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Duterte's Quote[5]:\"I don't care if I burn in hell for as long as the people I server live in paradise.\"";
            ctr2 = 1;
        }  

    }
    else if (x==3){
        if (ctr3==1){
            document.getElementById('quoteBox').textContent = "Felix's Quote[1]:\"You can just be you.\"";
            ctr3 += 1;
        }
        else if (ctr3==2){
            document.getElementById('quoteBox').textContent = "Felix's Quote[2]:\"When I started out I couldn’t even afford a proper computer to record gameplay on.\"";
            ctr3 += 1;
        }
        else if (ctr3==3){
            document.getElementById('quoteBox').textContent = "Felix's Quote[3]:\"Unless you stop trying, how can you not fail anymore.\"";
            ctr3 += 1;
        }
        else if (ctr3==4){
            document.getElementById('quoteBox').textContent = "Felix's Quote[4]:\"Life is too short to focus on the things you hate, focus on what you love instead.\"";
            ctr3 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Felix's Quote[5]:\"It’s important to love yourself.\"";
            ctr3 = 1;
        }  
        
    }
    else if (x==4){
        if (ctr4==1){
            document.getElementById('quoteBox').textContent = "Jimmy's Quote[1]:\"I’m motivated because I want to support my mom and my family.\"";
            ctr4 += 1;
        }
        else if (ctr4==2){
            document.getElementById('quoteBox').textContent = "Jimmy's Quote[2]:\"Every day is different so there is no like routine.\"";
            ctr4 += 1;
        }
        else if (ctr4==3){
            document.getElementById('quoteBox').textContent = "Jimmy's Quote[3]:\"You gotta fail for the most part to learn.\"";
            ctr4 += 1;
        }
        else if (ctr4==4){
            document.getElementById('quoteBox').textContent = "Jimmy's Quote[4]:\"Just fun to help people.\"";
            ctr4 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Jimmy's Quote[5]:\"I am motivated because I want to employ my friends and help them.\"";
            ctr4 = 1;
        }  
        
    }
    else {
        if (ctr5==1){
            document.getElementById('quoteBox').textContent = "Lengyel's Quote[1]:\"If you can't admit your defeat, you can't claim your victories.\"";
            ctr5 += 1;
        }
        else if (ctr5==2){
            document.getElementById('quoteBox').textContent = "Lengyel's Quote[2]:\"You need a little bit of rain to have a little bit of rainbow.\"";
            ctr5 += 1;
        }
        else if (ctr5==3){
            document.getElementById('quoteBox').textContent = "Lengyel's Quote[3]:\"The result was irrelevant because the effort was there.\"";
            ctr5 += 1;
        }
        else if (ctr5==4){
            document.getElementById('quoteBox').textContent = "Lengyel's Quote[4]:\"You can't have happiness without pain.\"";
            ctr5 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Lengyel's Quote[5]:\"Everyone's goal in life is to get the juice, but it is up to you to decide what your juice is.\"";
            ctr5 = 1;
        }  
        
    }
}
    

