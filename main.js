var text = `赵献煜同学

多喝热水，按时吃药，祝你早日康复^_^

送你一杯热水
`
var code = `.cup {
    background-color:#fff;
    height:80px;
    width: 80px;
    border-radius: 0 0 2rem 2rem;
    box-shadow: inset -3px -2px 3px 1px rgba(0,0,0,.2);
    position: relative;
    margin: 0 auto;
    }
    .cup .handle{
    position: absolute;
    height: 50px;
    width: 40px;
    background: transparent;
    border-radius:20px;
    margin:6px 0 0 60px;
    z-index: -1;
    box-shadow: inset 0px 1px 2px 7px #ddd
        
    }
    
    .cup .smoke{
    position: absolute;
    box-shadow: 1px 1px 12px 12px rgba(255,255,255,.3);
    margin: -35px 20px;
    height:0px;
    width:0px;
    padding: 20px 20px;
    background: rgba(255,255,255,.3);
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation: wind 4000ms infinite; 
    -ms-transform: skewY(0deg); /* IE 9 */
    -webkit-transform: skewY(0deg); /* Safari */
        transform: skewY(0deg);
    z-index: -1;
    }
    .plate{
    margin: 0px;
    }
    .plate-sup{
    content:"";
    width:130px;
    height:10px;
    background: #fff;
    border-radius: 0 0 1rem 1rem;
    margin: 0 auto;
    }
    
    .plate-inf{
    content:"";
    width:80px;
    height:5px;
    background: #ddd;
    border-radius: 0 0 1rem 1rem;
    margin: 0 auto;
    }
    .plate .shadow{
    content:"";
    background-color: rgba(0,0,0,.2);
    width:120px;
    height: 5px;
    margin: -1px auto;
    border-radius: 50%;
    }
    
    .footer { width: 100%; }
    
    .footer p{
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    text-align: center;
    }
    .footer a{
        color: #ddd;
    }`

var endText = `完成~`
function writeText(text,fn){
    let n = 0
    setTimeout(function run(){
        n+=1
        content.innerHTML = text.substring(0,n)
        if(n<text.length){
            setTimeout(run,100)
        }else{
            fn && fn.call()
        }
    },100)
}   
function writeEnd(endText,fn){
    let n = 0
    setTimeout(function run(){
        n+=1
        end.innerHTML = endText.substring(0,n)
        if(n<endText.length){
            setTimeout(run,100)
        }else{
            fn && fn.call()
        }
    },100)
}   
function writeCode(code,fn){
    let n = 0
    setTimeout(function run(){
        n+=1
        styleTag.innerHTML = code.substring(0,n)
        if(n<code.length){
            setTimeout(run,10)
        }else{
            fn && fn.call()
        }
    },10)
}   
writeText(text,()=>{
    writeCode(code,()=>{
        writeEnd(endText)
    })
})
