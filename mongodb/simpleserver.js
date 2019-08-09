const http=require('http'); //import http module
const fs=require('fs');
let rawdata=JSON.parse(fs.readFileSync('raw.json','utf-8'));
let csedata=JSON.parse(fs.readFileSync('cse.json','utf-8'));
let htmlread=fs.readFileSync("basehtml.html",'utf-8');
console.log(htmlread);
const server=http.createServer((req,res)=>{   //create server
    const createmarkup=(markup)=>{  
                let list='<div>'
                markup.forEach((element) => {
                list+=
                `
                <a href="#"><div class="container" id=${element.id}><p>${element.name}</p><img  width="193px" height="130px"src=${element.photo}/><br>
                <div style=margin-left:70px; class="icons">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                </div>    
                </div></a>
                
                `
                })
                list+='</div>'
                data=htmlread.replace("${markup}",list);
                return data;
            }
    
        if(req.url==='/home' || req.url==='/')
        {
            res.end('<h1>Traniees</h1><a href="/raw">Raw Engg</a><br><a href="/contentstack">Contentstack</a>');        
        }
        else if(req.url==='/raw')
        {   
            res.writeHead(200,
                {
                    'Content-Type': 'text/html',
                    'response':'raw',
                    
                })
                let list=createmarkup(rawdata)
                res.end(list)

               

                
               
                
            }
        else if(req.url==='/contentstack')
        {
            res.writeHead(200,
                {
                    'Content-Type': 'text/html',
                    'response':'contentst',
                    
                })

                let list = createmarkup(csedata)
                res.end(list);
                // let listOfContent="<div display: inline-block>"
                // csedata.forEach((element) => {
                //     listOfContent +=`<div><p>${element.name}</p><img  width="193px" height="130px"src=${element.photo}/></div>`
                // })
                // listOfContent+='</div>'
                // res.end(listOfContent);
                
        }
        else if(req.url==='/contact')
        {
            res.end('<h1> Contact info page</h1>');
        }
        else if(req.url===`/newpage`){
            res.end(`<h1>data</h1>`)
        }
        else{
            res.writeHead('404');
            res.end('<h2>page not found</h1>');
        }
    })

server.listen(5000);
console.log("server stared on port 3000");


// const fs = require('fs')
// const raw=fs.readFileSync('./complex.json','utf-8');
// const data=JSON.parse(raw);

// const iterjson=data.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug[0];
// console.log(iterjson.name);

