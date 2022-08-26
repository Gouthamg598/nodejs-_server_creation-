const http=require('http')
const url=require(('url'))
const fs=require('fs')

// creatng a server
let server =http.createServer((req,res)=>{
    let urlj=url.parse(req.url,true)
    console.log(urlj)
    // res.write('<h1>this is the first server</h1>')

    // // console.log(req.path)
    // console.log(req.url)
    // res.write('<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3a-FlPpkxbx4iE0xg28b5SXgP49fxkR-hw&usqp=CAU></img>')
    // res.end()

    if(req.url=='/color'){
        let col=fs.readFileSync('./website/colors.html')
        res.write(col)
        res.write('<h1>iam colors page</h1>')
        res.end()
    }
    else if(req.url=='/index'){
        let pa = fs.readFileSync('./website/index.html')
        res.write(pa)
        res.write('<h1>your in index page</h1>')
     
        res.end()
    }
    else if(req.url=='/quot'){
        let qu = fs.readFileSync('./website/Quotations.html')
        res.write(qu)
        res.write('<h1>your are in qutation page</h1>')
        res.end()
    }
    
    else if(req.url=='/text'){
        let t = fs.readFileSync('./website/textformating.html')
        res.write(t)
        res.write('<h1>your are in textfromating page</h1>')
        res.end()
    }
    else if(req.url=='/sport'){
        let t = fs.readFileSync('./website/sportify.html')
        res.write(t)
        res.write('<h1>your are in your in last page</h1>')
        res.end()
    }
    
   
}
);

server.listen(9999,()=>{
    console.log('server is running on port 9999')
})