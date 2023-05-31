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
        // if(output.value[output.value.length-1] !='1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0'||'+'||'-'||'%'||'*'||'/'||'.'||' ') alert("Don't use characters");
     
    
