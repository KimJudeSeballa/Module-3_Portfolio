/*Authors*/
let author1 = 1;
let author2 = 1;
let author3 = 1;
let author4 = 1;
let author5 = 1;

/*Function for get quote*/
function getQuote(z) {
    if (z==1){
        if (author1==1){
            document.getElementById('quoteBox').textContent = "Albert Einstein's Quote : \"The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.\"";
            author1 += 1;
        }
        else if (author1==2){
            document.getElementById('quoteBox').textContent = "Albert Einstein's Quote : \"Logic will get you from A to Z; imagination will get you everywhere.\"";
            author1 += 1;
        }
        else if (author1==3){
            document.getElementById('quoteBox').textContent = "Albert Einstein's Quote : \"Life is like riding a bicycle. To keep your balance, you must keep moving.\"";
            author1 += 1;
        }
        else if (author1==4){
            document.getElementById('quoteBox').textContent = "Albert Einstein's Quote : \"Anyone who has never made a mistake has never tried anything new.\"";
            author1 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Albert Einstein's Quote : \"Try not to become a man of success. Rather become a man of value.\"";
            author1 = 1;
        }  
    }
    else if (z==2){
        if (author2==1){
            document.getElementById('quoteBox').textContent = "Bob Marley's Quote : \"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.\"";
            author2 += 1;
        }
        else if (author2==2){
            document.getElementById('quoteBox').textContent = "Bob Marley's Quote : \"Don't Gain The World & Lose Your Soul, Wisdom Is Better Than Silver Or Gold.\"";
            author2 += 1;
        }
        else if (author2==3){
            document.getElementById('quoteBox').textContent = "Bob Marley's Quote : \"None but ourselves can free our minds.\"";
            author2 += 1;
        }
        else if (author2==4){
            document.getElementById('quoteBox').textContent = "Bob Marley's Quote : \"Live for yourself and you will live in vain; Live for others, and you will live again.\"";
            author2 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Bob Marley's Quote : \"The biggest coward of a man is to awaken the love of a woman without the intention of loving her.\"";
            author2 = 1;
        }  

    }
    else if (z==3){
        if (author3==1){
            document.getElementById('quoteBox').textContent = "Maya Angelou's Quote : \"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.\"";
            author3 += 1;
        }
        else if (author3==2){
            document.getElementById('quoteBox').textContent = "Maya Angelou's Quote : \"Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.\"";
            author3 += 1;
        }
        else if (author3==3){
            document.getElementById('quoteBox').textContent = "Maya Angelou's Quote : \"There is no greater agony than bearing an untold story inside you.\"";
            author3 += 1;
        }
        else if (author3==4){
            document.getElementById('quoteBox').textContent = "Maya Angelou's Quote : \"We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.\"";
            author3 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Maya Angelou's Quote : \"You may not control all the events that happen to you, but you can decide not to be reduced by them.\"";
            author3 = 1;
        }  
        
    }
    else if (z==4){
        if (author4==1){
            document.getElementById('quoteBox').textContent = "Meredith Grey's Quote : \"Too often, the thing you want most is the one thing you can’t have.\"";
            author4 += 1;
        }
        else if (author4==2){
            document.getElementById('quoteBox').textContent = "Meredith Grey's Quote : \"When the ground gives way and your world collapses, maybe you just need to have faith. And trust that you can survive this. Maybe you just need to hold on tight. And no matter what, don’t let go.\"";
            author4 += 1;
        }
        else if (author4==3){
            document.getElementById('quoteBox').textContent = "Meredith Grey's Quote : \"Some wounds we carry with us everywhere, and though the cut’s long gone, the pain still lingers.\"";
            author4 += 1;
        }
        else if (author4==4){
            document.getElementById('quoteBox').textContent = "Meredith Grey's Quote : \"Just because we can live without something, it doesn’t mean we have to.\"";
            author4 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Meredith Grey's Quote : \"We have to be willing to give up what we used to believe. The more we’re willing to accept what is and not what we thought, we’ll find ourselves exactly where we belong.\"";
            author4 = 1;
        }  
        
    }
    else {
        if (author5==1){
            document.getElementById('quoteBox').textContent = "Taylor Swift's Quote : \"Just be yourself, there is no one better.\"";
            author5 += 1;
        }
        else if (author5==2){
            document.getElementById('quoteBox').textContent = "Taylor Swift's Quote : \"Giving up doesn't always mean your weak sometimes your just strong enough to let go.\"";
            author5 += 1;
        }
        else if (author5==3){
            document.getElementById('quoteBox').textContent = "Taylor Swift's Quote : \"No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.\"";
            author5 += 1;
        }
        else if (author5==4){
            document.getElementById('quoteBox').textContent = "Taylor Swift's Quote : \"People haven't always been there for me but music always has.\"";
            author5 += 1;
        }
        else {
            document.getElementById('quoteBox').textContent = "Taylor Swift's Quote : \"This is a new year. A new beginning. And things will change.\"";
            author5 = 1;
        }  
        
    }
}
    

