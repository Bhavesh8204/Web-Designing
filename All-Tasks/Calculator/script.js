op =   document.getElementById('screen');

function wipe()
{
  op.value="";
}

function del()
{
  op.value=op.value.slice(0,-1);
}


function show(n)
{
  op.value= op.value + n;
}

// x = x+n;

// x+=n;
  
function calc()
{
  op.value= eval(op.value)
}

