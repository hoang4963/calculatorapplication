
function add()
{
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result;
    a = parseFloat(firstnumber);
    b = parseFloat(secondnumber);
    result = a + b;
    document.getElementById('result').innerHTML = result;

}
function  sub()
{
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result;
    a = parseFloat(firstnumber);
    b = parseFloat(secondnumber);
    result = a - b;
    document.getElementById('result').innerHTML = result;

}
function mul()
{
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result;
    a = parseFloat(firstnumber);
    b = parseFloat(secondnumber);
    result = a * b;
    document.getElementById('result').innerHTML = result;

}
function div()
{
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result;
    a = parseFloat(firstnumber);
    b = parseFloat(secondnumber);
    result = a/b;
    document.getElementById('result').innerHTML = result;

}
