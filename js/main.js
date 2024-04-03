const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('hello') || text.includes("jiji")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Hello Sir!';
            texts.appendChild(p);
        }
        if(text.includes('what is your name') || text.includes("what's your name")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = "My Name is Jiji, Yours?";
            texts.appendChild(p);
        }
        if(text.includes('how are you')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'I am fine, How about you?';
            texts.appendChild(p);
        }
        if(text.includes('what is your age') || text.includes("how old are you")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Only few days ago, beacuse i was born on 3rd April 2024!';
            texts.appendChild(p);
        }
        if(text.includes('open my YouTube channel')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'yes sir, opening....';
            texts.appendChild(p);
            window.open('https://www.youtube.com/@WebDesign-013')
        }
        if(text.includes('open new window')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'yes sir, opening....';
            texts.appendChild(p);
            window.open('')
        }
        if(text.includes('close the window')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'yes sir, opening....';
            texts.appendChild(p);
            window.close('')
        }
        p = document.createElement('p');
    }

    console.log(e);
})

recognition.addEventListener('end', ()=> {
    recognition.start();
})

recognition.start();
