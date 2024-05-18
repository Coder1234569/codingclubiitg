fetch('https://coding-week-2024-api.onrender.com/api/data')
    .then(res =>{
        return res.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(user => {
            if(user.id==1)
                {
                    document.querySelector('#big1 #b1').innerHTML=`${user.type}`;
                    document.querySelector('#big1 #text').innerHTML=user.content;
                    var ur=user.image;
                    console.log(ur.image);
                    document.querySelector('#big1').style.backgroundImage=`url(${ur})`;
                    document.querySelector('#big1 #date').textContent=`${user.author}`;
                    document.querySelector('#big1 #bigs1').textContent=` ${user.date}`;
                    
                        
                }
            if(user.id==2)
                {
                    document.querySelector('#big2 #b1').innerHTML=user.type;
                    document.querySelector('#big2 #text').innerHTML=user.content;
                    document.querySelector('#big2').style.backgroundImage=`url(${user.image})`;
                    document.querySelector('#big2 #date').textContent=`${user.author}`;
                    document.querySelector('#big2 #bigs2').textContent=` ${user.date}`;
    
                }
            if(user.id==3)
                {
                document.querySelector('#m1 #b1').innerHTML=user.type;
                document.querySelector('#m1 #text').innerHTML=user.content;
                document.querySelector('#m1').style.backgroundImage=`url(${user.image})`;
                document.querySelector('#m1 #date').textContent=`${user.author}`;
                document.querySelector('#m1 #ms1').textContent=` ${user.date}`;
                }
            if(user.id==4)
                {
                    document.querySelector('#m2 #b1').innerHTML=user.type;
                    document.querySelector('#m2 #text').innerHTML=user.content;  
                    document.querySelector('#m2').style.backgroundImage=`url(${user.image})`;      
                    document.querySelector('#m2 #date').textContent=`${user.author}`;
                    document.querySelector('#m2 #ms2').textContent=` ${user.date}`;
                }
            if(user.id==5)
                {
                    document.querySelector(".final #f2 img").src=`${user.image}`;
                    document.querySelector(".final #f2 #text").textContent=`${user.content}`;
                    document.querySelector(".final #time #s2").textContent=` ${user.date}`;
                }
            if(user.id==6)
                {
                    document.querySelector(".final #f3 img").src=`${user.image}`;
                    document.querySelector(".final #f3 #text").textContent=`${user.content}`;
                    document.querySelector(".final #time #s3").textContent=` ${user.date}`;

                }
            if(user.id==7)
                {
                    document.querySelector(".final #f4 img").src=`${user.image}`;
                    document.querySelector(".final #f4 #text").textContent=`${user.content}`;
                    document.querySelector(".final #time #s4").textContent=` ${user.date}`;

                }
            if(user.id==8)
                {
                    document.querySelector(".final #f5 img").src=`${user.image}`;
                    document.querySelector(".final #f5 #text").textContent=`${user.content}`;
                    document.querySelector(".final #time #s5").textContent=` ${user.date}`;

                }
            if(user.id==9)
                {
                    document.querySelector(".final #f6 img").src=`${user.image}`;
                    document.querySelector(".final #f6 #text").textContent=`${user.content}`;
                    document.querySelector(".final #time #s6").textContent=` ${user.date}`;

                }
            if(user.id==10)
                {
                    document.querySelector(".final #f7 img").src=`${user.image}`;
                    document.querySelector(".final #f7 #text").textContent=`${user.content}`;
                    document.querySelector(".final #time #s7").textContent=` ${user.date}`;

                }
            
        })
    })
