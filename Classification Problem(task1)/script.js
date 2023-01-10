var greenarrx = [];
var greenarry = [];
var bluearrx =[];
var bluearry =[];
var redarrx=[];
var redarry=[];
var blackarrx=[];
var blackarry=[];
var datax1=[];
var datax2=[];
var dataDiserd=[];
var bluecounter=0;
var redcounter=0;
var greencounter=0;
var blackcounter=0;
var errorarray=[];
var fwight=[];
var swight=[];
var l=0;
var wf;
var ws;
var tcanvas = document.getElementById('canvas');
var ctx = tcanvas.getContext("2d");


var iterationNO=0;
var w1=0;
var w2=0;
var bigX=0;
var countarr=0;
var yact=0;
var errorr=0;
var cor1=0;
var cor2=0;
var alpha=0;
var temparray=[];







ctx.strokeStyle = 'black';
ctx.lineWidth = 3;


  ctx.beginPath();
    ctx.moveTo(80, 120);
	ctx.lineTo(80, 1350);
    ctx.stroke();

    ctx.strokeStyle = 'black';
	ctx.lineWidth = 3;


    ctx.beginPath();
    ctx.moveTo(20, 1300);
	ctx.lineTo(1400, 1300);
    ctx.stroke();

    function solve() {
        copy_array(temparray,dataDiserd);
        //iterationNO = parseInt($("#mnot").val());
        iterationNO=parseInt($("#mnot").val());
        
        alpha = parseFloat($("#myRange").val()) / 100;
       



        if (detector()<2||detector()>4){alert("Please Enter valid input"); location.reload();}

        else if (detector() == 2) {
            percetron(datax1,datax2);
            painter();
            Performce();
        }

        else if(detector()==3){
            if(blackarrx.length==0){
                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==2||temparray[j]==3){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
               // painter();
               // cleararray(errorarray);

               var l3=minError(errorarray);
               wf=fwight[l3];
               ws=swight[l3];
        setTimeout(function () {
            line_painter2(datax1, datax2, wf, ws);
        }, 10);
                copy_array(temparray,dataDiserd);

                
                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==1||temparray[j]==3){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
               // painter();
              
                var l=minError(errorarray);
               
        wf=fwight[l];
        ws=swight[l];
        setTimeout(function () {
            line_painter3(datax1, datax2, wf, ws);
        }, 10);

               
               // cleararray(errorarray);
                copy_array(temparray,dataDiserd);

               
              

                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==1||temparray[j]==2){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
              //  painter();
              
              var l2=minError(errorarray);
              
              wf=fwight[l2];
              ws=swight[l2];
              setTimeout(function () {
                  line_painter(datax1, datax2, wf, ws);
              }, 10);

              Performce();

                cleararray(errorarray);
                copy_array(temparray,dataDiserd);

                for(var j=0;j<temparray.length;j++){
                 
                    temparray[j]=dataDiserd[j];
                
            }
            }




            else if(greenarrx.length==0){

                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==2||temparray[j]==3){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
               // painter();
               // cleararray(errorarray);

               var l3=minError(errorarray);
               
        wf=fwight[l3];
        ws=swight[l3];
        setTimeout(function () {
            line_painter2(datax1, datax2, wf, ws);
        }, 10);
                copy_array(temparray,dataDiserd);

                for(var j=0;j<temparray.length;j++){
                 
                    temparray[j]=dataDiserd[j];
                
            }
              


              

               
                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==4||temparray[j]==3){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
               // painter();
              
                var l=minError(errorarray);
               
        wf=fwight[l];
        ws=swight[l];
        setTimeout(function () {
            line_painter3(datax1, datax2, wf, ws);
        }, 10);

               
               // cleararray(errorarray);
                copy_array(temparray,dataDiserd);

               
              

                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==4||temparray[j]==2){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
              //  painter();
              
              var l2=minError(errorarray);
              
              wf=fwight[l2];
              ws=swight[l2];
              setTimeout(function () {
                  line_painter(datax1, datax2, wf, ws);
              }, 10);

              Performce();


                cleararray(errorarray);
                copy_array(temparray,dataDiserd);

                for(var j=0;j<temparray.length;j++){
                 
                    temparray[j]=dataDiserd[j];
                
            }

            
            }



            else if(bluearrx.length==0){

                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==1||temparray[j]==2){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
               // painter();
               // cleararray(errorarray);

               var l3=minError(errorarray);
              
        wf=fwight[l3];
        ws=swight[l3];
        setTimeout(function () {
            line_painter2(datax1, datax2, wf, ws);
        }, 10);
                copy_array(temparray,dataDiserd);

                for(var j=0;j<temparray.length;j++){
                 
                    temparray[j]=dataDiserd[j];
                
            }
              


               

                
                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==4||temparray[j]==2){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
               // painter();
              
                var l=minError(errorarray);
               
        wf=fwight[l];
        ws=swight[l];
        setTimeout(function () {
            line_painter3(datax1, datax2, wf, ws);
        }, 10);

               
               // cleararray(errorarray);
                copy_array(temparray,dataDiserd);

               
              

                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==4||temparray[j]==1){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
              //  painter();
              
              var l2=minError(errorarray);
              
              wf=fwight[l2];
              ws=swight[l2];
              setTimeout(function () {
                  line_painter(datax1, datax2, wf, ws);
              }, 10);


Performce();
                cleararray(errorarray);
                copy_array(temparray,dataDiserd);

                for(var j=0;j<temparray.length;j++){
                 
                    temparray[j]=dataDiserd[j];
                
            }
            

            }
            else{


                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==1||temparray[j]==3){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
               // painter();
               // cleararray(errorarray);

               var l3=minError(errorarray);
              
        wf=fwight[l3];
        ws=swight[l3];
        setTimeout(function () {
            line_painter2(datax1, datax2, wf, ws);
        }, 10);
                copy_array(temparray,dataDiserd);

                for(var j=0;j<temparray.length;j++){
                 
                    temparray[j]=dataDiserd[j];
                
            }
              


                

                
                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==4||temparray[j]==3){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
               // painter();
              
                var l=minError(errorarray);
               
        wf=fwight[l];
        ws=swight[l];
        setTimeout(function () {
            line_painter3(datax1, datax2, wf, ws);
        }, 10);

               
               // cleararray(errorarray);
                copy_array(temparray,dataDiserd);

               
              

                for(var j=0;j<temparray.length;j++){
                    if(temparray[j]==4||temparray[j]==1){
                        temparray[j]=5;
                    }
                }
                cleararray(errorarray);
                percetron(datax1,datax2);
              //  painter();
              
              var l2=minError(errorarray);
              
              wf=fwight[l2];
              ws=swight[l2];
              setTimeout(function () {
                  line_painter(datax1, datax2, wf, ws);
              }, 10);

            Performce();

                cleararray(errorarray);
                copy_array(temparray,dataDiserd);

                for(var j=0;j<temparray.length;j++){
                 
                    temparray[j]=dataDiserd[j];
                
            }

            }









        }
        else if(detector()==4){


            for(var j=0;j<temparray.length;j++){
                if(temparray[j]==2||temparray[j]==3||temparray[j]==4){
                    temparray[j]=5;
                }
            }
            cleararray(errorarray);
            percetron(datax1,datax2);
           // painter();
           // cleararray(errorarray);

           var l3=minError(errorarray);
           
    wf=fwight[l3];
    ws=swight[l3];
    setTimeout(function () {
        line_painter2(datax1, datax2, wf, ws);
    }, 10);
            copy_array(temparray,dataDiserd);

            for(var j=0;j<temparray.length;j++){
             
                temparray[j]=dataDiserd[j];
            
        }
          


           

            
            for(var j=0;j<temparray.length;j++){
                if(temparray[j]==1||temparray[j]==3||temparray[j]==4){
                    temparray[j]=5;
                }
            }
            cleararray(errorarray);
            percetron(datax1,datax2);
           // painter();
          
            var l=minError(errorarray);
           
    wf=fwight[l];
    ws=swight[l];
    setTimeout(function () {
        line_painter3(datax1, datax2, wf, ws);
    }, 10);

           
            cleararray(errorarray);
            copy_array(temparray,dataDiserd);

           
          

            for(var j=0;j<temparray.length;j++){
                if(temparray[j]==2||temparray[j]==1||temparray[j]==4){
                    temparray[j]=5;
                }
            }
            cleararray(errorarray);
            percetron(datax1,datax2);
          //  painter();
          
          var l2=minError(errorarray);
          
          wf=fwight[l2];
          ws=swight[l2];
          setTimeout(function () {
              line_painter555(datax1, datax2, wf, ws);
          }, 10);

            cleararray(errorarray);
            copy_array(temparray,dataDiserd);

           


            for(var j=0;j<temparray.length;j++){
                if(temparray[j]==1||temparray[j]==2||temparray[j]==3){
                    temparray[j]=5;
                }
            }
            cleararray(errorarray);
            percetron(datax1,datax2);
          //  painter();
          
          var l2=minError(errorarray);
          
          wf=fwight[l2];
          ws=swight[l2];
          setTimeout(function () {
              line_painter444(datax1, datax2, wf, ws);
          }, 10);

   Performce();
          copy_array(temparray,dataDiserd);
        }

     
    }
    function painter(){
        var l=minError(errorarray);
        wf=fwight[l];
        ws=swight[l];
        setTimeout(function () {
            line_painter(datax1, datax2, wf, ws);
        }, 10);

    }
function percetron(datax,datay){
    w1 = getRndInteger(-0.5, 0.5);
    w2 = getRndInteger(-0.5, 0.5);
    for (let i = 0; i <= iterationNO; i++) {
        bigX = (datax[countarr] * w1) + (datay[countarr] * w2) - (1 * 1.5);
        yact = sigmoid(bigX);
        arraynormalizer(temparray);
        errorr = temparray[countarr] - yact;
        arrayuntinormalizer(temparray);
        errorarray[i]=errorr;
        cor1 = alpha * datax[countarr] * errorr;
        cor2 = alpha * datay[countarr] * errorr;
        w1 = w1 + cor1;
        fwight[i]=w1;
        w2 = w2 + cor2;
        swight[i]=w2;

        if (countarr == datax2.length - 1) countarr = 0;
        countarr++;
    }
   
}
function line_painter(xarr,yarr,fw,sw){
        var y = ((fw * xarr[0]+150) - 1.5) / sw;
        var x = xarr[xarr.length-1];
        var yy = ((fw * xarr[xarr.length-1]) - 1.5) / sw;
        var xx = xarr[0]+150;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(xx,yy);
        ctx.stroke();
}

function line_painter3(xarr,yarr,fw,sw){
    var y = ((fw * xarr[0]-100) - 1.5) / sw;
    var x = xarr[xarr.length-1]+300;
    var yy = ((fw *(xarr[xarr.length-1]-500)) - 1.5) / sw;
    var xx = xarr[0]-100;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(xx,yy);
    ctx.stroke();
}


function line_painter444(xarr,yarr,fw,sw){
    var y = (((fw * xarr[0]-100) - 1.5) / sw)+500;
    var x = xarr[xarr.length-1]+180;
    var yy = (((fw *(xarr[xarr.length-1]-500)) - 1.5) / sw)+500;
    var xx = xarr[0]-100;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(xx,yy);
    ctx.stroke();
}

function line_painter2(xarr,yarr,fw,sw){
    var y = ((fw * (xarr[0]+180)) - 1.5) / sw;
    var x = xarr[0];
    var yy = ((fw * xarr[xarr.length-1]) - 1.5) / sw;
    var xx = xarr[xarr.length-1]+180;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(xx,yy);
    ctx.stroke();
}


function line_painter555(xarr,yarr,fw,sw){
    var y = (((fw * (xarr[0]+180)) - 1.5) / sw)-500;
    var x = xarr[0];
    var yy = (((fw * xarr[xarr.length-1]) - 1.5) / sw)-500;
    var xx = xarr[xarr.length-1]+180;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(xx,yy);
    ctx.stroke();
}

function line_painter4(xarr,yarr,fw,sw){
    var y = (((fw * (xarr[0]+500)) - 1.5) / sw )-100;
    var x = xarr[0];
    var yy = (((fw * xarr[xarr.length-1]) - 1.5) / sw)-100;
    var xx = xarr[xarr.length-1]+300;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(xx,yy);
    ctx.stroke();
}

function detector()
{
    var x=0;
    if(!(greenarrx.length==0)){x++;}
    if(!(bluearrx.length==0)){x++;}
    if(!(redarrx.length==0)){x++;}
    if(!(blackarrx.length==0)){x++;}
    return x;
}
function sigmoid(x){
        return (1/(1+(Math.e)^-x));
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}






function copy_array(b,a){
    var i = a.length;
    while(i--) b[i] = a[i];
}
function cleararray(a){
        i=a.length;
        while (i--)a[i]=0;
}
function arraynormalizer(arr){
        var i=arr.length;
        while(i--){arr[i]=normalizer(arr[i]);}
}
function arrayuntinormalizer(arr){
    var i=arr.length;
    while(i--){arr[i]=untinormalizer(arr[i]);}
}
function normalizer(val) { return (val - 1) / 4; }
function untinormalizer(val){return (val*4)+1;}
function minError(arr){
        var arr2=[];
        var j=datax2.length;//#of possible input (#of elements in one epoch)
        arr2=group(j,arr);
        
        
        var x=findmin(arr2);
        
        var z=(x+1*j)-1;
        return z;
}
function findmin(array){
    for (var c = 1; c < array.length-1; c++) {
        if (array[c] < array[l])
            l = c;
    }
    return l;
}
function group(n, array) {
    const result = [];
    let i = 0;
    while (i < array.length) {
        let sum = 0;
        for (let j = 0; j < n && i + j < array.length; j++) {
            sum +=Math.abs(array[i + j]);
        }
        result.push(sum);
        i += n;
    }
    return result;
}



function sysperformance(){
    var i=0;
    var correct=0;
    let o=0;
    i=errorarray.length;
    while (i--){
        if (errorarray[i]==0){
            //correct++;
        }
        correct=correct+errorarray[i];
        let u=correct/errorarray.length;
        let r=parseFloat(u).toFixed(2);
        o=(1-r)*100;
    }
    var correctpred=parseFloat(correct).toFixed(2);
    correct=parseFloat(correct/errorarray.length).toFixed(2);
    return {
        numberofcorrect:correctpred,
        percentage:o
    };
}

function Performce(){

    alert ("# of correct predictions ="+sysperformance().numberofcorrect+"\n"+"Then the # of wrong predictions is = "+Math.abs(errorarray.length-sysperformance().numberofcorrect)+"\n"+
    "Then Error rate is ="+Math.abs(1-sysperformance().percentage));
}
