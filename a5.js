let parent = document.querySelector('.parentclass');
let next = document.querySelector('.nextbtnClass'); 

showDetails();
        next.addEventListener('click',function getdata(){
            showDetails();            
        })
        async function showDetails(){
    
            let data = await fetch('https://official-joke-api.appspot.com/random_joke'); 
            let output = await data.json();
            console.log(output);
        
        let child = document.createElement('div');
        let setup = document.createElement('div');
        let punchline = document.createElement('div');
        setup.innerHTML = 'setup: ' + output.setup;
        punchline.innerHTML = 'punchline: ' +  output.punchline;
        setup.style.color = 'blue';
        punchline.style.color = 'red';
        child.appendChild(setup);
        child.appendChild(punchline);
        parent.innerHTML=" ";
        parent.appendChild(child);
        }
