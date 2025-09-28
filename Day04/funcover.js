function add (...a)
{
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i];
    }
    console.log(sum);
    
}

add(2,3,4)