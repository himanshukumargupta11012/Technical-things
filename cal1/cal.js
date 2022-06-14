let output = document.getElementById("console");
        function Clear() {
            output.value = "";
        }
        function del() {
            output.value = output.value.slice(0, -1)
        }
        function calculate() {
            output.value = eval(output.value);
        }
        function display(num) {
            output.value += num;
        }
        function fact(){
            let t=1
            for(let i=0;i<output.value;i++)  t*=(i+1);
            output.value=t;
        }
        addEventListener("keypress",function(event){
            if(event.key==="Enter"){
                event.preventDefault();
                calculate();
            }
        })

        addEventListener("keypress",function(event){
            if(event.key==="C"||event.key==="c"){
                event.preventDefault();
                Clear();
            }
        })

        addEventListener("keypress",function(event){
            if(event.key==="D"||event.key==="d"){
                event.preventDefault();
                del();
            }
        })

        addEventListener("keypress",function(event){
            if(event.key==="F"||event.key==="f"){
                event.preventDefault();
                fact();
            }
        })
        //  if(output.value[output.value.length-1] !='1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0'||'+'||'-'|'%'||'*'||'/'||'.'||'') alert("Don't use characters");
     
    console.log(output.value[output.value.length-1])

    if(output.value[output.value.length-2]=="+"&&output.value[output.value.length-1]=="+")alert("Don't use characters");
    console.log(output.value[output.value.length-1])
    console.log(output.value[output.value.length-2])
    setInterval(function(){ if((output.value[output.value.length-2]=="+"||output.value[output.value.length-2]=="-"||output.value[output.value.length-2]=="*"||output.value[output.value.length-2]=="%"||output.value[output.value.length-2]=="/")
     && (output.value[output.value.length-1]=="+"||output.value[output.value.length-1]=="-"||output.value[output.value.length-1]=="*"||output.value[output.value.length-1]=="/"||output.value[output.value.length-1]=="%")) {alert("Syntax error");
    output.value = output.value.slice(0, -1);}

    if(output.value[output.value.length-1] !='1'&&output.value[output.value.length-1] !='2'&&output.value[output.value.length-1] !='3'&&output.value[output.value.length-1] !='4'&&output.value[output.value.length-1] !='5'
    &&output.value[output.value.length-1] !='6'&&output.value[output.value.length-1] !='7'&&output.value[output.value.length-1] !='8'&&output.value[output.value.length-1] !='9'&&output.value[output.value.length-1] !='0'
    &&output.value[output.value.length-1] !='+'&&output.value[output.value.length-1] !='-'&&output.value[output.value.length-1] !='%'&&output.value[output.value.length-1] !='*'&&output.value[output.value.length-1] !='/'
    &&output.value[output.value.length-1] !='.'&&output.value[output.value.length-1] !=''&&output.value[output.value.length-1] !=undefined) {alert("Don't use characters");

    
    output.value = output.value.slice(0, -1);}


},0);

console.log(output.value[output.value.length-1])