for(let i=1;i<=10;i++){
    let row = "<br>";
    for(let space=1;space<=10-i;space++){
        row+="&nbsp&nbsp";
    }
    for(let a=1;a<=2*i-1;a++){
        row +="*";
    }
    document.write(row)
    


}
for(let i=10;i>=1;i--){
    let row = "<br>";
    for(let space=1;space<=10-i;space++){
        row+="&nbsp&nbsp";
    }
    for(let a=1;a<=2*i-1;a++){
        row +="*";
    }
    document.write(row)
    


}

