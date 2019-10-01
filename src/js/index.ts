let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("input");

let operationElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("operations");

let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("output");

let operateButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("operate");
operateButton.addEventListener("click", ()=>
{
    let resultstring: string="";
    outputElement.style.fontStyle="normal";
    
    let operation: string = operationElement.value;
    if(operation==="upperCase")
    {
        resultstring=inputElement.value.toUpperCase();
    }    
    else if(operation==="lowerCase")
    {
        resultstring=inputElement.value.toLowerCase();
    }
    else if(operation==="italics")
    {
        resultstring=inputElement.value;
        outputElement.style.fontStyle="italic";
    }
    else
    {
        resultstring=inputElement.value.replace("o", "jens-hansen havde en bondegård");
        resultstring=inputElement.value.replace("O", "jens-hansen havde en bondegård");
    }
    outputElement.innerHTML=resultstring;
})


